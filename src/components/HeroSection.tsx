import { Button } from "@/components/ui/button";
import { Leaf, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-forest.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-nature-green/20 via-transparent to-sky-blue/30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="w-8 h-8 text-nature-green opacity-60" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Globe className="w-10 h-10 text-sky-blue opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6 text-accent opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Take the
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Climate Action
            </span>
            Pledge
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students and professionals committed to protecting our planet. 
            Every action counts, every voice matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              onClick={onGetStarted}
              className="text-lg px-8 py-4 h-auto"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make Your Pledge
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 h-auto bg-background/80 backdrop-blur-sm"
              onClick={() => document.getElementById('why-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-nature-green">2,847</div>
            <div className="text-sm text-muted-foreground">Pledges Made</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-sky-blue">156</div>
            <div className="text-sm text-muted-foreground">Cities Participating</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-accent">89%</div>
            <div className="text-sm text-muted-foreground">Taking Daily Action</div>
          </div>
        </div>
      </div>
    </section>
  );
};