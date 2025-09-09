import * as WebBrowser from 'expo-web-browser';
import { Button, Text, View } from 'react-native';
import { useSession } from '../ctx';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const { signIn, session, isLoading } = useSession();
  const router = useRouter();

  // Effect to handle redirection after successful sign-in
  useEffect(() => {
    if (session) {
      router.replace('/'); // Replace with the desired route
    }
  }, [session, router]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }


  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {session ? (
        <Text>Welcome! You are logged in.</Text>
      ) : (
        <>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
            Welcome to SplitShare
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
            An app designed to help you keep track of shared expenses with friends or family, whether on a trip or for a short period. Please sign in to continue.
          </Text>
          <Button title="Sign In" onPress={() => signIn()} />
        </>
      )}
    </View>
  );
}