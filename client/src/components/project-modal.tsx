import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
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
          <div className="flex items-start gap-4 pr-10">
            <img 
              src={getProjectLogo(project.name)} 
              alt={`${project.name} logo`}
              className="w-12 h-12 rounded-lg shadow-sm"
            />
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold">
                <span className="gradient-text">{project.name}</span>
              </DialogTitle>
              <DialogDescription className="text-[var(--viction-text-secondary)]">
                {project.tagline}
              </DialogDescription>
              <div className="flex items-center gap-4 pt-2">
                <span className="text-[var(--viction-primary)] font-semibold">
                  {project.allocation}
                </span>
                <span className="text-sm px-3 py-1 bg-[var(--viction-surface-elevated)] border border-[var(--viction-border)] rounded-full text-[var(--viction-text-secondary)]">
                  {project.category}
                </span>
              </div>
            </div>
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

          <div className="premium-card p-6 bg-[var(--viction-surface)]">
            <h4 className="font-semibold mb-4 text-[var(--viction-text-primary)]">Connected Projects</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {project.touchpoints.map((touchpoint, index) => (
                <div key={index} className="text-center p-4 bg-[var(--viction-background)] border-2 border-[var(--viction-border)] rounded-xl hover:border-[var(--viction-primary)] transition-colors">
                  <div className="text-2xl mb-2">{touchpoint.emoji}</div>
                  <div className="text-sm text-[var(--viction-text-primary)] font-semibold">{touchpoint.name}</div>
                </div>
              ))}
            </div>
            {project.connectionsDescription && (
              <p className="text-sm text-[var(--viction-text-primary)] leading-relaxed bg-[var(--viction-surface-elevated)] p-4 rounded-lg border border-[var(--viction-border)]">
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