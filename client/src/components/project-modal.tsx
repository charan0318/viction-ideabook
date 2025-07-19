import { Project } from "@/data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[var(--viction-background)] border border-[var(--viction-border)] text-[var(--viction-text-primary)]">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-[var(--viction-text-secondary)] hover:text-[var(--viction-text-primary)]"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold pr-10">
            <span className="gradient-text">{project.name}</span>
          </DialogTitle>
          <div className="flex items-center gap-4 pt-2">
            <span className="text-[var(--viction-primary)] font-semibold">
              {project.allocation}
            </span>
            <span className="text-sm px-3 py-1 bg-[var(--viction-surface-elevated)] border border-[var(--viction-border)] rounded-full text-[var(--viction-text-secondary)]">
              {project.category}
            </span>
          </div>
        </DialogHeader>
        
        <div className="space-y-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[var(--viction-text-primary)]">{project.idea}</h3>
            <p className="text-[var(--viction-text-secondary)] leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="premium-card p-6">
              <h4 className="font-semibold mb-4 text-[var(--viction-text-primary)]">Core Features</h4>
              <ul className="space-y-3">
                {(project.detailedFeatures || project.features).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check className="text-[var(--viction-primary)] mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-[var(--viction-text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="premium-card p-6">
              <h4 className="font-semibold mb-4 text-[var(--viction-text-primary)]">Ecosystem Impact</h4>
              <div className="flex items-start">
                <Star className="text-[var(--viction-primary)] mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-[var(--viction-text-secondary)] leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>
          
          <div className="premium-card p-6 bg-[var(--viction-surface-elevated)]">
            <h4 className="font-semibold mb-4 text-[var(--viction-text-primary)]">Connected Projects</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {project.touchpoints.map((touchpoint, index) => (
                <div key={index} className="text-center p-3 bg-[var(--viction-surface)] border border-[var(--viction-border)] rounded-lg">
                  <div className="text-xl mb-1">{touchpoint.emoji}</div>
                  <div className="text-xs text-[var(--viction-text-secondary)] font-medium">{touchpoint.name}</div>
                </div>
              ))}
            </div>
            {project.connectionsDescription && (
              <p className="text-sm text-[var(--viction-text-secondary)] leading-relaxed">
                {project.connectionsDescription}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
