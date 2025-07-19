import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (projectId: string) => void;
}

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <div className="premium-card p-6 group cursor-pointer" onClick={() => onOpenModal(project.id)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-1">{project.name}</h4>
          <span className="text-sm font-medium text-[hsl(var(--viction-primary))]">{project.allocation}</span>
        </div>
        <ArrowRight className="w-5 h-5 text-[hsl(var(--viction-text-muted))] group-hover:text-[hsl(var(--viction-primary))] group-hover:translate-x-1 transition-all" />
      </div>
      
      <h5 className="font-semibold text-lg mb-3 gradient-text leading-tight">{project.idea}</h5>
      
      <p className="text-[hsl(var(--viction-text-secondary))] text-sm mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      
      <div className="space-y-2 mb-4">
        {project.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start text-xs">
            <Check className="text-[hsl(var(--viction-primary))] mr-2 mt-0.5 h-3 w-3 flex-shrink-0" />
            <span className="text-[hsl(var(--viction-text-secondary))]">{feature}</span>
          </div>
        ))}
        {project.features.length > 3 && (
          <div className="text-xs text-[hsl(var(--viction-text-muted))]">
            +{project.features.length - 3} more features
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.touchpoints.slice(0, 4).map((touchpoint, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-[hsl(var(--viction-surface))] border border-[hsl(var(--viction-border))] rounded-md">
            {touchpoint.emoji} {touchpoint.name}
          </span>
        ))}
        {project.touchpoints.length > 4 && (
          <span className="text-xs px-2 py-1 bg-[hsl(var(--viction-surface))] border border-[hsl(var(--viction-border))] rounded-md text-[hsl(var(--viction-text-muted))]">
            +{project.touchpoints.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
