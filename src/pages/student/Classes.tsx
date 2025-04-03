
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Video, FileText, MessageSquare, Clock, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentClasses = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const upcomingClasses = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      date: "Apr 5, 2023",
      time: "3:00 PM - 4:30 PM",
      teacher: "Ms. Johnson",
      subject: "Mathematics",
      type: "Live Class",
      description: "Covering equations, variables, and basic algebraic operations."
    },
    {
      id: 2,
      title: "Introduction to Chemical Reactions",
      date: "Apr 8, 2023",
      time: "2:00 PM - 3:30 PM",
      teacher: "Mr. Chen",
      subject: "Chemistry",
      type: "Live Class",
      description: "Understanding the basics of chemical reactions and equations."
    },
    {
      id: 3,
      title: "Shakespeare's Macbeth",
      date: "Apr 12, 2023",
      time: "1:00 PM - 2:30 PM",
      teacher: "Mrs. Patel",
      subject: "English Literature",
      type: "Discussion",
      description: "Analyzing themes and characters in Shakespeare's tragedy."
    }
  ];
  
  const previousClasses = [
    {
      id: 4,
      title: "Introduction to Physics",
      date: "Mar 28, 2023",
      time: "3:00 PM - 4:30 PM",
      teacher: "Dr. Martinez",
      subject: "Physics",
      type: "Recorded",
      description: "Fundamental concepts of motion and forces.",
      recording: true,
      notes: true,
      assignment: true
    },
    {
      id: 5,
      title: "World War II Overview",
      date: "Mar 25, 2023",
      time: "2:00 PM - 3:30 PM",
      teacher: "Mr. Wilson",
      subject: "History",
      type: "Recorded",
      description: "Key events and impact of World War II.",
      recording: true,
      notes: true,
      assignment: false
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
            <p className="text-muted-foreground">
              Manage your class schedule and access learning materials
            </p>
          </div>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>View Calendar</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            <Button>
              <Users className="mr-2 h-4 w-4" />
              My Teachers
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="upcoming">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
            <TabsTrigger value="previous">Previous Classes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-6 space-y-4">
            {upcomingClasses.map((classItem) => (
              <Card key={classItem.id}>
                <CardHeader>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle>{classItem.title}</CardTitle>
                      <CardDescription>{classItem.subject}</CardDescription>
                    </div>
                    <Badge className="w-fit bg-green-500">{classItem.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{classItem.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{classItem.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Teacher: {classItem.teacher}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">{classItem.description}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="w-full md:w-auto">
                    Join Class
                  </Button>
                  <Button variant="outline" className="w-full md:w-auto">
                    <FileText className="mr-2 h-4 w-4" />
                    Class Materials
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="previous" className="mt-6 space-y-4">
            {previousClasses.map((classItem) => (
              <Card key={classItem.id}>
                <CardHeader>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle>{classItem.title}</CardTitle>
                      <CardDescription>{classItem.subject}</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">{classItem.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{classItem.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{classItem.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Teacher: {classItem.teacher}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm">{classItem.description}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {classItem.recording && (
                    <Button variant="outline">
                      <Video className="mr-2 h-4 w-4" />
                      Watch Recording
                    </Button>
                  )}
                  {classItem.notes && (
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Class Notes
                    </Button>
                  )}
                  {classItem.assignment && (
                    <Button variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      View Assignment
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentClasses;
