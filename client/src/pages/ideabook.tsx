import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const IdeabookPage = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = selectedProjectId ? projects.find(p => p.id === selectedProjectId) : null;

  const coreProjects = projects.filter(p => p.category === 'Core Project');
  const coreCommunities = projects.filter(p => p.category === 'Core Community');
  const coreContributors = projects.filter(p => p.category === 'Core Contributor');

  return (
    <div className="min-h-screen bg-[var(--viction-background)] text-[var(--viction-text-primary)]">

      {/* Main Content */}
      <main className="section-container py-8 relative overflow-hidden">
        {/* Animated Background Images */}
        <div className="absolute inset-0 pointer-events-none">
          
          
          {/* Additional floating DeFi Hub - medium, bottom left */}
          <div className="absolute bottom-40 left-10 w-48 h-48 opacity-6" style={{ animation: 'float 15s ease-in-out infinite', animationDelay: '4s' }}>
            <img 
              src="https://viction.xyz/static/media/defi-hub.1661173bbad5d6064ded.png" 
              alt="DeFi Hub"
              className="w-full h-full object-contain transform rotate-45 hover:rotate-12 transition-transform duration-[4s] ease-in-out"
              style={{ animation: 'breathe 10s ease-in-out infinite', animationDelay: '2s' }}
            />
          </div>
          
          {/* Additional floating Global Payment - medium, top right */}
          <div className="absolute top-20 right-10 w-56 h-56 opacity-7" style={{ animation: 'floatComplex 14s ease-in-out infinite', animationDelay: '1s' }}>
            <img 
              src="https://viction.xyz/static/media/global-payment.547fe1f6ba16db0959e5.png" 
              alt="Global Payment"
              className="w-full h-full object-contain transform -rotate-24 hover:-rotate-12 transition-transform duration-[3.5s] ease-in-out"
              style={{ animation: 'breathe 9s ease-in-out infinite', animationDelay: '3s' }}
            />
          </div>
          
          {/* Extra small DeFi Hub - center background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-4" style={{ animation: 'float 20s ease-in-out infinite', animationDelay: '6s' }}>
            <img 
              src="https://viction.xyz/static/media/defi-hub.1661173bbad5d6064ded.png" 
              alt="DeFi Hub"
              className="w-full h-full object-contain transform rotate-90"
              style={{ animation: 'breathe 12s ease-in-out infinite', animationDelay: '4s' }}
            />
          </div>
          
          
        </div>

        {/* Introduction */}
        <div className="text-center mb-20 relative z-10">
          {/* Background elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-32 bg-gradient-to-br from-[var(--viction-primary)] to-[var(--viction-secondary)] rounded-full opacity-5 blur-3xl" />
          
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[var(--viction-surface-elevated)] border border-[var(--viction-border)] rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-[var(--viction-primary)]" />
              <span className="text-sm font-medium text-[var(--viction-text-secondary)]">Viction Retrodrop Season 2 Ideabook</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance relative">
            11 Creative Visions.<br />
            <span className="gradient-text">Glory for Everyone.</span>
          </h1>
          <p className="text-xl text-[var(--viction-text-secondary)] max-w-3xl mx-auto text-balance">
            My bounty submission answering: "If I were each project and received VIC from Retrodrop, 
            what would I build?" - featuring integrated ecosystem experiences.
          </p>
          
          {/* Stats bar */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--viction-text-primary)]">11</div>
              <div className="text-sm text-[var(--viction-text-muted)]">Projects</div>
            </div>
            <div className="w-px h-12 bg-[var(--viction-border)]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--viction-text-primary)]">∞</div>
              <div className="text-sm text-[var(--viction-text-muted)]">Connections</div>
            </div>
            <div className="w-px h-12 bg-[var(--viction-border)]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--viction-text-primary)]">1</div>
              <div className="text-sm text-[var(--viction-text-muted)]">Ecosystem</div>
            </div>
          </div>
        </div>

        {/* Core Projects */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Projects</h2>
            <p className="text-[var(--viction-text-secondary)] text-lg">
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
            <p className="text-[var(--viction-text-secondary)] text-lg">
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
            <p className="text-[var(--viction-text-secondary)] text-lg">
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
        <section className="text-center py-16 border-t border-[var(--viction-border)]">
          <h3 className="text-2xl font-bold mb-4">Glory is for Everyone</h3>
          <p className="text-[var(--viction-text-secondary)] mb-8 max-w-2xl mx-auto">
            This bounty submission demonstrates how each Retrodrop recipient could integrate 
            with the ecosystem to create composable, user-centric experiences that embody Viction's vision.
          </p>
          <div className="inline-flex items-center gap-2 bg-[var(--viction-surface-elevated)] border border-[var(--viction-border)] rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-[var(--viction-primary)]" />
            <span className="font-medium text-[var(--viction-text-primary)]">Viction Retrodrop #2 Accelerates</span>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-8 text-sm text-[var(--viction-text-muted)] mb-4">
              <span>Created for Viction Retrodrop Season 2</span>
              <span>•</span>
              <span>Built with vision for the ecosystem</span>
            </div>
            <p className="text-[var(--viction-text-secondary)] text-sm">
              Built with ❤️ from{" "}
              <a 
                href="https://x.com/ch04niverse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--viction-primary)] hover:text-[var(--viction-secondary)] transition-colors font-medium"
              >
                ch04niverse
              </a>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/">
                <Button className="btn-primary">
                  Back to Overview
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="border-[var(--viction-border)] text-[var(--viction-text-secondary)] hover:text-[var(--viction-text-primary)] hover:border-[var(--viction-primary)]"
                onClick={() => window.open('https://x.com/ch04niverse', '_blank')}
              >
                Check the tweet here
              </Button>
            </div>
          </div>
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