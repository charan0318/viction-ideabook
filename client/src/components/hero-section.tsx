import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--viction-purple))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-[hsl(var(--viction-blue))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" 
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute -bottom-8 left-20 w-80 h-80 bg-[hsl(var(--viction-purple))] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" 
          style={{ animationDelay: '4s' }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 animate-slide-up">
          What If Every VIC Grant Became a{" "}
          <span className="gradient-text">Viction-Native Experience?</span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-[hsl(var(--text-secondary))] max-w-4xl mx-auto mb-12 animate-fade-in" 
          style={{ animationDelay: '0.3s' }}
        >
          A public ideabook reimagining the future of the Viction ecosystem through 11 visionary projects that bring glory to users, culture, and builders.
        </p>
        <Button
          onClick={scrollToAbout}
          className="animate-fade-in bg-gradient-to-r from-[hsl(var(--viction-purple))] to-[hsl(var(--viction-blue))] hover:shadow-lg hover:shadow-[hsl(var(--viction-purple))]/25 transition-all duration-300"
          style={{ animationDelay: '0.6s' }}
          size="lg"
        >
          <span className="mr-2">Explore the Vision</span>
          <ChevronDown className="scroll-indicator h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
