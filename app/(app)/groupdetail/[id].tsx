import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useSession } from '../../../ctx';
import { fetchExpenses, GroupDetail, Expense, FetchExpensesResponse} from '../../api';
import { styles } from '../styles'; // Import styles from the .ts file
import { MaterialIcons } from '@expo/vector-icons';
import CreateExpenseModalComponent from "./createExpense"
import { AntDesign } from '@expo/vector-icons'; // Importar un ícono para el botón flotante


export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { session } = useSession();
  
  // Updated state to store group details and expenses
  const [groupDetail, setGroupDetail] = useState<GroupDetail | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<{ status?: number, message?: string } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const group_id: number = +id;

  const getExpenses = async () => {
    setLoading(true);
    try {
      // Assuming fetchExpenses returns the correct structure
      const response: FetchExpensesResponse = await fetchExpenses(session ?? null, group_id);
      
      // Set group details and expenses
      setGroupDetail(response.group_detail);
      console.log('group detail set in component: ')
      console.log(response.group_detail)
      setExpenses(response.expenses);
      
    } catch (error: any) {
      setError({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExpenses();
  }, [session]); 

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; 
  }

  if (error) {
    return <Text>Error: {error.message}</Text>; 
  }

  const createExpense = () => {
    setModalVisible(true);
  }


  return (
    <View style={styles.expensesListContainer}>

    <CreateExpenseModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        session={session ?? null}
        onGroupCreated={getExpenses}
      />

      {/* Render group details */}
    
      {/* <View>
        <Text style={styles.title}>{groupDetail.name}</Text>
        <Text >{groupDetail.description}</Text>
      </View> */}
      
      {/* Render expenses */}
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <View key={index}>
            <View style={styles.expenseContainer}>
              <MaterialIcons name="shopping-cart" size={24} color="black" style={styles.icon} />
              <View style={styles.expenseDetailsContainer}>
                <Text style={styles.expenseText}>{expense.description}</Text>
                <View style={styles.amountContainer}>
                  <Text style={styles.amountText}>
                    {expense.currency_code} {expense.amount}
                  </Text>
                  <Text style={styles.payerText}>
                    Pagado por {expense.payer.first_name} 
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.listSeparator} />
          </View>
        ))
      ) : (
        <Text>No expenses found.</Text>
      )}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={createExpense}
        >
        <AntDesign name="plus" size={24} color="white" />
        <Text style={styles.buttonText}>New Expense</Text>
      </TouchableOpacity>
    </View>
  );
}
