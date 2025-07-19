import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Zap, Network } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (projectId: string) => void;
}

// Logo mappings for each project
const getProjectLogo = (projectName: string) => {
  const logos: Record<string, string> = {
    "Coin98": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzE5QzU2QSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTRweCIgZm9udC13ZWlnaHQ9IjcwMCI+Qzk4PC90ZXh0Pjwvc3ZnPg==",
    "Dagora": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjOEI1Q0Y2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxMnB4IiBmb250LXdlaWdodD0iNzAwIj5EQUc8L3RleHQ+PC9zdmc+",
    "Saros": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzEwN0VGRiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTJweCIgZm9udC13ZWlnaHQ9IjcwMCI+U0FSPC90ZXh0Pjwvc3ZnPg==",
    "OneID": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMEY3MkZGIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxMHB4IiBmb250LXdlaWdodD0iNzAwIj4xSUQ8L3RleHQ+PC9zdmc+",
    "Dada": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGNkEzNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTBweCIgZm9udC13ZWlnaHQ9IjcwMCI+REFEQTwvdGV4dD48L3N2Zz4=",
    "Rabbit": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRkY0NTg1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxMHB4IiBmb250LXdlaWdodD0iNzAwIj5SQUI8L3RleHQ+PC9zdmc+",
    "Eter": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzYzNjZGMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTBweCIgZm9udC13ZWlnaHQ9IjcwMCI+RVRFUjwvdGV4dD48L3N2Zz4=",
    "Viction Insights": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMUUxRTFFIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjhGNkQ3IiBmb250LXNpemU9IjE0cHgiIGZvbnQtd2VpZ2h0PSI3MDAiPlY8L3RleHQ+PC9zdmc+",
  };
  
  return logos[projectName] || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjOTg4Rjg2Ii8+PC9zdmc+";
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Core Project':
      return <Zap className="w-4 h-4" />;
    case 'Core Community':
      return <Network className="w-4 h-4" />;
    case 'Core Contributor':
      return <Star className="w-4 h-4" />;
    default:
      return <Zap className="w-4 h-4" />;
  }
};

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <div className="premium-card group cursor-pointer overflow-hidden relative" onClick={() => onOpenModal(project.id)}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--viction-surface)] via-[var(--viction-surface)] to-[var(--viction-surface-elevated)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative p-6">
        {/* Header with logo and action */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <img 
              src={getProjectLogo(project.name)} 
              alt={`${project.name} logo`}
              className="w-10 h-10 rounded-lg shadow-sm"
            />
            <div>
              <h4 className="font-semibold text-lg leading-tight">{project.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-medium text-[var(--viction-primary)]">{project.allocation}</span>
                <div className="w-1 h-1 bg-[var(--viction-text-muted)] rounded-full" />
                <div className="flex items-center gap-1 text-xs text-[var(--viction-text-muted)]">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-[var(--viction-text-muted)] group-hover:text-[var(--viction-primary)] group-hover:translate-x-1 transition-all" />
        </div>
        
        {/* Project idea */}
        <h5 className="font-semibold text-xl mb-4 gradient-text leading-tight">{project.idea}</h5>
        
        {/* Description */}
        <p className="text-[var(--viction-text-secondary)] text-sm mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Features */}
        <div className="space-y-3 mb-6">
          {project.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start text-sm">
              <Check className="text-[var(--viction-primary)] mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
              <span className="text-[var(--viction-text-secondary)]">{feature}</span>
            </div>
          ))}
          {project.features.length > 3 && (
            <div className="text-sm text-[var(--viction-text-muted)] ml-7">
              +{project.features.length - 3} more features
            </div>
          )}
        </div>
        
        {/* Ecosystem touchpoints */}
        <div className="flex flex-wrap gap-2">
          {project.touchpoints.slice(0, 3).map((touchpoint, index) => (
            <span key={index} className="text-xs px-3 py-1.5 bg-[var(--viction-surface-elevated)] border border-[var(--viction-border)] rounded-full text-[var(--viction-text-secondary)] font-medium">
              {touchpoint.emoji} {touchpoint.name}
            </span>
          ))}
          {project.touchpoints.length > 3 && (
            <span className="text-xs px-3 py-1.5 bg-[var(--viction-surface-elevated)] border border-[var(--viction-border)] rounded-full text-[var(--viction-text-muted)] font-medium">
              +{project.touchpoints.length - 3}
            </span>
          )}
        </div>
      </div>
      
      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--viction-primary)] to-[var(--viction-secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
};

export default ProjectCard;
