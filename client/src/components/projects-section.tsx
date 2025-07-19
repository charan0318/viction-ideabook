import { useState } from "react";
import { projects, getProjectsByCategory, getProjectById } from "@/data/projects";
import ProjectCard from "./project-card";
import ProjectModal from "./project-modal";

const ProjectsSection = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  const coreProjects = getProjectsByCategory('Core Project');
  const coreCommunities = getProjectsByCategory('Core Community');
  const coreContributors = getProjectsByCategory('Core Contributor');
  
  const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null;

  const handleOpenModal = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl md:text-5xl mb-16 text-center gradient-text">
          Retrodrop Projects
        </h2>
        
        {/* Core Projects */}
        <div className="mb-20">
          <h3 className="font-semibold text-3xl mb-8 text-center">Core Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>

        {/* Core Communities */}
        <div className="mb-20">
          <h3 className="font-semibold text-3xl mb-8 text-center">Core Communities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCommunities.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>

        {/* Core Contributors */}
        <div className="mb-20">
          <h3 className="font-semibold text-3xl mb-8 text-center">Core Contributors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreContributors.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject || null}
        isOpen={!!selectedProjectId}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;
