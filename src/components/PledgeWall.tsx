import { useState, useEffect } from "react";
import { Star, MapPin, User, Calendar, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Pledge {
  id: string;
  name: string;
  state: string;
  profile: string;
  date: string;
  rating: number;
  commitments: number;
}

export const PledgeWall = () => {
  const [pledges, setPledges] = useState<Pledge[]>([]);
  const [filteredPledges, setFilteredPledges] = useState<Pledge[]>([]);
  const [stateFilter, setStateFilter] = useState<string>("all-states");
  const [profileFilter, setProfileFilter] = useState<string>("all-profiles");

  // Sample data - in a real app, this would come from a database
  useEffect(() => {
    const samplePledges: Pledge[] = [
      {
        id: "1",
        name: "Priya Sharma",
        state: "Maharashtra",
        profile: "College Student",
        date: "2024-01-15",
        rating: 5,
        commitments: 8
      },
      {
        id: "2", 
        name: "Arjun Patel",
        state: "Gujarat",
        profile: "Working Professional",
        date: "2024-01-14",
        rating: 4,
        commitments: 6
      },
      {
        id: "3",
        name: "Kavya Reddy",
        state: "Telangana", 
        profile: "Environmental Activist",
        date: "2024-01-14",
        rating: 5,
        commitments: 10
      },
      {
        id: "4",
        name: "Rohan Singh",
        state: "Delhi",
        profile: "High School Student",
        date: "2024-01-13",
        rating: 3,
        commitments: 4
      },
      {
        id: "5",
        name: "Anita Kumar",
        state: "Karnataka",
        profile: "Teacher/Educator",
        date: "2024-01-13",
        rating: 4,
        commitments: 7
      },
      {
        id: "6",
        name: "Dev Gupta",
        state: "Rajasthan",
        profile: "Entrepreneur",
        date: "2024-01-12",
        rating: 4,
        commitments: 5
      },
      {
        id: "7",
        name: "Sneha Iyer",
        state: "Tamil Nadu",
        profile: "Graduate Student",
        date: "2024-01-12",
        rating: 5,
        commitments: 9
      },
      {
        id: "8",
        name: "Vikram Joshi",
        state: "Uttarakhand",
        profile: "Working Professional",
        date: "2024-01-11",
        rating: 3,
        commitments: 5
      }
    ];

    setPledges(samplePledges);
    setFilteredPledges(samplePledges);
  }, []);

  useEffect(() => {
    let filtered = pledges;

    if (stateFilter && stateFilter !== "all-states") {
      filtered = filtered.filter(pledge => pledge.state === stateFilter);
    }

    if (profileFilter && profileFilter !== "all-profiles") {
      filtered = filtered.filter(pledge => pledge.profile === profileFilter);
    }

    setFilteredPledges(filtered);
  }, [pledges, stateFilter, profileFilter]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getRatingText = (rating: number) => {
    if (rating <= 2) return "Climate Aware";
    if (rating <= 3) return "Eco Warrior";
    if (rating <= 4) return "Climate Champion";
    return "Planet Guardian";
  };

  const uniqueStates = Array.from(new Set(pledges.map(p => p.state))).sort();
  const uniqueProfiles = Array.from(new Set(pledges.map(p => p.profile))).sort();

  return (
    <section id="pledge-wall" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Climate Champions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the inspiring individuals who have taken the climate action pledge. 
            Their commitment creates a wave of positive change across the nation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex-1">
            <Select onValueChange={setStateFilter} value={stateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-states">All States</SelectItem>
                {uniqueStates.map(state => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1">
            <Select onValueChange={setProfileFilter} value={profileFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-profiles">All Profiles</SelectItem>
                {uniqueProfiles.map(profile => (
                  <SelectItem key={profile} value={profile}>{profile}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {(stateFilter && stateFilter !== "all-states") || (profileFilter && profileFilter !== "all-profiles") ? (
            <Button 
              variant="outline" 
              onClick={() => {
                setStateFilter("all-states");
                setProfileFilter("all-profiles");
              }}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              Clear
            </Button>
          ) : null}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-nature-green">{pledges.length}</div>
            <div className="text-sm text-muted-foreground">Total Pledges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-blue">{uniqueStates.length}</div>
            <div className="text-sm text-muted-foreground">States</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">
              {pledges.reduce((sum, p) => sum + p.commitments, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Commitments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-earth-brown">
              {(pledges.reduce((sum, p) => sum + p.rating, 0) / pledges.length).toFixed(1)}★
            </div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </div>
        </div>

        {/* Pledge Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPledges.map((pledge, index) => (
            <Card 
              key={pledge.id} 
              className="hover:shadow-nature transition-all duration-300 transform hover:scale-105 border-0 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground mb-1">
                      {pledge.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {pledge.state}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {renderStars(pledge.rating)}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{pledge.profile}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{formatDate(pledge.date)}</span>
                  </div>

                  <div className="bg-nature-green-light/10 rounded-lg p-3">
                    <div className="text-sm font-medium text-nature-green mb-1">
                      {getRatingText(pledge.rating)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {pledge.commitments} climate commitments
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPledges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No pledges found for the selected filters.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setStateFilter("all-states");
                setProfileFilter("all-profiles");
              }}
              className="mt-4"
            >
              Show All Pledges
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-0 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Be Part of This Movement
            </h3>
            <p className="text-muted-foreground mb-6">
              Every name on this wall represents hope for our planet's future. 
              Add yours and inspire others to take action.
            </p>
            <Button 
              variant="nature" 
              size="lg"
              onClick={() => document.getElementById('pledge-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Wall
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};