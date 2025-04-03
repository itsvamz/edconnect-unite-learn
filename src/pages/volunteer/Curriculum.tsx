
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, Download, Clock, Users, FileCheck, School } from "lucide-react";

const VolunteerCurriculum = () => {
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      description: "Algebra, geometry, and mathematical problem-solving",
      schools: 12,
      image: "/placeholder.svg",
      units: 12,
      materials: 36
    },
    {
      id: 2,
      name: "Science",
      description: "Physics, chemistry, and biology fundamentals",
      schools: 9,
      image: "/placeholder.svg",
      units: 15,
      materials: 42
    },
    {
      id: 3,
      name: "English Literature",
      description: "Reading comprehension, analysis, and creative writing",
      schools: 14,
      image: "/placeholder.svg",
      units: 10,
      materials: 28
    },
    {
      id: 4,
      name: "History",
      description: "World history, civilizations, and historical events",
      schools: 8,
      image: "/placeholder.svg",
      units: 14,
      materials: 32
    }
  ];

  const mathModules = [
    {
      id: 1,
      title: "Numbers and Operations",
      description: "Fundamentals of numbers and basic operations.",
      grade: "6-8",
      schools: ["Westside High School", "Central Middle School"],
      materials: [
        { type: "presentation", name: "Introduction to Numbers", size: "2.4 MB" },
        { type: "worksheet", name: "Basic Operations Practice", size: "1.1 MB" },
        { type: "quiz", name: "Numbers Assessment", size: "0.8 MB" }
      ]
    },
    {
      id: 2,
      title: "Introduction to Algebra",
      description: "Basics of variables, expressions, and equations.",
      grade: "7-9",
      schools: ["Westside High School", "Lakeside Academy"],
      materials: [
        { type: "presentation", name: "Algebraic Expressions", size: "3.2 MB" },
        { type: "worksheet", name: "Solving Simple Equations", size: "1.4 MB" },
        { type: "video", name: "Variables Explained", size: "18.7 MB" }
      ]
    },
    {
      id: 3,
      title: "Algebraic Equations",
      description: "Solving linear equations and their applications.",
      grade: "8-10",
      schools: ["Eastwood Elementary", "Central Middle School"],
      materials: [
        { type: "presentation", name: "Linear Equations", size: "2.8 MB" },
        { type: "worksheet", name: "Word Problems", size: "1.6 MB" },
        { type: "activity", name: "Equation Scavenger Hunt", size: "3.1 MB" }
      ]
    },
    {
      id: 4,
      title: "Geometry Basics",
      description: "Exploring shapes, angles, and spatial relationships.",
      grade: "7-9",
      schools: ["Westside High School", "Lakeside Academy"],
      materials: [
        { type: "presentation", name: "Introduction to Geometry", size: "4.1 MB" },
        { type: "worksheet", name: "Angles and Shapes", size: "1.3 MB" },
        { type: "activity", name: "Geometric Constructions", size: "2.2 MB" }
      ]
    }
  ];

  const assignmentTemplates = [
    {
      id: 1,
      title: "Math Problem Set Template",
      description: "A structured template for creating math homework assignments.",
      subject: "Mathematics",
      grade: "6-12",
      downloads: 342
    },
    {
      id: 2,
      title: "Lab Report Format",
      description: "Standard format for science lab reports with sections and guidelines.",
      subject: "Science",
      grade: "7-12",
      downloads: 256
    },
    {
      id: 3,
      title: "Essay Rubric",
      description: "Detailed rubric for evaluating student essays with scoring criteria.",
      subject: "English",
      grade: "8-12",
      downloads: 189
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Curriculum</h1>
          <p className="text-muted-foreground">
            Access teaching materials and curriculum resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <Card key={subject.id} className="overflow-hidden">
              <img 
                src={subject.image} 
                alt={subject.name} 
                className="h-32 w-full object-cover" 
              />
              <CardHeader className="p-4 pb-0">
                <CardTitle>{subject.name}</CardTitle>
                <CardDescription>{subject.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{subject.units} units</span>
                    <span className="text-muted-foreground">{subject.materials} materials</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      <School className="mr-1 inline-block h-4 w-4" />
                      {subject.schools} schools using
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">View Materials</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Mathematics</CardTitle>
                <CardDescription>Teaching materials and resources</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="modules">
              <TabsList>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="templates">Assignment Templates</TabsTrigger>
                <TabsTrigger value="resources">Additional Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="modules" className="mt-6 space-y-4">
                {mathModules.map((module) => (
                  <div 
                    key={module.id} 
                    className="rounded-lg border p-4"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{module.title}</h3>
                          <Badge variant="outline">Grade {module.grade}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                          <span className="flex items-center text-muted-foreground">
                            <School className="mr-1 h-4 w-4" />
                            Used by: {module.schools.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <h4 className="text-sm font-medium">Materials</h4>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                        {module.materials.map((material, index) => (
                          <div key={index} className="flex items-center justify-between rounded-md border p-2">
                            <div className="flex items-center">
                              {material.type === "presentation" && <FileText className="mr-2 h-4 w-4 text-blue-500" />}
                              {material.type === "worksheet" && <FileCheck className="mr-2 h-4 w-4 text-green-500" />}
                              {material.type === "quiz" && <FileText className="mr-2 h-4 w-4 text-red-500" />}
                              {material.type === "video" && <Video className="mr-2 h-4 w-4 text-purple-500" />}
                              {material.type === "activity" && <Users className="mr-2 h-4 w-4 text-orange-500" />}
                              <div>
                                <p className="text-sm font-medium">{material.name}</p>
                                <p className="text-xs text-muted-foreground">{material.size}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="templates" className="mt-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {assignmentTemplates.map((template) => (
                    <Card key={template.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription>{template.subject} • Grade {template.grade}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{template.description}</p>
                        <div className="mt-4 flex items-center text-sm text-muted-foreground">
                          <Download className="mr-1 h-4 w-4" />
                          <span>{template.downloads} downloads</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Template
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-6">
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Additional Resources</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Explore supplementary teaching resources, links to external materials, and professional development opportunities.
                  </p>
                  <Button className="mt-6">
                    Browse Resources
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerCurriculum;
