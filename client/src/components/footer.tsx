import { Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-[hsl(var(--dark-border))]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 gradient-text">Viction Ideabook</h3>
            <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
              A visionary blueprint for transforming Retrodrop allocations into ecosystem-defining experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#hero" className="block text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors text-sm">Home</a>
              <a href="#projects" className="block text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors text-sm">Projects</a>
              <a href="#ecosystem" className="block text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors text-sm">Ecosystem</a>
              <a href="#creator" className="block text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors text-sm">Creator</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors text-sm">Download PDF Ideabook</a>
              <a href="https://viction.xyz" className="block text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors text-sm">Viction Official</a>
              <a href="#" className="block text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors text-sm">Retrodrop Details</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[hsl(var(--dark-border))] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[hsl(var(--text-secondary))] text-sm mb-4 md:mb-0">
            Created for Viction Retrodrop Season 2 • Built with vision for the ecosystem
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--viction-purple))] transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
