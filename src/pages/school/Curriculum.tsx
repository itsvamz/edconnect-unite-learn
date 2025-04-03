
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileUp, Search, BookOpen, FileText, Video, Plus, Upload, Edit2, Trash2, MoreHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SchoolCurriculum = () => {
  const { toast } = useToast();
  const [isAddingModule, setIsAddingModule] = useState(false);
  
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      description: "Algebra, geometry, and mathematical problem-solving",
      modules: 12,
      materials: 36,
      volunteers: 8,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Science",
      description: "Physics, chemistry, and biology fundamentals",
      modules: 15,
      materials: 42,
      volunteers: 6,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "English Literature",
      description: "Reading comprehension, analysis, and creative writing",
      modules: 10,
      materials: 28,
      volunteers: 5,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "History",
      description: "World history, civilizations, and historical events",
      modules: 14,
      materials: 32,
      volunteers: 4,
      image: "/placeholder.svg"
    }
  ];

  const modules = [
    {
      id: 1,
      title: "Numbers and Operations",
      description: "Fundamentals of numbers and basic operations.",
      grade: "6-8",
      subject: "Mathematics",
      status: "Published",
      volunteers: 4,
      materials: 5,
      lastUpdated: "Mar 15, 2023"
    },
    {
      id: 2,
      title: "Introduction to Algebra",
      description: "Basics of variables, expressions, and equations.",
      grade: "7-9",
      subject: "Mathematics",
      status: "Published",
      volunteers: 3,
      materials: 6,
      lastUpdated: "Mar 20, 2023"
    },
    {
      id: 3,
      title: "Chemical Reactions",
      description: "Understanding chemical reactions and their types.",
      grade: "8-10",
      subject: "Science",
      status: "Published",
      volunteers: 2,
      materials: 7,
      lastUpdated: "Mar 25, 2023"
    },
    {
      id: 4,
      title: "Shakespeare's Works",
      description: "Exploring major plays and sonnets by William Shakespeare.",
      grade: "9-12",
      subject: "English Literature",
      status: "Draft",
      volunteers: 0,
      materials: 3,
      lastUpdated: "Apr 1, 2023"
    }
  ];
  
  const handleAddModule = () => {
    toast({
      title: "Module Created",
      description: "The new curriculum module has been added successfully."
    });
    
    setIsAddingModule(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Curriculum</h1>
            <p className="text-muted-foreground">
              Manage your school's curriculum and educational materials
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsAddingModule(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Module
            </Button>
          </div>
        </div>
        
        {isAddingModule ? (
          <Card>
            <CardHeader>
              <CardTitle>Create New Curriculum Module</CardTitle>
              <CardDescription>
                Define a new module for volunteers to teach
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="module-title" className="text-sm font-medium">Title</label>
                  <Input id="module-title" placeholder="Module title..." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="module-subject" className="text-sm font-medium">Subject</label>
                  <select 
                    id="module-subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select subject...</option>
                    {subjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>{subject.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="module-grade" className="text-sm font-medium">Grade Level</label>
                  <Input id="module-grade" placeholder="e.g., 6-8" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="module-status" className="text-sm font-medium">Status</label>
                  <select 
                    id="module-status"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="module-description" className="text-sm font-medium">Description</label>
                <Textarea 
                  id="module-description" 
                  placeholder="Describe the module content and objectives..." 
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload Materials</label>
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <FileUp className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-2 text-sm font-medium">Drag files here or click to upload</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Support for lesson plans, slides, worksheets, and videos.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    <Upload className="mr-2 h-4 w-4" />
                    Select Files
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={() => setIsAddingModule(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddModule}>
                Create Module
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
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
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                      <span className="flex items-center">
                        <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                        {subject.modules} modules
                      </span>
                      <span className="flex items-center">
                        <FileText className="mr-1 h-4 w-4 text-muted-foreground" />
                        {subject.materials} materials
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Manage Subject</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search modules..." 
                  className="pl-8" 
                />
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>{subject.name}</option>
                ))}
              </select>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            
            <Tabs defaultValue="all">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="all">All Modules</TabsTrigger>
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6 space-y-4">
                {modules.map((module) => (
                  <Card key={module.id}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle>{module.title}</CardTitle>
                          <CardDescription>
                            {module.subject} • Grade {module.grade}
                          </CardDescription>
                        </div>
                        <Badge 
                          className={`w-fit ${
                            module.status === "Published" 
                              ? "bg-green-500" 
                              : "bg-amber-500"
                          }`}
                        >
                          {module.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm">{module.description}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <BookOpen className="mr-1 h-4 w-4" />
                          {module.volunteers} volunteers teaching
                        </span>
                        <span className="flex items-center">
                          <FileText className="mr-1 h-4 w-4" />
                          {module.materials} materials
                        </span>
                        <span>Last updated: {module.lastUpdated}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <div className="flex w-full flex-wrap gap-2">
                        <Button className="flex-1" variant="outline">
                          <Edit2 className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button className="flex-1" variant="outline">
                          <FileText className="mr-2 h-4 w-4" />
                          Materials
                        </Button>
                        <Button className="flex-1" variant="outline">
                          <Video className="mr-2 h-4 w-4" />
                          Classes
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="published" className="mt-6 space-y-4">
                {modules
                  .filter(module => module.status === "Published")
                  .map((module) => (
                    <Card key={module.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{module.title}</CardTitle>
                            <CardDescription>
                              {module.subject} • Grade {module.grade}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-green-500">
                            {module.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">{module.description}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <BookOpen className="mr-1 h-4 w-4" />
                            {module.volunteers} volunteers teaching
                          </span>
                          <span className="flex items-center">
                            <FileText className="mr-1 h-4 w-4" />
                            {module.materials} materials
                          </span>
                          <span>Last updated: {module.lastUpdated}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button className="flex-1" variant="outline">
                            <Edit2 className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button className="flex-1" variant="outline">
                            <FileText className="mr-2 h-4 w-4" />
                            Materials
                          </Button>
                          <Button className="flex-1" variant="outline">
                            <Video className="mr-2 h-4 w-4" />
                            Classes
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </TabsContent>
              
              <TabsContent value="draft" className="mt-6 space-y-4">
                {modules
                  .filter(module => module.status === "Draft")
                  .map((module) => (
                    <Card key={module.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{module.title}</CardTitle>
                            <CardDescription>
                              {module.subject} • Grade {module.grade}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-amber-500">
                            {module.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">{module.description}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <BookOpen className="mr-1 h-4 w-4" />
                            {module.volunteers} volunteers teaching
                          </span>
                          <span className="flex items-center">
                            <FileText className="mr-1 h-4 w-4" />
                            {module.materials} materials
                          </span>
                          <span>Last updated: {module.lastUpdated}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button className="flex-1">
                            <Edit2 className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button className="flex-1" variant="outline">
                            <FileText className="mr-2 h-4 w-4" />
                            Materials
                          </Button>
                          <Button className="flex-1" variant="outline">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SchoolCurriculum;
