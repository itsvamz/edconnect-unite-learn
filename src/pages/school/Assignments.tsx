
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileUp, Search, FileText, Calendar, Clock, Plus, Upload, CheckCircle, Users, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SchoolAssignments = () => {
  const { toast } = useToast();
  const [isAddingAssignment, setIsAddingAssignment] = useState(false);
  
  const assignments = [
    {
      id: 1,
      title: "Algebra Problem Set #3",
      subject: "Mathematics",
      topic: "Algebraic Equations",
      dueDate: "Apr 15, 2023",
      dueTime: "11:59 PM",
      status: "Active",
      submissionType: "file",
      teacher: "Dr. Sarah Johnson",
      submissions: {
        total: 28,
        submitted: 10,
        graded: 5
      }
    },
    {
      id: 2,
      title: "Essay: Character Analysis in Macbeth",
      subject: "English Literature",
      topic: "Shakespeare",
      dueDate: "Apr 18, 2023",
      dueTime: "11:59 PM",
      status: "Active",
      submissionType: "document",
      teacher: "Mr. Michael Williams",
      submissions: {
        total: 26,
        submitted: 8,
        graded: 3
      }
    },
    {
      id: 3,
      title: "Chemical Reactions Lab Report",
      subject: "Chemistry",
      topic: "Chemical Reactions",
      dueDate: "Apr 20, 2023",
      dueTime: "11:59 PM",
      status: "Scheduled",
      submissionType: "file",
      teacher: "Ms. Emily Chen",
      submissions: {
        total: 30,
        submitted: 0,
        graded: 0
      }
    },
    {
      id: 4,
      title: "Introduction to Physics Quiz",
      subject: "Physics",
      topic: "Basics of Motion",
      dueDate: "Mar 25, 2023",
      status: "Completed",
      submissionType: "online",
      teacher: "Dr. Robert Lee",
      submissions: {
        total: 28,
        submitted: 28,
        graded: 28
      }
    }
  ];
  
  const teacherOptions = [
    { id: 1, name: "Dr. Sarah Johnson", subject: "Mathematics" },
    { id: 2, name: "Mr. Michael Williams", subject: "English Literature" },
    { id: 3, name: "Ms. Emily Chen", subject: "Chemistry" },
    { id: 4, name: "Dr. Robert Lee", subject: "Physics" }
  ];
  
  const classOptions = [
    { id: 1, name: "Class 8A", students: 30 },
    { id: 2, name: "Class 9B", students: 28 },
    { id: 3, name: "Class 10C", students: 26 },
    { id: 4, name: "Class 11A", students: 24 }
  ];
  
  const handleAddAssignment = () => {
    toast({
      title: "Assignment Created",
      description: "The new assignment has been created and scheduled."
    });
    
    setIsAddingAssignment(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
            <p className="text-muted-foreground">
              Create and manage assignments for your students
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsAddingAssignment(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Assignment
            </Button>
          </div>
        </div>
        
        {isAddingAssignment ? (
          <Card>
            <CardHeader>
              <CardTitle>Create New Assignment</CardTitle>
              <CardDescription>
                Set up an assignment for your students
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="assignment-title" className="text-sm font-medium">Title</label>
                <Input id="assignment-title" placeholder="Assignment title..." />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="assignment-subject" className="text-sm font-medium">Subject</label>
                  <select 
                    id="assignment-subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select subject...</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English Literature</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="assignment-topic" className="text-sm font-medium">Topic</label>
                  <Input id="assignment-topic" placeholder="Specific topic..." />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="assignment-class" className="text-sm font-medium">Class</label>
                  <select 
                    id="assignment-class"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select class...</option>
                    {classOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name} ({option.students} students)
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="assignment-teacher" className="text-sm font-medium">Teacher</label>
                  <select 
                    id="assignment-teacher"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select teacher...</option>
                    {teacherOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name} ({option.subject})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label htmlFor="assignment-due-date" className="text-sm font-medium">Due Date</label>
                  <Input id="assignment-due-date" type="date" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="assignment-due-time" className="text-sm font-medium">Due Time</label>
                  <Input id="assignment-due-time" type="time" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="assignment-type" className="text-sm font-medium">Submission Type</label>
                  <select 
                    id="assignment-type"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="file">File Upload</option>
                    <option value="document">Document</option>
                    <option value="online">Online Quiz</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="assignment-description" className="text-sm font-medium">Description & Instructions</label>
                <Textarea 
                  id="assignment-description" 
                  placeholder="Provide detailed instructions for the assignment..." 
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload Assignment Files</label>
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <FileUp className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-2 text-sm font-medium">Drag files here or click to upload</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Upload assignment instructions, worksheets, or resources.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    <Upload className="mr-2 h-4 w-4" />
                    Select Files
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={() => setIsAddingAssignment(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddAssignment}>
                Create Assignment
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search assignments..." 
                  className="pl-8" 
                />
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="english">English Literature</option>
                <option value="science">Science</option>
                <option value="history">History</option>
              </select>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            
            <Tabs defaultValue="all">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="all">All Assignments</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6 space-y-4">
                {assignments.map((assignment) => (
                  <Card key={assignment.id}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle>{assignment.title}</CardTitle>
                          <CardDescription>
                            {assignment.subject} • {assignment.topic}
                          </CardDescription>
                        </div>
                        <Badge 
                          className={`w-fit ${
                            assignment.status === "Active" 
                              ? "bg-green-500" 
                              : assignment.status === "Scheduled"
                                ? "bg-amber-500"
                                : "bg-blue-500"
                          }`}
                        >
                          {assignment.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Due: {assignment.dueDate}</span>
                          </div>
                          {assignment.dueTime && (
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Time: {assignment.dueTime}</span>
                            </div>
                          )}
                          <div className="flex items-center">
                            <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Submission: {assignment.submissionType}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Teacher: {assignment.teacher}</span>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg border p-4">
                            <h4 className="font-medium">Submission Status</h4>
                            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
                              <div>
                                <div className="font-medium">{assignment.submissions.total}</div>
                                <div className="text-xs text-muted-foreground">Total</div>
                              </div>
                              <div>
                                <div className="font-medium">{assignment.submissions.submitted}</div>
                                <div className="text-xs text-muted-foreground">Submitted</div>
                              </div>
                              <div>
                                <div className="font-medium">{assignment.submissions.graded}</div>
                                <div className="text-xs text-muted-foreground">Graded</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <div className="flex w-full flex-wrap gap-2">
                        <Button className="flex-1">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          View Submissions
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <FileText className="mr-2 h-4 w-4" />
                          Edit Assignment
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <BarChart className="mr-2 h-4 w-4" />
                          Analytics
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="active" className="mt-6 space-y-4">
                {assignments
                  .filter(assignment => assignment.status === "Active")
                  .map((assignment) => (
                    <Card key={assignment.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{assignment.title}</CardTitle>
                            <CardDescription>
                              {assignment.subject} • {assignment.topic}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-green-500">
                            {assignment.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Due: {assignment.dueDate}</span>
                            </div>
                            {assignment.dueTime && (
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span>Time: {assignment.dueTime}</span>
                              </div>
                            )}
                            <div className="flex items-center">
                              <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Submission: {assignment.submissionType}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Teacher: {assignment.teacher}</span>
                            </div>
                          </div>
                          <div>
                            <div className="rounded-lg border p-4">
                              <h4 className="font-medium">Submission Status</h4>
                              <div className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
                                <div>
                                  <div className="font-medium">{assignment.submissions.total}</div>
                                  <div className="text-xs text-muted-foreground">Total</div>
                                </div>
                                <div>
                                  <div className="font-medium">{assignment.submissions.submitted}</div>
                                  <div className="text-xs text-muted-foreground">Submitted</div>
                                </div>
                                <div>
                                  <div className="font-medium">{assignment.submissions.graded}</div>
                                  <div className="text-xs text-muted-foreground">Graded</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button className="flex-1">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            View Submissions
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <FileText className="mr-2 h-4 w-4" />
                            Edit Assignment
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <BarChart className="mr-2 h-4 w-4" />
                            Analytics
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </TabsContent>
              
              <TabsContent value="scheduled" className="mt-6 space-y-4">
                {assignments
                  .filter(assignment => assignment.status === "Scheduled")
                  .map((assignment) => (
                    <Card key={assignment.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{assignment.title}</CardTitle>
                            <CardDescription>
                              {assignment.subject} • {assignment.topic}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-amber-500">
                            {assignment.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Due: {assignment.dueDate}</span>
                            </div>
                            {assignment.dueTime && (
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span>Time: {assignment.dueTime}</span>
                              </div>
                            )}
                            <div className="flex items-center">
                              <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Submission: {assignment.submissionType}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Teacher: {assignment.teacher}</span>
                            </div>
                          </div>
                          <div>
                            <div className="rounded-lg border p-4">
                              <h4 className="font-medium">Assignment Status</h4>
                              <p className="mt-2 text-sm text-muted-foreground">
                                This assignment is scheduled to be released to students soon.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button className="flex-1">
                            <FileText className="mr-2 h-4 w-4" />
                            Edit Assignment
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Publish Now
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </TabsContent>
              
              <TabsContent value="completed" className="mt-6 space-y-4">
                {assignments
                  .filter(assignment => assignment.status === "Completed")
                  .map((assignment) => (
                    <Card key={assignment.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{assignment.title}</CardTitle>
                            <CardDescription>
                              {assignment.subject} • {assignment.topic}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-blue-500">
                            {assignment.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Due: {assignment.dueDate}</span>
                            </div>
                            <div className="flex items-center">
                              <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Submission: {assignment.submissionType}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Teacher: {assignment.teacher}</span>
                            </div>
                          </div>
                          <div>
                            <div className="rounded-lg border p-4">
                              <h4 className="font-medium">Submission Status</h4>
                              <div className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
                                <div>
                                  <div className="font-medium">{assignment.submissions.total}</div>
                                  <div className="text-xs text-muted-foreground">Total</div>
                                </div>
                                <div>
                                  <div className="font-medium">{assignment.submissions.submitted}</div>
                                  <div className="text-xs text-muted-foreground">Submitted</div>
                                </div>
                                <div>
                                  <div className="font-medium">{assignment.submissions.graded}</div>
                                  <div className="text-xs text-muted-foreground">Graded</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button className="flex-1">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            View Results
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <BarChart className="mr-2 h-4 w-4" />
                            Analytics
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

export default SchoolAssignments;
