import { Shield, Users, Lightbulb, Target, TreePine, Heart } from "lucide-react";
import earthImage from "@/assets/earth-clean-energy.jpg";

export const WhyTakeAction = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Protect Our Future",
      description: "Climate action today ensures a livable planet for future generations. Every degree matters."
    },
    {
      icon: Users,
      title: "Join a Movement",
      description: "Connect with like-minded individuals creating positive change in their communities."
    },
    {
      icon: Lightbulb,
      title: "Make a Real Impact",
      description: "Small actions compound into massive environmental benefits when we act together."
    },
    {
      icon: Target,
      title: "Set Meaningful Goals",
      description: "Transform good intentions into trackable, achievable environmental commitments."
    },
    {
      icon: TreePine,
      title: "Preserve Biodiversity",
      description: "Protect ecosystems and wildlife by reducing our collective environmental footprint."
    },
    {
      icon: Heart,
      title: "Feel Good About Your Impact",
      description: "Experience the satisfaction of contributing to solutions rather than problems."
    }
  ];

  return (
    <section id="why-section" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Take
              <span className="block text-nature-green">Climate Action?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              The climate crisis is the defining challenge of our time, but it's also our greatest opportunity 
              to build a sustainable, equitable future. Every action you take creates ripple effects that extend 
              far beyond your immediate environment.
            </p>

            <div className="grid gap-8">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-nature-green-light/20 rounded-full flex items-center justify-center group-hover:bg-nature-green-light/30 transition-colors duration-300">
                      <reason.icon className="w-6 h-6 text-nature-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-nature-green transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-nature">
              <img 
                src={earthImage} 
                alt="Earth with clean energy symbols" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-green/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -left-8 bg-card rounded-2xl p-6 shadow-soft animate-float">
              <div className="text-2xl font-bold text-nature-green">1.5°C</div>
              <div className="text-sm text-muted-foreground">Global target</div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-soft animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-2xl font-bold text-sky-blue">2030</div>
              <div className="text-sm text-muted-foreground">Critical decade</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-soft">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              The Time for Action is Now
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Scientists agree we have this decade to prevent catastrophic climate change. 
              Your pledge isn't just a promise—it's a commitment to be part of the solution.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-nature-green rounded-full"></div>
                Evidence-based actions
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-blue rounded-full"></div>
                Community support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Measurable impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};