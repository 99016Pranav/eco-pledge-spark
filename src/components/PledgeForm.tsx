import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Mail, Phone, MapPin, User, CheckCircle } from "lucide-react";

interface PledgeFormData {
  name: string;
  email: string;
  mobile: string;
  state: string;
  profile: string;
  commitments: string[];
}

interface PledgeFormProps {
  onSubmit: (data: PledgeFormData) => void;
}

export const PledgeForm = ({ onSubmit }: PledgeFormProps) => {
  const [formData, setFormData] = useState<PledgeFormData>({
    name: "",
    email: "",
    mobile: "",
    state: "",
    profile: "",
    commitments: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
  ];

  const profiles = [
    "High School Student", "College Student", "Graduate Student", "Fresh Graduate", 
    "Working Professional", "Entrepreneur", "Teacher/Educator", "Researcher", 
    "Environmental Activist", "Other"
  ];

  const commitmentOptions = [
    { id: "reduce-energy", label: "Reduce energy consumption by 20%" },
    { id: "use-renewable", label: "Switch to renewable energy sources" },
    { id: "reduce-waste", label: "Minimize single-use plastics" },
    { id: "sustainable-transport", label: "Use sustainable transportation" },
    { id: "plant-trees", label: "Plant trees or support reforestation" },
    { id: "educate-others", label: "Educate others about climate action" },
    { id: "support-local", label: "Support local and sustainable businesses" },
    { id: "water-conservation", label: "Practice water conservation" },
    { id: "green-diet", label: "Adopt a more plant-based diet" },
    { id: "carbon-offset", label: "Offset my carbon footprint" }
  ];

  const handleCommitmentChange = (commitmentId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      commitments: checked 
        ? [...prev.commitments, commitmentId]
        : prev.commitments.filter(id => id !== commitmentId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit(formData);
    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.mobile && 
                      formData.state && formData.profile && formData.commitments.length > 0;

  return (
    <section id="pledge-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Make Your Climate Pledge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of climate champions. Your commitment today shapes tomorrow's world.
          </p>
        </div>

        <Card className="shadow-nature border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-nature-green-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-nature-green" />
            </div>
            <CardTitle className="text-2xl">Your Climate Action Commitment</CardTitle>
            <CardDescription className="text-base">
              Every field helps us understand how to support your climate journey better.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Mobile Number
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    State
                  </Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile">Profile</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, profile: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your profile" />
                  </SelectTrigger>
                  <SelectContent>
                    {profiles.map(profile => (
                      <SelectItem key={profile} value={profile}>{profile}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Commitments */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">My Climate Commitments</Label>
                <p className="text-sm text-muted-foreground">
                  Choose the actions you commit to taking. Select at least one to proceed.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {commitmentOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Checkbox
                        id={option.id}
                        checked={formData.commitments.includes(option.id)}
                        onCheckedChange={(checked) => handleCommitmentChange(option.id, checked as boolean)}
                      />
                      <Label 
                        htmlFor={option.id} 
                        className="text-sm leading-relaxed cursor-pointer flex-1"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Note */}
              <div className="bg-sky-blue-light/20 rounded-lg p-4 border border-sky-blue/20">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-nature-green" />
                  Privacy Protection
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your email and mobile number are kept completely private and secure. We only use them to 
                  send you climate action tips and updates. Your name, state, and profile will be visible 
                  on our public pledge wall to inspire others. You can opt out anytime.
                </p>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="nature" 
                size="lg" 
                className="w-full text-lg py-6"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Creating Your Pledge...
                  </>
                ) : (
                  <>
                    <Leaf className="w-5 h-5 mr-2" />
                    Take the Climate Pledge
                  </>
                )}
              </Button>

              {!isFormValid && formData.name && (
                <p className="text-sm text-muted-foreground text-center">
                  Please fill in all required fields and select at least one commitment.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};