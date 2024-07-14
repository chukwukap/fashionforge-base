import { useRootStore } from "../store/useRootStore";

export const useUser = () => {
  const { userStore } = useRootStore();
  return userStore((state) => ({
    currentUser: state.currentUser,
    users: state.users,
    loading: state.loading,
    error: state.error,
    setCurrentUser: state.setCurrentUser,
    setUsers: state.setUsers,
    addUser: state.addUser,
    updateUser: state.updateUser,
    deleteUser: state.deleteUser,
    setLoading: state.setLoading,
    setError: state.setError,
  }));
};
