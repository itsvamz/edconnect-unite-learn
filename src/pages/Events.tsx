
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      date: "April 15, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Westside High School, Room 203",
      school: "Westside High School",
      type: "Workshop",
      description: "Learn the basics of Python programming in this hands-on workshop for beginners.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "English Literature Masterclass",
      date: "April 18, 2023",
      time: "4:00 PM - 6:00 PM",
      location: "Central Library, Main Hall",
      school: "Eastwood Elementary",
      type: "Lecture",
      description: "A deep dive into classic literature with professional writer and educator Dr. Jane Smith.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Science Fair Preparation",
      date: "April 20, 2023",
      time: "2:30 PM - 4:30 PM",
      location: "Central Middle School, Science Lab",
      school: "Central Middle School",
      type: "Workshop",
      description: "Get tips and guidance on creating excellent science fair projects from experienced mentors.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Career Day: Tech Industry",
      date: "April 25, 2023",
      time: "9:00 AM - 3:00 PM",
      location: "Lakeside Academy, Auditorium",
      school: "Lakeside Academy",
      type: "Career Fair",
      description: "Meet professionals from various tech companies and learn about careers in technology.",
      image: "/placeholder.svg"
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
                Events & Opportunities
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse and register for upcoming volunteer opportunities at schools in our network
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button>
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Events
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="upcoming">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                  <TabsTrigger value="my">My Registrations</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="absolute inset-0 h-full w-full object-cover" 
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-orange-500">{event.type}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                        <CardDescription>{event.school}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm line-clamp-2">{event.description}</p>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button asChild className="w-1/2">
                          <Link to={`/events/${event.id}`}>Details</Link>
                        </Button>
                        <Button variant="outline" className="w-1/2">Register</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="past">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Past events will be displayed here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="my">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Your event registrations will appear here after you register.</p>
                  <Button className="mt-4">Browse Events</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
