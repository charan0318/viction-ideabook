import { Link } from "wouter";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--viction-background)] text-[var(--viction-text-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--viction-background)]/95 backdrop-blur-md border-b border-[var(--viction-border)]">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--viction-primary)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--viction-background)] font-bold text-sm">V</span>
              </div>
              <span className="font-semibold text-lg text-[var(--viction-text-primary)]">Viction Ideabook</span>
            </div>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-container relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="grid-pattern" />
        
        {/* VIC Token Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-8 pointer-events-none z-0" style={{ animation: 'floatComplex 15s ease-in-out infinite' }}>
          <img 
            src="https://viction.xyz/static/media/token-vic.de13484df2ab71f95122.png" 
            alt="VIC Token"
            className="w-full h-full object-contain"
            style={{ animation: 'breathe 10s ease-in-out infinite' }}
          />
        </div>
        
        {/* Floating graphics */}
        <div className="floating-graphic floating-graphic-1" />
        <div className="floating-graphic floating-graphic-2" />
        <div className="floating-graphic floating-graphic-3" />
        
        <div className="section-container text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[var(--viction-surface-elevated)] border border-[var(--viction-border)] rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-[var(--viction-primary)]" />
              <span className="text-sm font-medium text-[var(--viction-text-secondary)]">Own the Glory My Way Bounty</span>
            </div>
            
            <h1 className="font-bold mb-8 text-balance max-w-5xl mx-auto">
              If I Were Each Project, What Would I Build With My{" "}
              <span className="gradient-text">VIC Allocation?</span>
            </h1>
            
            <p className="text-xl text-[var(--viction-text-secondary)] max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
              A creative bounty submission showcasing 11 visionary ideas for how each Retrodrop recipient 
              could build ecosystem-defining experiences that integrate with Viction's core theme: Glory is for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/ideabook">
                <Button className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10">Explore the Vision</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-[var(--viction-border)] text-[var(--viction-text-secondary)] hover:text-[var(--viction-text-primary)] hover:border-[var(--viction-primary)] bg-transparent backdrop-blur-sm"
                onClick={() => window.open('https://viction.xyz', '_blank')}
              >
                Learn About Viction
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom curve like Viction's site */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path 
              d="M0,60 C300,90 600,30 1200,60 L1200,120 L0,120 Z" 
              fill="var(--viction-surface)" 
              opacity="0.5"
            />
          </svg>
        </div>
      </main>

      {/* Features Preview */}
      <section className="section-container py-24">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[var(--viction-text-primary)]">The Vision Realized</h2>
          <p className="text-xl text-[var(--viction-text-secondary)] max-w-2xl mx-auto">
            Transforming individual allocations into a composable ecosystem of interconnected experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="premium-card p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--viction-primary)] to-[var(--viction-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-[var(--viction-background)]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--viction-text-primary)]">11 Core Projects</h3>
            <p className="text-[var(--viction-text-secondary)] leading-relaxed">
              From Coin98's identity layer to Dagora's cultural guilds—discover how each allocation becomes ecosystem infrastructure.
            </p>
            
            {/* Visual elements */}
            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-[var(--viction-primary)] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[var(--viction-secondary)] rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-[var(--viction-primary)] rounded-full animate-pulse delay-200" />
            </div>
          </div>
          
          <div className="premium-card p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--viction-secondary)] to-[var(--viction-primary)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-[var(--viction-background)]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--viction-text-primary)]">Interconnected Ecosystem</h3>
            <p className="text-[var(--viction-text-secondary)] leading-relaxed">
              See how identity, reputation, governance, and culture layers create emergent value through composability.
            </p>
            
            {/* Network visualization */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-16 h-8">
                <div className="absolute inset-0 flex items-center justify-between">
                  <div className="w-2 h-2 bg-[var(--viction-primary)] rounded-full" />
                  <div className="w-2 h-2 bg-[var(--viction-secondary)] rounded-full" />
                  <div className="w-2 h-2 bg-[var(--viction-primary)] rounded-full" />
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[var(--viction-primary)] via-[var(--viction-secondary)] to-[var(--viction-primary)] opacity-50" />
              </div>
            </div>
          </div>
          
          <div className="premium-card p-8 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--viction-primary)] to-[var(--viction-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-8 h-8 text-[var(--viction-background)]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--viction-text-primary)]">Real Utility Vision</h3>
            <p className="text-[var(--viction-text-secondary)] leading-relaxed">
              Beyond token distributions—explore features that create tangible value for everyday Viction users.
            </p>
            
            {/* Star pattern */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-12 h-12">
                <Star className="w-3 h-3 text-[var(--viction-primary)] absolute top-0 left-1/2 transform -translate-x-1/2" />
                <Star className="w-3 h-3 text-[var(--viction-secondary)] absolute bottom-0 left-1/2 transform -translate-x-1/2" />
                <Star className="w-3 h-3 text-[var(--viction-primary)] absolute left-0 top-1/2 transform -translate-y-1/2" />
                <Star className="w-3 h-3 text-[var(--viction-secondary)] absolute right-0 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <Link href="/ideabook">
            <Button className="btn-primary group px-8 py-3">
              <span>Explore All Project Ideas</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Viction Graphics Section */}
      <section className="section-container py-20 relative overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[var(--viction-text-primary)]">Powered by Viction's Vision</h2>
          <p className="text-lg text-[var(--viction-text-secondary)] max-w-2xl mx-auto">
            Building on the foundation of ownership economy, gaming, payments, and community
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 items-center justify-center">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 p-4 bg-[var(--viction-surface-elevated)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <img 
                src="https://viction.xyz/static/media/token-vic.de13484df2ab71f95122.png" 
                alt="VIC Token"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-[var(--viction-text-primary)]">VIC Token</h3>
            <p className="text-sm text-[var(--viction-text-secondary)]">Ownership Economy</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 p-4 bg-[var(--viction-surface-elevated)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <img 
                src="https://viction.xyz/static/media/game-power.d0d38769a12b38166d1b.png" 
                alt="Gaming Power"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-[var(--viction-text-primary)]">Gaming Power</h3>
            <p className="text-sm text-[var(--viction-text-secondary)]">Entertainment & NFTs</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 p-4 bg-[var(--viction-surface-elevated)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <img 
                src="https://viction.xyz/static/media/global-payment.547fe1f6ba16db0959e5.png" 
                alt="Global Payments"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-[var(--viction-text-primary)]">Global Payments</h3>
            <p className="text-sm text-[var(--viction-text-secondary)]">Financial Infrastructure</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 p-4 bg-[var(--viction-surface-elevated)] rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <img 
                src="https://viction.xyz/static/media/user-2.4c438ec378f299dc8873.png" 
                alt="Community"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold text-[var(--viction-text-primary)]">Community</h3>
            <p className="text-sm text-[var(--viction-text-secondary)]">Decentralized Governance</p>
          </div>
        </div>
        
        {/* Connecting lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <svg className="w-full h-32" viewBox="0 0 800 120">
            <path 
              d="M50,60 Q200,20 400,60 T750,60" 
              stroke="var(--viction-primary)" 
              strokeWidth="2" 
              fill="none" 
              opacity="0.3"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-container py-16 border-t border-[var(--viction-border)]">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-[var(--viction-text-primary)]">Ready to Build the Future?</h3>
          <p className="text-[var(--viction-text-secondary)] mb-8 max-w-2xl mx-auto">
            This ideabook represents a vision for Web3's true potential—not isolated applications, 
            but composable ecosystems where the whole becomes greater than the sum of its parts.
          </p>
          <div className="flex justify-center gap-8 text-sm text-[var(--viction-text-muted)]">
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
