import axios from 'axios';

export const fetchGroups = async (session: string | null, signOut: () => void, router: any, setGroups: (groups: any[]) => void, setError: (error: { status?: number, message?: string } | null) => void) => {
  try {
    if (session) {
      const response = await axios.get('http://localhost:8000/groups/', {
        headers: {
          Authorization: `bearer ${session}`,
        },
      });
      setGroups(response.data);
    }
  } catch (e: any) {
    const err: { status?: number, message?: string } = { status: e?.status, message: e?.message };
    if (err.status === 401) {
      signOut();
      router.replace("/sign-in");
    }
    setError({ status: err?.status, message: err?.message });
    console.error(err);
  }
};



export interface GroupDetail {
  name: string;
  description: string;
}

export interface Expense {
  description: string;
  amount: number;
  currency_code: string;
  payer: {
    first_name: string;
  };
}

export interface FetchExpensesResponse {
  group_detail: GroupDetail;
  expenses: Expense[];
}


export const fetchExpenses = async (session: string | null, group_id: number): Promise<FetchExpensesResponse> => {
  if (!session) throw new Error('User not authenticated');

  try {
    const response = await axios.get(`http://localhost:8000/expenses/${group_id}`, {
      headers: {
        Authorization: `Bearer ${session}`, // Asegúrate de usar 'Bearer' con mayúscula si es necesario
      },
    });
    
    // Retorna los datos de la respuesta (suponiendo que es un array de "gastos")
    console.log('group detail in api')
    console.log(response.data.group_detail)
    return {
      group_detail: response.data.group_detail, // Asegúrate de que estos campos existan en tu respuesta
      expenses: response.data.expenses,
    };

  } catch (error: any) {
    // Captura y muestra el error detallado
    console.error('Error fetching expenses:', error.response?.data || error.message);
    throw new Error('Failed to get expenses list');
  }
};



export const createGroup = async (name: string, session: string | null) => {
    if (!session) throw new Error ('User not authenticated');
    console.log("token in api component: ")
    console.log(session)

    try {
        const response = await axios.post('http://localhost:8000/groups',
            { name },
            {
                headers: {
                    Authorization: `bearer ${session}`,
                },
            }
        );
        return response.data
    } catch (error) {
        throw new Error ('Failed to create group');
    }
};


export const createExpense = async (
  amount: number,
  group_id: number,
  currency_code: string,
  payer_id: number,
  kind: string,
  description: string,
  session: string | null
) => {
  if (!session) throw new Error ('User not authenticated');
  console.log("token in api component: ")
  console.log(session)

  try {
      const response = await axios.post('http://localhost:8000/expenses/',
          { amount, group_id, currency_code, payer_id, kind, description },
          {
              headers: {
                  Authorization: `bearer ${session}`,
              },
          }
      );
      return response.data
  } catch (error) {
      throw new Error ('Failed to create group');
  }
};