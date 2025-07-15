import { Star, Download, Share2, Calendar, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CertificateProps {
  name: string;
  rating: number;
  commitments: string[];
  onDownload: () => void;
  onShare: () => void;
  onBackToForm: () => void;
}

export const Certificate = ({ name, rating, commitments, onDownload, onShare, onBackToForm }: CertificateProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const getRatingText = (rating: number) => {
    if (rating <= 2) return "Climate Aware";
    if (rating <= 3) return "Eco Warrior";
    if (rating <= 4) return "Climate Champion";
    return "Planet Guardian";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-8 h-8 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Congratulations, {name}! 🌱
          </h2>
          <p className="text-lg text-muted-foreground">
            You've officially joined the climate action movement. Here's your commitment certificate.
          </p>
        </div>

        <Card className="bg-card shadow-nature border-0 overflow-hidden animate-grow">
          {/* Certificate Header */}
          <div className="bg-gradient-hero text-primary-foreground p-8 text-center">
            <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Climate Action Pledge</h3>
            <p className="text-lg opacity-90">Certificate of Commitment</p>
          </div>

          {/* Certificate Body */}
          <div className="p-12">
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-4">This certifies that</p>
              <h4 className="text-4xl font-bold text-foreground mb-4">{name}</h4>
              <p className="text-lg text-muted-foreground mb-6">
                has made a solemn commitment to take meaningful climate action and protect our planet for future generations.
              </p>
            </div>

            {/* Rating Section */}
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground mb-2">Climate Action Rating</p>
              <div className="flex justify-center gap-1 mb-2">
                {renderStars(rating)}
              </div>
              <p className="text-xl font-semibold text-nature-green">{getRatingText(rating)}</p>
            </div>

            {/* Commitments */}
            <div className="mb-8">
              <h5 className="text-lg font-semibold text-foreground mb-4 text-center">Pledged Commitments</h5>
              <div className="grid md:grid-cols-2 gap-3">
                {commitments.slice(0, 6).map((commitment, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Leaf className="w-4 h-4 text-nature-green flex-shrink-0" />
                    <span>{commitment}</span>
                  </div>
                ))}
              </div>
              {commitments.length > 6 && (
                <p className="text-center text-sm text-muted-foreground mt-3">
                  +{commitments.length - 6} more commitments
                </p>
              )}
            </div>

            {/* Certificate Footer */}
            <div className="border-t pt-6">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {currentDate}</span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">Climate Action Pledge</p>
                  <p>Global Environmental Initiative</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button variant="nature" size="lg" onClick={onDownload} className="gap-2">
            <Download className="w-5 h-5" />
            Download Certificate
          </Button>
          
          <Button variant="outline" size="lg" onClick={onShare} className="gap-2 bg-background/80">
            <Share2 className="w-5 h-5" />
            Share Achievement
          </Button>
        </div>

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <Card className="bg-muted/50 border-0 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">What's Next?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your journey has just begun! We'll send you personalized tips, connect you with local climate groups, 
              and track your progress as you fulfill your commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={onBackToForm}>
                Make Another Pledge
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('pledge-wall')?.scrollIntoView({ behavior: 'smooth' })}>
                View Pledge Wall
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};