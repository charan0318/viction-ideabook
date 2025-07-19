import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const IdeabookPage = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = selectedProjectId ? projects.find(p => p.id === selectedProjectId) : null;

  const coreProjects = projects.filter(p => p.category === 'Core Project');
  const coreCommunities = projects.filter(p => p.category === 'Core Community');
  const coreContributors = projects.filter(p => p.category === 'Core Contributor');

  return (
    <div className="min-h-screen bg-[hsl(var(--viction-background))] text-[hsl(var(--viction-text-primary))]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[hsl(var(--viction-background))]/95 backdrop-blur-md border-b border-[hsl(var(--viction-border))]">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2 text-[hsl(var(--viction-text-secondary))] hover:text-[hsl(var(--viction-text-primary))]">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Viction Retrodrop Ideabook</h1>
            <div className="w-[100px]" /> {/* Spacer for center alignment */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-container py-16">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            11 Visionary Projects.<br />
            <span className="gradient-text">One Ecosystem.</span>
          </h1>
          <p className="text-xl text-[hsl(var(--viction-text-secondary))] max-w-3xl mx-auto text-balance">
            Explore how each Retrodrop allocation could transform into ecosystem-defining experiences 
            that bring interoperability, culture, and utility to Viction.
          </p>
        </div>

        {/* Core Projects */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Projects</h2>
            <p className="text-[hsl(var(--viction-text-secondary))] text-lg">
              The foundation infrastructure that powers the Viction ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProjectId}
              />
            ))}
          </div>
        </section>

        {/* Core Communities */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Communities</h2>
            <p className="text-[hsl(var(--viction-text-secondary))] text-lg">
              Community-driven initiatives that foster engagement and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCommunities.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProjectId}
              />
            ))}
          </div>
        </section>

        {/* Core Contributors */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Contributors</h2>
            <p className="text-[hsl(var(--viction-text-secondary))] text-lg">
              Essential services that enhance the entire ecosystem's capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coreContributors.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProjectId}
              />
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <section className="text-center py-16 border-t border-[hsl(var(--viction-border))]">
          <h3 className="text-2xl font-bold mb-4">Ready to Build the Future?</h3>
          <p className="text-[hsl(var(--viction-text-secondary))] mb-8 max-w-2xl mx-auto">
            These ideas represent a vision for what's possible when projects work together 
            to create something greater than the sum of their parts.
          </p>
          <Link href="/">
            <Button className="btn-primary">
              Back to Overview
            </Button>
          </Link>
        </section>
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
};

export default IdeabookPage;