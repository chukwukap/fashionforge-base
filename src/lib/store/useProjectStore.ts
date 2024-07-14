import { create } from "zustand";
import { Project, User } from "@prisma/client";

interface ProjectWithUsers extends Project {
  client: User;
  designer: User;
}

interface ProjectState {
  projects: ProjectWithUsers[];
  loading: boolean;
  error: string | null;
  setProjects: (projects: ProjectWithUsers[]) => void;
  addProject: (project: ProjectWithUsers) => void;
  updateProject: (id: string, projectData: Partial<ProjectWithUsers>) => void;
  deleteProject: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  loading: false,
  error: null,
  setProjects: (projects) => set({ projects }),
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  updateProject: (id, projectData) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? { ...project, ...projectData } : project
      ),
    })),
  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
