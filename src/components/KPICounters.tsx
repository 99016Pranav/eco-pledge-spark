import { useState, useEffect } from "react";
import { Leaf, Droplets, Zap, Recycle } from "lucide-react";

export const KPICounters = () => {
  const [counters, setCounters] = useState({
    carbonSaved: 0,
    waterSaved: 0,
    energySaved: 0,
    wasteReduced: 0
  });

  const targets = {
    carbonSaved: 45832, // kg CO2
    waterSaved: 127943, // liters
    energySaved: 89642, // kWh
    wasteReduced: 23567 // kg
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        carbonSaved: Math.min(prev.carbonSaved + targets.carbonSaved / steps, targets.carbonSaved),
        waterSaved: Math.min(prev.waterSaved + targets.waterSaved / steps, targets.waterSaved),
        energySaved: Math.min(prev.energySaved + targets.energySaved / steps, targets.energySaved),
        wasteReduced: Math.min(prev.wasteReduced + targets.wasteReduced / steps, targets.wasteReduced)
      }));
    }, stepTime);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setCounters(targets);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const formatNumber = (num: number) => {
    return Math.floor(num).toLocaleString();
  };

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Collective Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, our community has achieved remarkable environmental milestones. 
            These numbers grow every day thanks to pledgers like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-card rounded-2xl p-8 shadow-soft hover:shadow-nature transition-all duration-500 animate-grow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-green-light/20 rounded-full mb-6">
              <Leaf className="w-8 h-8 text-nature-green" />
            </div>
            <div className="text-3xl font-bold text-nature-green mb-2 animate-counter">
              {formatNumber(counters.carbonSaved)}
            </div>
            <div className="text-sm text-muted-foreground mb-1">kg CO₂ Saved</div>
            <div className="text-xs text-muted-foreground">Equivalent to planting 2,100 trees</div>
          </div>

          <div className="text-center bg-card rounded-2xl p-8 shadow-soft hover:shadow-nature transition-all duration-500 animate-grow" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-blue-light/30 rounded-full mb-6">
              <Droplets className="w-8 h-8 text-sky-blue" />
            </div>
            <div className="text-3xl font-bold text-sky-blue mb-2 animate-counter">
              {formatNumber(counters.waterSaved)}
            </div>
            <div className="text-sm text-muted-foreground mb-1">Liters Water Saved</div>
            <div className="text-xs text-muted-foreground">Enough for 500 families per month</div>
          </div>

          <div className="text-center bg-card rounded-2xl p-8 shadow-soft hover:shadow-nature transition-all duration-500 animate-grow" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2 animate-counter">
              {formatNumber(counters.energySaved)}
            </div>
            <div className="text-sm text-muted-foreground mb-1">kWh Energy Saved</div>
            <div className="text-xs text-muted-foreground">Powers 180 homes for a month</div>
          </div>

          <div className="text-center bg-card rounded-2xl p-8 shadow-soft hover:shadow-nature transition-all duration-500 animate-grow" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-brown/20 rounded-full mb-6">
              <Recycle className="w-8 h-8 text-earth-brown" />
            </div>
            <div className="text-3xl font-bold text-earth-brown mb-2 animate-counter">
              {formatNumber(counters.wasteReduced)}
            </div>
            <div className="text-sm text-muted-foreground mb-1">kg Waste Reduced</div>
            <div className="text-xs text-muted-foreground">Diverted from landfills</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-nature-green">Live impact</span> - Updated in real-time as more people take action
          </p>
        </div>
      </div>
    </section>
  );
};