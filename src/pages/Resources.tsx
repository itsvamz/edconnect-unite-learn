
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ExternalLink, FileText, Video, BookOpen } from "lucide-react";

const Resources = () => {
  const resources = {
    students: [
      {
        id: 1,
        title: "Study Guide: Effective Note-Taking",
        type: "PDF",
        icon: FileText,
        description: "Learn how to take better notes in class with this comprehensive guide.",
        downloadLink: "#"
      },
      {
        id: 2,
        title: "Video Tutorial: Problem Solving in Mathematics",
        type: "Video",
        icon: Video,
        description: "Step-by-step approach to solving complex math problems.",
        externalLink: "#"
      },
      {
        id: 3,
        title: "Science Project Ideas for Middle School",
        type: "PDF",
        icon: FileText,
        description: "50+ science project ideas that are both educational and fun.",
        downloadLink: "#"
      }
    ],
    volunteers: [
      {
        id: 1,
        title: "Guide to Effective Online Teaching",
        type: "PDF",
        icon: FileText,
        description: "Best practices for engaging students in a virtual classroom environment.",
        downloadLink: "#"
      },
      {
        id: 2,
        title: "Educational Games for the Classroom",
        type: "PDF",
        icon: FileText,
        description: "Collection of educational games that make learning fun and interactive.",
        downloadLink: "#"
      },
      {
        id: 3,
        title: "Video: Creating Engaging Presentations",
        type: "Video",
        icon: Video,
        description: "Learn how to create presentations that captivate your students' attention.",
        externalLink: "#"
      }
    ],
    schools: [
      {
        id: 1,
        title: "School-Volunteer Partnership Guide",
        type: "PDF",
        icon: FileText,
        description: "How to build and maintain effective relationships with your volunteers.",
        downloadLink: "#"
      },
      {
        id: 2,
        title: "Student Engagement Metrics",
        type: "PDF",
        icon: FileText,
        description: "Tools and methods for measuring student engagement in both traditional and online settings.",
        downloadLink: "#"
      },
      {
        id: 3,
        title: "Curriculum Planning Templates",
        type: "PDF",
        icon: FileText,
        description: "Ready-to-use templates for curriculum planning and development.",
        downloadLink: "#"
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Educational Resources
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Access free resources for students, volunteers, and schools
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="students">
              <div className="mb-8">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="students">For Students</TabsTrigger>
                  <TabsTrigger value="volunteers">For Volunteers</TabsTrigger>
                  <TabsTrigger value="schools">For Schools</TabsTrigger>
                </TabsList>
              </div>
              
              {Object.entries(resources).map(([key, items]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((resource) => (
                      <Card key={resource.id}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <resource.icon className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <CardDescription>{resource.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          {resource.downloadLink ? (
                            <Button variant="outline" className="w-full" asChild>
                              <a href={resource.downloadLink}>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </a>
                            </Button>
                          ) : (
                            <Button variant="outline" className="w-full" asChild>
                              <a href={resource.externalLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Resource
                              </a>
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 rounded-lg bg-orange-50 p-6 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-orange-500" />
              <h2 className="mt-4 text-2xl font-bold">Looking for More Resources?</h2>
              <p className="mt-2 text-muted-foreground">
                We're constantly adding new educational materials to our library.
              </p>
              <Button className="mt-4">
                Submit a Resource
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
