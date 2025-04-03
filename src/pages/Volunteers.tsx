
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Star } from "lucide-react";

const Volunteers = () => {
  const topVolunteers = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
      role: "Math Teacher",
      hours: 156,
      rating: 4.9,
      bio: "Experienced math teacher with a passion for making complex concepts accessible to all students."
    },
    {
      id: 2,
      name: "Sam Williams",
      avatar: "/placeholder.svg",
      role: "Science Educator",
      hours: 142,
      rating: 4.8,
      bio: "PhD in Physics with 10+ years of experience making science fun and interactive for students of all ages."
    },
    {
      id: 3,
      name: "Jamie Smith",
      avatar: "/placeholder.svg",
      role: "Computer Science Expert",
      hours: 128,
      rating: 4.7,
      bio: "Software engineer who loves teaching coding and computational thinking to the next generation."
    },
    {
      id: 4,
      name: "Morgan Lee",
      avatar: "/placeholder.svg",
      role: "English Tutor",
      hours: 115,
      rating: 4.9,
      bio: "Literature enthusiast and published author who specializes in creative writing and literature analysis."
    },
    {
      id: 5,
      name: "Taylor Chen",
      avatar: "/placeholder.svg",
      role: "History Teacher",
      hours: 98,
      rating: 4.6,
      bio: "History professor who brings the past to life through engaging storytelling and interactive lessons."
    },
    {
      id: 6,
      name: "Jordan Patel",
      avatar: "/placeholder.svg",
      role: "Art Instructor",
      hours: 87,
      rating: 4.8,
      bio: "Professional artist and designer who loves introducing students to various artistic mediums and techniques."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Volunteer Leaderboard
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Recognizing our most dedicated volunteers who are making a difference in education
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Volunteers</h2>
              <Button>Become a Volunteer</Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topVolunteers.map((volunteer) => (
                <Card key={volunteer.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                        <AvatarFallback>{volunteer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{volunteer.name}</CardTitle>
                        <CardDescription>{volunteer.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{volunteer.bio}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">{volunteer.hours} hours</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium">{volunteer.rating}/5.0</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteers;
