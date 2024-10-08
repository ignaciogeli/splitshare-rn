import { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { useSession } from '../../ctx';
import { Link, useRouter } from 'expo-router';
import axios from 'axios';

export default function Index() {
  const { signOut, session } = useSession();
  const router = useRouter();
  const [groups, setGroups] = useState([]); // Estado para almacenar los grupos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState<{status?:number, message?: string} | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener datos de la API
    const fetchGroups = async () => {
      try {
        if (session) {
          const response = await axios.get('http://localhost:8000/groups/', {
            headers: {
              Authorization: `bearer ${session}`, // Suponiendo que el token es necesario en los headers
            },
          });
          setGroups(response.data); // Guarda los datos obtenidos
        }
      } catch (e: any) {
        const err :  {status?:number, message?: string}  = {status: e?.status, message:e?.message};
        if(err.status === 401){
          signOut()
          router.replace("/sign-in")
        }
        setError({status: err?.status, message:err?.message}); // Manejo de errores
        console.error(err);
      } finally {
        setLoading(false); // Cambia el estado de carga
      }
    };

    fetchGroups(); // Llama a la función para obtener datos
  }, [session]); // Se ejecuta cuando cambia `session`

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Muestra un indicador de carga
  }

  if (error) {
    return <Text>Error: {error.message}</Text>; // Muestra el mensaje de error
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>Welcome user, here are your groups: </Text>
      
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => 
          (
            <Link href={`/groupdetail/${item.id}`}>* {item.name}</Link>
          )
      }
      />

      <Text
        onPress={() => {
          signOut();
        }}
        style={{ marginTop: 20, color: 'blue', textDecorationLine: 'underline' }}>
        Sign Out
      </Text>
    </View>
  );
}