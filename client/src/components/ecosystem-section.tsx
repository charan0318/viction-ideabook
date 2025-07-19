import { CreditCard, Star, Palette } from "lucide-react";

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-4xl md:text-5xl mb-16 text-center gradient-text">
          Ecosystem Interconnections
        </h2>
        
        {/* Ecosystem visualization */}
        <div className="glassmorphism rounded-3xl p-8 mb-12">
          {/* Modern tech interface background image */}
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
            alt="Futuristic digital interface with glowing connections" 
            className="w-full h-64 object-cover rounded-2xl opacity-30 mb-8"
          />
          
          <div className="text-center mb-8">
            <h3 className="font-semibold text-2xl mb-4">How Projects Connect</h3>
            <p className="text-[hsl(var(--text-secondary))] max-w-3xl mx-auto">
              Each project builds upon others, creating a composable ecosystem where identity, reputation, governance, and culture reinforce each other.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--viction-purple))] to-[hsl(var(--viction-blue))] rounded-full mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="text-2xl h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Identity Layer</h4>
              <p className="text-sm text-[hsl(var(--text-secondary))]">OneID + Coin98 Passport create universal identity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--viction-purple))] to-[hsl(var(--viction-blue))] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="text-2xl h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Reputation Layer</h4>
              <p className="text-sm text-[hsl(var(--text-secondary))]">Efihub + Vikto provide composable reputation signals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--viction-purple))] to-[hsl(var(--viction-blue))] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Palette className="text-2xl h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Culture Layer</h4>
              <p className="text-sm text-[hsl(var(--text-secondary))]">Dagora + NFT guilds create cultural depth</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="font-semibold text-2xl mb-4">The Network Effect</h3>
          <p className="text-[hsl(var(--text-secondary))] max-w-3xl mx-auto">
            When identity flows through reputation, culture rewards participation, and governance enables coordination, 
            the entire ecosystem becomes greater than the sum of its parts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
