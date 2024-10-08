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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {session ? (
        <Text>Welcome! You are logged in.</Text>
      ) : (
        <Button title="Sign In" onPress={() => signIn()} />
      )}
    </View>
  );
}