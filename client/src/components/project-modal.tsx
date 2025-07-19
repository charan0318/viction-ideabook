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
    "RabbitSwap": "https://icons.llamao.fi/icons/protocols/rabbit-swap?w=48&h=48",
    "deFusion": "https://pbs.twimg.com/profile_images/1767902897583562752/ZIz8p0ag_200x200.jpg",
    "Coin98 Super Wallet": "https://www.cryptologos.cc/logos/coin98-c98-logo.png?v=040",
    "Dagora": "https://cdn.discordapp.com/icons/929758371152814142/99cf16598e62f992a0d0ce03eb0bb231.png",
    "OneID": "https://blog.oneid.xyz/_next/image?url=https%3A%2F%2Ffile.coin98.com%2Fimages%2Favatar-VeJ5OHkDvUMZUPGf.png&w=1920&q=75",
    "Ivy": "https://www.viction.xyz/static/media/ivy.e7b008b9d40da3ae8aef.png",
    "The Contrarians x Athletix": "https://pbs.twimg.com/profile_images/1908510124265869312/trAqT1S-_200x200.jpg",
    "Vikto": "https://pbs.twimg.com/profile_images/1920003427750555648/sVtg82Kz_200x200.jpg",
    "Efihub": "https://pbs.twimg.com/profile_images/1745280890484502528/bbmtsVfW_200x200.jpg",
    "World of Dypians": "https://pbs.twimg.com/profile_images/1875451374684549120/SEU0jro3_200x200.png",
    "Not For Thinking": "https://ugc.production.linktr.ee/b3de4644-d51c-4811-9c3d-89f8f38810cf_5.1.png"
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
              className="w-12 h-12 rounded-lg shadow-sm object-cover object-center"
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