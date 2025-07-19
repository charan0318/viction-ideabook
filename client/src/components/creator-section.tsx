import { Twitter, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreatorSection = () => {
  return (
    <section id="creator" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism rounded-3xl p-12 text-center">
          {/* Creator workspace image */}
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Modern startup workspace with collaborative team atmosphere" 
            className="w-full h-48 object-cover rounded-2xl mb-8"
          />
          
          <h2 className="font-bold text-4xl mb-6 gradient-text">About the Creator</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-[hsl(var(--text-secondary))] mb-8 leading-relaxed">
              <strong className="text-white">Charan N</strong> is a visionary builder focused on Web3 ecosystem development and interoperability. 
              This ideabook represents a deep exploration of how blockchain projects can transcend isolated utility to create 
              composable, culturally-rich experiences that bring glory to users, builders, and the entire ecosystem.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="flex items-center text-[hsl(var(--viction-purple))] hover:text-[hsl(var(--viction-blue))] transition-colors">
                <Twitter className="mr-2 h-5 w-5" />
                @charanviction
              </a>
              <a href="#" className="flex items-center text-[hsl(var(--viction-purple))] hover:text-[hsl(var(--viction-blue))] transition-colors">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
            
            <div className="bg-[hsl(var(--dark-surface))] rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-4">Vision Statement</h3>
              <p className="text-[hsl(var(--text-secondary))] italic">
                "Web3's true potential isn't in isolated applications, but in composable ecosystems where identity, 
                reputation, governance, and culture create emergent value that no single project could achieve alone."
              </p>
            </div>
            
            <Button 
              className="mt-8 bg-gradient-to-r from-[hsl(var(--viction-purple))] to-[hsl(var(--viction-blue))] hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              <span className="mr-2">Build This With Me?</span>
              <Rocket className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
