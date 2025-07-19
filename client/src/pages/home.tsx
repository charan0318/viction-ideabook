import { Link } from "wouter";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--viction-background))] text-[hsl(var(--viction-text-primary))]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[hsl(var(--viction-background))]/95 backdrop-blur-md border-b border-[hsl(var(--viction-border))]">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--viction-primary))] to-[hsl(var(--viction-secondary))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-semibold text-lg">Viction</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[hsl(var(--viction-text-secondary))] hover:text-[hsl(var(--viction-text-primary))] transition-colors">About</a>
              <a href="#" className="text-[hsl(var(--viction-text-secondary))] hover:text-[hsl(var(--viction-text-primary))] transition-colors">Projects</a>
              <a href="#" className="text-[hsl(var(--viction-text-secondary))] hover:text-[hsl(var(--viction-text-primary))] transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-container">
        <div className="section-container text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--viction-surface))] border border-[hsl(var(--viction-border))] rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-[hsl(var(--viction-primary))]" />
              <span className="text-sm font-medium text-[hsl(var(--viction-text-secondary))]">Viction Retrodrop Season 2</span>
            </div>
            
            <h1 className="font-bold mb-8 text-balance max-w-5xl mx-auto">
              What If Every VIC Grant Became a{" "}
              <span className="gradient-text">Viction-Native Experience?</span>
            </h1>
            
            <p className="text-xl text-[hsl(var(--viction-text-secondary))] max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
              A visionary ideabook reimagining how 11 Retrodrop allocations could transform into 
              ecosystem-defining features that bring interoperability, culture, and real utility to users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/ideabook">
                <Button className="btn-primary group">
                  <span>Explore the Vision</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" className="border-[hsl(var(--viction-border))] text-[hsl(var(--viction-text-secondary))] hover:text-[hsl(var(--viction-text-primary))] hover:border-[hsl(var(--viction-primary))]">
                Learn About Viction
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Preview */}
      <section className="section-container py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="premium-card p-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--viction-primary))] to-[hsl(var(--viction-secondary))] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">11 Core Projects</h3>
            <p className="text-[hsl(var(--viction-text-secondary))] leading-relaxed">
              From Coin98's identity layer to Dagora's cultural guilds—discover how each allocation becomes ecosystem infrastructure.
            </p>
          </div>
          
          <div className="premium-card p-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--viction-primary))] to-[hsl(var(--viction-secondary))] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interconnected Ecosystem</h3>
            <p className="text-[hsl(var(--viction-text-secondary))] leading-relaxed">
              See how identity, reputation, governance, and culture layers create emergent value through composability.
            </p>
          </div>
          
          <div className="premium-card p-8 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--viction-primary))] to-[hsl(var(--viction-secondary))] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Real Utility Vision</h3>
            <p className="text-[hsl(var(--viction-text-secondary))] leading-relaxed">
              Beyond token distributions—explore features that create tangible value for everyday Viction users.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container py-16 border-t border-[hsl(var(--viction-border))]">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build the Future?</h3>
          <p className="text-[hsl(var(--viction-text-secondary))] mb-8 max-w-2xl mx-auto">
            This ideabook represents a vision for Web3's true potential—not isolated applications, 
            but composable ecosystems where the whole becomes greater than the sum of its parts.
          </p>
          <div className="flex justify-center gap-8 text-sm text-[hsl(var(--viction-text-muted))]">
            <span>Created for Viction Retrodrop Season 2</span>
            <span>•</span>
            <span>Built with vision for the ecosystem</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
