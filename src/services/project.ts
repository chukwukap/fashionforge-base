import { Project, User } from "@prisma/client";
import { useProjectStore } from "@/stores/useProjectStore";

interface ProjectWithUsers extends Project {
  client: User;
  designer: User;
}

export const projectService = {
  async createProject(projectData: Partial<Project>) {
    const { addProject, setLoading, setError } = useProjectStore.getState();
    setLoading(true);
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });
      if (!response.ok) throw new Error("Failed to create project");
      const newProject: ProjectWithUsers = await response.json();
      addProject(newProject);
      return newProject;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },

  async fetchProjects() {
    const { setProjects, setLoading, setError } = useProjectStore.getState();
    setLoading(true);
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) throw new Error("Failed to fetch projects");
      const projects: ProjectWithUsers[] = await response.json();
      setProjects(projects);
      return projects;
    } catch (error) {
      setError(error?.toString() || null);
      return [];
    } finally {
      setLoading(false);
    }
  },

  async updateProject(id: string, projectData: Partial<Project>) {
    const { updateProject, setLoading, setError } = useProjectStore.getState();
    setLoading(true);
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });
      if (!response.ok) throw new Error("Failed to update project");
      const updatedProject: ProjectWithUsers = await response.json();
      updateProject(id, updatedProject);
      return updatedProject;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },

  async deleteProject(id: string) {
    const { deleteProject, setLoading, setError } = useProjectStore.getState();
    setLoading(true);
    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete project");
      deleteProject(id);
      return true;
    } catch (error) {
      setError(error?.toString() || null);
      return false;
    } finally {
      setLoading(false);
    }
  },
};
