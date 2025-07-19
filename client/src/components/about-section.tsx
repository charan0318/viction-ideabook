import { Link, Palette, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-4xl md:text-5xl mb-8 gradient-text">About This Ideabook</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold text-2xl mb-4">What is Retrodrop?</h3>
            <p className="text-[hsl(var(--text-secondary))] leading-relaxed mb-6">
              Viction's Retrodrop Season 2 allocated significant VIC tokens to 11 key projects that have contributed to the ecosystem's growth. This represents a foundational moment for building true Web3 infrastructure.
            </p>
            <h3 className="font-semibold text-2xl mb-4">Why This Vision?</h3>
            <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
              Instead of simple token distributions, imagine if each allocation became the foundation for ecosystem-defining features that create interoperability, cultural depth, and real utility for Viction users.
            </p>
          </div>
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="font-semibold text-2xl mb-6">Problems We Solve</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Link className="text-[hsl(var(--viction-purple))] mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Interoperability</h4>
                  <p className="text-sm text-[hsl(var(--text-secondary))]">Connect isolated projects into a unified ecosystem</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Palette className="text-[hsl(var(--viction-purple))] mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Cultural Depth</h4>
                  <p className="text-sm text-[hsl(var(--text-secondary))]">Build identity and community beyond pure utility</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Rocket className="text-[hsl(var(--viction-purple))] mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Real Utility</h4>
                  <p className="text-sm text-[hsl(var(--text-secondary))]">Create tangible value for everyday users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
