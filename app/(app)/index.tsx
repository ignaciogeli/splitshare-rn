import { AntDesign } from '@expo/vector-icons'; // Importar un ícono para el botón flotante
import { fetchGroups } from '../api';
import { Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
import { useSession } from '../../ctx';
import { useRouter } from 'expo-router';
import { styles } from './styles'; // Import styles from the .ts file
import CreateGroupModalComponent from "./createGroup"
import GroupList from './groupList';

export default function Index() {
  const { signOut, session } = useSession();
  const router = useRouter();
  const [groups, setGroups] = useState([]); // State to store groups
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState<{ status?: number, message?: string } | null>(null); // State to handle errors
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Function to fetch data from the API
    const getGroups = async () => {
      await fetchGroups(session, signOut, router, setGroups, setError);
      setLoading(false); // Cambia el estado de carga después de la llamada
    };
    getGroups();

  }, [session]); // Executes when `session` changes

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading indicator
  }

  if (error) {
    return <Text>Error: {error.message}</Text>; // Show error message
  }

  const createGroup = () => {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome user, here are your groups:</Text>

      <GroupList groups={groups} />

      <CreateGroupModalComponent
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={createGroup}
      >
        <View style={styles.buttonContent}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.buttonText}>New group</Text>
        </View>      </TouchableOpacity>
      <Text
        onPress={() => {
          signOut();
        }}
        style={styles.signOutText}>
        Sign Out
      </Text>
    </View>
  );
}
