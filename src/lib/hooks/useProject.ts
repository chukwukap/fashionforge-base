import { useRootStore } from "../store/useRootStore";

export const useProject = () => {
  const { projectStore } = useRootStore();
  return projectStore((state) => ({
    projects: state.projects,
    loading: state.loading,
    error: state.error,
    setProjects: state.setProjects,
    addProject: state.addProject,
    updateProject: state.updateProject,
    deleteProject: state.deleteProject,
    setLoading: state.setLoading,
    setError: state.setError,
  }));
};
