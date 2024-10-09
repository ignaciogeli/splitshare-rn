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
