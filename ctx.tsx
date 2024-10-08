import { useContext, createContext, type PropsWithChildren, useEffect } from "react";
import { useStorageState } from './useStorageState';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import axios from 'axios';

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

// This hook can be used to access the user info.

export function useSession(){
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value){
            throw new Error('useSession must be wrapped in a <SessionProvider/>');
        }
    }
    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');
    const discovery = useAutoDiscovery('http://localhost:8080/realms/SplitShare');
    const [request, result, promptAsync] = useAuthRequest(
        {
            clientId: 'splitshare-vue',
            redirectUri: makeRedirectUri({
                scheme: 'http://localhost:8081'
            }),
            scopes: ['openid', 'profile'],
            usePKCE: false
        },
        discovery,
    );
    
    useEffect(() => {
        if (result && result.type === 'success') {
          const code = result.params.code;
    
          axios.post('http://localhost:8080/realms/SplitShare/protocol/openid-connect/token', new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: 'splitshare-vue',
            client_secret: 'Dwp6UAU3V2M25FmEdi67luDy5ZzTUBaK',
            code: code,
            redirect_uri: makeRedirectUri({
              scheme: 'http://localhost:8081'
            })
          }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(response => {
            console.log(response.data)
            setSession(response.data.access_token);
          })
          .catch(error => {
            console.error('Token exchange error:', error);
          });
        }
      }, [result]);

      const signIn = () => {
        promptAsync();
      };
    
      const signOut = () => {
        setSession(null);
      };

      return (
        <AuthContext.Provider
          value={{
            signIn,
            signOut,
            session,
            isLoading,
          }}>
          {children}
        </AuthContext.Provider>
      );
    }