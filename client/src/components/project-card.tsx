import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (projectId: string) => void;
}

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <div className="glassmorphism rounded-2xl p-6 hover:animate-glow transition-all duration-300 hover:transform hover:-translate-y-2">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-xl">{project.name}</h4>
        <span className="text-[hsl(var(--viction-purple))] font-semibold">{project.allocation}</span>
      </div>
      <h5 className="font-semibold text-lg mb-3 gradient-text">{project.idea}</h5>
      <p className="text-[hsl(var(--text-secondary))] text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="space-y-2 mb-4">
        {project.features.map((feature, index) => (
          <div key={index} className="flex items-center text-xs">
            <Check className="text-[hsl(var(--viction-purple))] mr-2 h-3 w-3" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.touchpoints.map((touchpoint, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-[hsl(var(--dark-surface))] rounded-full">
            {touchpoint.emoji} {touchpoint.name}
          </span>
        ))}
      </div>
      <Button
        onClick={() => onOpenModal(project.id)}
        className="w-full bg-gradient-to-r from-[hsl(var(--viction-purple))] to-[hsl(var(--viction-blue))] hover:shadow-lg transition-all duration-300"
        size="sm"
      >
        View Full Vision
      </Button>
    </div>
  );
};

export default ProjectCard;
