import { Project, User } from "@prisma/client";
import { useProjectStore } from "@/lib/store/useProjectStore";

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
  async fetchUserProjects(userId: string) {
    const { setProjects, setLoading, setError } = useProjectStore.getState();
    setLoading(true);
    try {
      const response = await fetch(`/api/projects?userId=${userId}`);
      if (!response.ok) throw new Error("Failed to fetch projects");
      const projects: ProjectWithUsers[] = await response.json();
      setProjects(projects);
    } catch (error) {
      setError(error?.toString() || null);
    } finally {
      setLoading(false);
    }
  },
};
