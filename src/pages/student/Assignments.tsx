
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Clock, Upload, CheckCircle, AlertCircle, FilePlus2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const StudentAssignments = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");
  
  const upcomingAssignments = [
    {
      id: 1,
      title: "Algebra Problem Set #3",
      subject: "Mathematics",
      topic: "Algebraic Equations",
      dueDate: "Apr 15, 2023",
      dueTime: "11:59 PM",
      status: "not-started",
      submissionType: "file",
      teacher: "Ms. Johnson"
    },
    {
      id: 2,
      title: "Essay: Character Analysis in Macbeth",
      subject: "English Literature",
      topic: "Shakespeare",
      dueDate: "Apr 18, 2023",
      dueTime: "11:59 PM",
      status: "in-progress",
      progress: 60,
      submissionType: "document",
      teacher: "Mr. Williams"
    },
    {
      id: 3,
      title: "Chemical Reactions Lab Report",
      subject: "Chemistry",
      topic: "Chemical Reactions",
      dueDate: "Apr 20, 2023",
      dueTime: "11:59 PM",
      status: "not-started",
      submissionType: "file",
      teacher: "Dr. Martinez"
    }
  ];
  
  const completedAssignments = [
    {
      id: 4,
      title: "Introduction to Physics Quiz",
      subject: "Physics",
      topic: "Basics of Motion",
      dueDate: "Mar 25, 2023",
      submittedDate: "Mar 24, 2023",
      status: "completed",
      grade: "95%",
      feedback: "Excellent work on the force calculations!",
      teacher: "Dr. Lee"
    },
    {
      id: 5,
      title: "World War II Timeline",
      subject: "History",
      topic: "World War II",
      dueDate: "Mar 20, 2023",
      submittedDate: "Mar 19, 2023",
      status: "completed",
      grade: "88%",
      feedback: "Good work, but add more details on European events.",
      teacher: "Mr. Wilson"
    }
  ];
  
  const lateAssignments = [
    {
      id: 6,
      title: "Spanish Vocabulary Quiz",
      subject: "Spanish",
      topic: "Basic Vocabulary",
      dueDate: "Mar 15, 2023",
      status: "late",
      teacher: "Mrs. Rodriguez"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
            <p className="text-muted-foreground">
              Track your assignments and submit your work
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              <FilePlus2 className="mr-2 h-4 w-4" />
              New Submission
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="upcoming" onValueChange={setSelectedTab} value={selectedTab}>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <TabsList className="w-full justify-start md:w-auto">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="late">Late</TabsTrigger>
            </TabsList>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <div className="mr-1.5 h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span>Late</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1.5 h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span>Due Soon</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1.5 h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span>Submitted</span>
                </div>
              </div>
            </div>
          </div>
          
          <TabsContent value="upcoming" className="mt-6 space-y-4">
            {upcomingAssignments.map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{assignment.title}</CardTitle>
                      <CardDescription>
                        {assignment.subject} • {assignment.topic}
                      </CardDescription>
                    </div>
                    <Badge 
                      className={`w-fit ${
                        assignment.status === "in-progress" 
                          ? "bg-amber-500" 
                          : "bg-blue-500"
                      }`}
                    >
                      {assignment.status === "in-progress" ? "In Progress" : "Not Started"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Due: {assignment.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Time: {assignment.dueTime}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Submission: {assignment.submissionType}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      {assignment.status === "in-progress" && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Progress</span>
                            <span className="text-sm font-medium">{assignment.progress}%</span>
                          </div>
                          <Progress value={assignment.progress} className="h-2 w-full" />
                        </div>
                      )}
                      <div className="mt-4 text-sm">
                        <span>Assigned by: {assignment.teacher}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button className="flex-1">
                    {assignment.status === "in-progress" ? "Continue" : "Start"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6 space-y-4">
            {completedAssignments.map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{assignment.title}</CardTitle>
                      <CardDescription>
                        {assignment.subject} • {assignment.topic}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500">Completed</Badge>
                      <span className="text-lg font-bold">{assignment.grade}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Due: {assignment.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span>Submitted: {assignment.submittedDate}</span>
                      </div>
                      <div className="mt-2 text-sm">
                        <span>Assigned by: {assignment.teacher}</span>
                      </div>
                    </div>
                    <div>
                      <div className="rounded-lg border p-3">
                        <h4 className="font-medium">Feedback</h4>
                        <p className="text-sm text-muted-foreground">
                          {assignment.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Button variant="outline" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    View Submission
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="late" className="mt-6 space-y-4">
            {lateAssignments.length > 0 ? (
              lateAssignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardHeader className="pb-3">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{assignment.title}</CardTitle>
                        <CardDescription>
                          {assignment.subject} • {assignment.topic}
                        </CardDescription>
                      </div>
                      <Badge className="w-fit bg-red-500">Late</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Due: {assignment.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <AlertCircle className="mr-2 h-4 w-4 text-red-500" />
                        <span>Status: Overdue</span>
                      </div>
                      <div className="mt-2 text-sm">
                        <span>Assigned by: {assignment.teacher}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    <Button className="flex-1">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <FileText className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                <h3 className="mt-4 text-lg font-medium">No Late Assignments</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Great job! You don't have any overdue assignments.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentAssignments;
