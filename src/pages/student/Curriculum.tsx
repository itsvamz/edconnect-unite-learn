
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, Award, CheckCircle, Lock } from "lucide-react";

const StudentCurriculum = () => {
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      description: "Algebra, geometry, and mathematical problem-solving",
      progress: 65,
      image: "/placeholder.svg",
      units: 12,
      current: "Algebraic Equations"
    },
    {
      id: 2,
      name: "Science",
      description: "Physics, chemistry, and biology fundamentals",
      progress: 40,
      image: "/placeholder.svg",
      units: 15,
      current: "Force and Motion"
    },
    {
      id: 3,
      name: "English Literature",
      description: "Reading comprehension, analysis, and creative writing",
      progress: 80,
      image: "/placeholder.svg",
      units: 10,
      current: "Shakespeare's Works"
    },
    {
      id: 4,
      name: "History",
      description: "World history, civilizations, and historical events",
      progress: 30,
      image: "/placeholder.svg",
      units: 14,
      current: "World War II"
    }
  ];

  const mathModules = [
    {
      id: 1,
      title: "Numbers and Operations",
      description: "Understanding the fundamentals of numbers and basic operations.",
      type: "Core",
      status: "completed",
      lessons: 5,
    },
    {
      id: 2,
      title: "Introduction to Algebra",
      description: "Learn the basics of variables, expressions, and equations.",
      type: "Core",
      status: "completed",
      lessons: 6,
    },
    {
      id: 3,
      title: "Algebraic Equations",
      description: "Solving linear equations and understanding their applications.",
      type: "Core",
      status: "in-progress",
      lessons: 8,
      progress: 3,
    },
    {
      id: 4,
      title: "Geometry Basics",
      description: "Exploring shapes, angles, and spatial relationships.",
      type: "Core",
      status: "locked",
      lessons: 7,
    },
    {
      id: 5,
      title: "Advanced Algebra",
      description: "Quadratic equations, functions, and complex problems.",
      type: "Advanced",
      status: "locked",
      lessons: 9,
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Curriculum</h1>
          <p className="text-muted-foreground">
            Explore your subjects and track your learning progress
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
                    <span>Progress</span>
                    <span className="font-medium">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{subject.units} units total</span>
                    <span className="text-muted-foreground">Current: {subject.current}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Continue Learning</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Mathematics</CardTitle>
                <CardDescription>Curriculum modules and lessons</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Overall Progress: 65%</span>
                <Progress value={65} className="h-2 w-28" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Modules</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6 space-y-4">
                {mathModules.map((module) => (
                  <div 
                    key={module.id} 
                    className={`rounded-lg border p-4 ${
                      module.status === "in-progress" 
                        ? "border-orange-200 bg-orange-50" 
                        : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start gap-3">
                        {module.status === "completed" ? (
                          <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        ) : module.status === "in-progress" ? (
                          <BookOpen className="mt-1 h-5 w-5 text-orange-500" />
                        ) : (
                          <Lock className="mt-1 h-5 w-5 text-muted-foreground" />
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{module.title}</h3>
                            <Badge variant="outline">{module.type}</Badge>
                            {module.status === "in-progress" && (
                              <Badge className="bg-orange-500">In Progress</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                          <div className="mt-2 text-sm">
                            <span>{module.lessons} lessons</span>
                            {module.status === "in-progress" && (
                              <>
                                <span className="mx-2">•</span>
                                <span className="text-orange-600">{module.progress}/{module.lessons} completed</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {module.status !== "locked" && (
                          <>
                            <Button 
                              variant={module.status === "in-progress" ? "default" : "outline"}
                              size="sm"
                            >
                              {module.status === "in-progress" ? "Continue" : "Review"}
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="mr-1 h-4 w-4" />
                              Materials
                            </Button>
                          </>
                        )}
                        {module.status === "locked" && (
                          <Button variant="outline" size="sm" disabled>
                            <Lock className="mr-1 h-4 w-4" />
                            Locked
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {module.status === "in-progress" && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>Module Progress</span>
                          <span>{Math.round((module.progress! / module.lessons) * 100)}%</span>
                        </div>
                        <Progress value={(module.progress! / module.lessons) * 100} className="mt-1 h-2" />
                      </div>
                    )}
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="in-progress" className="mt-6">
                {mathModules
                  .filter(module => module.status === "in-progress")
                  .map((module) => (
                    <div 
                      key={module.id} 
                      className="rounded-lg border border-orange-200 bg-orange-50 p-4"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-3">
                          <BookOpen className="mt-1 h-5 w-5 text-orange-500" />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{module.title}</h3>
                              <Badge variant="outline">{module.type}</Badge>
                              <Badge className="bg-orange-500">In Progress</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                            <div className="mt-2 text-sm">
                              <span>{module.lessons} lessons</span>
                              <span className="mx-2">•</span>
                              <span className="text-orange-600">{module.progress}/{module.lessons} completed</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button>Continue</Button>
                          <Button variant="outline">
                            <FileText className="mr-1 h-4 w-4" />
                            Materials
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>Module Progress</span>
                          <span>{Math.round((module.progress! / module.lessons) * 100)}%</span>
                        </div>
                        <Progress value={(module.progress! / module.lessons) * 100} className="mt-1 h-2" />
                      </div>
                    </div>
                  ))}
              </TabsContent>
              
              <TabsContent value="completed" className="mt-6 space-y-4">
                {mathModules
                  .filter(module => module.status === "completed")
                  .map((module) => (
                    <div 
                      key={module.id} 
                      className="rounded-lg border p-4"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{module.title}</h3>
                              <Badge variant="outline">{module.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                            <div className="mt-2 text-sm">
                              <span>{module.lessons} lessons</span>
                              <span className="mx-2">•</span>
                              <span className="text-green-600">Completed</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline">Review</Button>
                          <Button variant="outline">
                            <FileText className="mr-1 h-4 w-4" />
                            Materials
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentCurriculum;
