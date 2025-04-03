
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Clock, Calendar, ThumbsUp, Eye, MessageSquare, Play } from "lucide-react";

const StudentVideos = () => {
  const recommendedVideos = [
    {
      id: 1,
      title: "Solving Quadratic Equations",
      thumbnail: "/placeholder.svg",
      subject: "Mathematics",
      topic: "Algebra",
      duration: "32 min",
      date: "Mar 15, 2023",
      views: 1246,
      likes: 342,
      instructor: "Dr. Sarah Johnson"
    },
    {
      id: 2,
      title: "Understanding Chemical Bonds",
      thumbnail: "/placeholder.svg",
      subject: "Chemistry",
      topic: "Chemical Bonding",
      duration: "45 min",
      date: "Mar 20, 2023",
      views: 987,
      likes: 256,
      instructor: "Prof. Michael Chen"
    },
    {
      id: 3,
      title: "Literary Devices in Shakespeare",
      thumbnail: "/placeholder.svg",
      subject: "English Literature",
      topic: "Shakespeare",
      duration: "38 min",
      date: "Mar 22, 2023",
      views: 765,
      likes: 189,
      instructor: "Ms. Emily Singh"
    },
    {
      id: 4,
      title: "The French Revolution",
      thumbnail: "/placeholder.svg",
      subject: "History",
      topic: "European History",
      duration: "52 min",
      date: "Mar 25, 2023",
      views: 654,
      likes: 142,
      instructor: "Prof. James Wilson"
    }
  ];
  
  const recentVideos = [
    {
      id: 5,
      title: "Newton's Laws of Motion",
      thumbnail: "/placeholder.svg",
      subject: "Physics",
      topic: "Classical Mechanics",
      duration: "47 min",
      date: "Mar 28, 2023",
      viewed: "85%",
      instructor: "Dr. Robert Lee"
    },
    {
      id: 6,
      title: "Introduction to Cellular Biology",
      thumbnail: "/placeholder.svg",
      subject: "Biology",
      topic: "Cell Structure",
      duration: "41 min",
      date: "Mar 30, 2023",
      viewed: "100%",
      instructor: "Dr. Maria Rodriguez"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Video Library</h1>
            <p className="text-muted-foreground">
              Access educational videos and recorded lectures
            </p>
          </div>
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search videos..." 
              className="pl-8" 
            />
          </div>
        </div>
        
        <Tabs defaultValue="recommended">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="recently-watched">Recently Watched</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="all">All Videos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommended" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recommendedVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="h-40 w-full object-cover" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                      <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-white/20 text-white">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="line-clamp-1 text-base">{video.title}</CardTitle>
                    <CardDescription>{video.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <Badge variant="outline" className="text-xs">{video.subject}</Badge>
                      <Badge variant="outline" className="text-xs">{video.topic}</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{video.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        <span>{video.views}</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="mr-1 h-3 w-3" />
                        <span>{video.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full">Watch Video</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recently-watched" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {recentVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="h-48 w-full object-cover md:h-full" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-white/20 text-white">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                        {video.duration}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.instructor}</p>
                      
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline">{video.subject}</Badge>
                        <Badge variant="outline">{video.topic}</Badge>
                      </div>
                      
                      <div className="mt-4 space-y-2 text-sm">
                        <div className="flex items-center">
                          <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>Watched: {video.viewed}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>Date: {video.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>Duration: {video.duration}</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto flex flex-wrap gap-2 pt-4">
                        <Button>Continue Watching</Button>
                        <Button variant="outline">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Discussion
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="py-8 text-center">
              <p className="text-muted-foreground">You haven't saved any videos as favorites yet.</p>
              <Button className="mt-4">Browse Videos</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="all">
            <div className="py-8 text-center">
              <p className="text-muted-foreground">The complete video library will be displayed here.</p>
              <Button className="mt-4">Browse All Videos</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentVideos;
