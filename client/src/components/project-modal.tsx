import { Project } from "@/data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Star } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism border-white/10">
        <DialogHeader>
          <DialogTitle className="gradient-text text-3xl font-bold">
            {project.name} - {project.idea}
          </DialogTitle>
          <div className="text-[hsl(var(--viction-purple))] font-semibold text-lg">
            {project.allocation}
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-[hsl(var(--dark-surface))] rounded-2xl p-6">
            <h3 className="font-semibold text-xl mb-4">The Vision</h3>
            <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[hsl(var(--dark-surface))] rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Core Features</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))]">
                {(project.detailedFeatures || project.features).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[hsl(var(--viction-purple))] mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[hsl(var(--dark-surface))] rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Ecosystem Impact</h4>
              <div className="text-sm text-[hsl(var(--text-secondary))]">
                <div className="flex items-start mb-2">
                  <Star className="text-[hsl(var(--viction-purple))] mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>{project.impact}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[hsl(var(--viction-purple))]/20 to-[hsl(var(--viction-blue))]/20 rounded-2xl p-6 border border-[hsl(var(--viction-purple))]/30">
            <h4 className="font-semibold mb-3">Connected Projects</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.touchpoints.map((touchpoint, index) => (
                <div key={index} className="text-center p-3 bg-[hsl(var(--dark-surface))] rounded-lg">
                  <div className="text-2xl mb-1">{touchpoint.emoji}</div>
                  <div className="text-xs">{touchpoint.name}</div>
                </div>
              ))}
            </div>
            {project.connectionsDescription && (
              <p className="text-sm text-[hsl(var(--text-secondary))] mt-4">
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
