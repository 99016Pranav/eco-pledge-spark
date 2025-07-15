import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { KPICounters } from "@/components/KPICounters";
import { WhyTakeAction } from "@/components/WhyTakeAction";
import { PledgeForm } from "@/components/PledgeForm";
import { Certificate } from "@/components/Certificate";
import { PledgeWall } from "@/components/PledgeWall";
import { useToast } from "@/hooks/use-toast";

interface PledgeFormData {
  name: string;
  email: string;
  mobile: string;
  state: string;
  profile: string;
  commitments: string[];
}

const Index = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [pledgeData, setPledgeData] = useState<PledgeFormData | null>(null);
  const { toast } = useToast();

  const handlePledgeSubmit = (data: PledgeFormData) => {
    setPledgeData(data);
    setShowCertificate(true);
    
    // Scroll to certificate
    setTimeout(() => {
      document.getElementById('certificate')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    toast({
      title: "Pledge Successful! 🌱",
      description: "Thank you for joining the climate action movement. Your certificate is ready!",
    });
  };

  const calculateRating = (commitments: string[]) => {
    // Simple rating calculation based on number of commitments
    if (commitments.length >= 8) return 5;
    if (commitments.length >= 6) return 4;
    if (commitments.length >= 4) return 3;
    if (commitments.length >= 2) return 2;
    return 1;
  };

  const getCommitmentLabels = (commitmentIds: string[]) => {
    const labels: { [key: string]: string } = {
      "reduce-energy": "Reduce energy consumption by 20%",
      "use-renewable": "Switch to renewable energy sources",
      "reduce-waste": "Minimize single-use plastics",
      "sustainable-transport": "Use sustainable transportation",
      "plant-trees": "Plant trees or support reforestation",
      "educate-others": "Educate others about climate action",
      "support-local": "Support local and sustainable businesses",
      "water-conservation": "Practice water conservation",
      "green-diet": "Adopt a more plant-based diet",
      "carbon-offset": "Offset my carbon footprint"
    };
    
    return commitmentIds.map(id => labels[id] || id);
  };

  const handleDownloadCertificate = () => {
    toast({
      title: "Download Ready! 📄",
      description: "Your certificate has been prepared for download.",
    });
    // In a real app, this would generate and download a PDF
  };

  const handleShareCertificate = () => {
    if (navigator.share && pledgeData) {
      navigator.share({
        title: 'Climate Action Pledge Certificate',
        text: `I just took the Climate Action Pledge! Join me in making a difference for our planet. 🌍`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(`I just took the Climate Action Pledge! Join ${pledgeData?.name} and others in making a difference for our planet. 🌍 ${window.location.href}`);
      toast({
        title: "Link Copied! 🔗",
        description: "Share link copied to clipboard. Inspire others to take action!",
      });
    }
  };

  const handleBackToForm = () => {
    setShowCertificate(false);
    setPledgeData(null);
    document.getElementById('pledge-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    document.getElementById('pledge-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onGetStarted={handleGetStarted} />
      <KPICounters />
      <WhyTakeAction />
      
      {!showCertificate ? (
        <PledgeForm onSubmit={handlePledgeSubmit} />
      ) : (
        <div id="certificate">
          <Certificate
            name={pledgeData?.name || ""}
            rating={calculateRating(pledgeData?.commitments || [])}
            commitments={getCommitmentLabels(pledgeData?.commitments || [])}
            onDownload={handleDownloadCertificate}
            onShare={handleShareCertificate}
            onBackToForm={handleBackToForm}
          />
        </div>
      )}
      
      <PledgeWall />
    </div>
  );
};

export default Index;
