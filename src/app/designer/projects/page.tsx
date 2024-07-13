import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface Project {
  id: string;
  title: string;
  description: string;
  // Add other relevant fields
}

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <ul>
    {projects.map((project) => (
      <li key={project.id}>{project.title}</li>
    ))}
  </ul>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <header>{/* Add header content */}</header>
    <main>{children}</main>
    <footer>{/* Add footer content */}</footer>
  </div>
);

const fetchProjects = async (): Promise<Project[]> => {
  // Implement actual API call here
  return [
    { id: "1", title: "Project 1", description: "Description 1" },
    { id: "2", title: "Project 2", description: "Description 2" },
  ];
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Designer Projects</title>
        <meta
          name="description"
          content="View and manage your design projects"
        />
      </Head>
      <h1>Your Projects</h1>
      <ProjectList projects={projects} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await fetchProjects();
  return {
    props: {
      projects,
    },
  };
};

export default ProjectsPage;
