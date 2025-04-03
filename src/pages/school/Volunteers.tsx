
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, X, MoreHorizontal, Mail, Calendar, Clock, Star, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SchoolVolunteers = () => {
  const { toast } = useToast();
  
  const activeVolunteers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "/placeholder.svg",
      subject: "Mathematics",
      experience: "10+ years",
      availability: "Mon, Wed, Fri afternoons",
      rating: 4.9,
      classes: 12,
      status: "Active"
    },
    {
      id: 2,
      name: "Mr. Michael Williams",
      email: "michael.williams@example.com",
      avatar: "/placeholder.svg",
      subject: "English Literature",
      experience: "8 years",
      availability: "Tues, Thurs afternoons",
      rating: 4.7,
      classes: 8,
      status: "Active"
    },
    {
      id: 3,
      name: "Ms. Emily Chen",
      email: "emily.chen@example.com",
      avatar: "/placeholder.svg",
      subject: "Science",
      experience: "12 years",
      availability: "Mon-Fri afternoons",
      rating: 4.8,
      classes: 14,
      status: "Active"
    }
  ];
  
  const applicants = [
    {
      id: 4,
      name: "Dr. James Wilson",
      email: "james.wilson@example.com",
      avatar: "/placeholder.svg",
      subject: "History",
      experience: "15 years",
      availability: "Mon, Wed afternoons",
      status: "Pending",
      appliedDate: "Apr 2, 2023"
    },
    {
      id: 5,
      name: "Ms. Sophia Garcia",
      email: "sophia.garcia@example.com",
      avatar: "/placeholder.svg",
      subject: "Spanish",
      experience: "7 years",
      availability: "Tues, Thurs mornings",
      status: "Pending",
      appliedDate: "Apr 3, 2023"
    }
  ];
  
  const handleApprove = (id: number) => {
    toast({
      title: "Volunteer Approved",
      description: "The volunteer has been approved and will be notified.",
    });
  };
  
  const handleReject = (id: number) => {
    toast({
      title: "Application Rejected",
      description: "The volunteer application has been rejected.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Volunteers</h1>
            <p className="text-muted-foreground">
              Manage volunteer teachers and applications
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              Post Volunteer Opportunity
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search volunteers..." 
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
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        
        <Tabs defaultValue="active">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="active">Active Volunteers</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6 space-y-4">
            {activeVolunteers.map((volunteer) => (
              <Card key={volunteer.id}>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                        <AvatarFallback>{volunteer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{volunteer.name}</CardTitle>
                        <CardDescription>{volunteer.email}</CardDescription>
                      </div>
                    </div>
                    <Badge className="w-fit bg-green-500">{volunteer.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Subject: {volunteer.subject}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Experience: {volunteer.experience}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Availability: {volunteer.availability}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Rating: {volunteer.rating}/5.0</span>
                      </div>
                    </div>
                    <div>
                      <div className="rounded-lg border p-3">
                        <h4 className="font-medium">Classes</h4>
                        <div className="mt-1 text-sm">
                          <span>{volunteer.classes} classes completed</span>
                        </div>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="w-full">View Schedule</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex w-full justify-between">
                    <Button variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline">View Profile</Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="applications" className="mt-6 space-y-4">
            {applicants.map((applicant) => (
              <Card key={applicant.id}>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={applicant.avatar} alt={applicant.name} />
                        <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{applicant.name}</CardTitle>
                        <CardDescription>{applicant.email}</CardDescription>
                      </div>
                    </div>
                    <Badge className="w-fit bg-amber-500">{applicant.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Subject: {applicant.subject}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Experience: {applicant.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Availability: {applicant.availability}</span>
                      </div>
                    </div>
                    <div>
                      <div className="rounded-lg border p-3">
                        <h4 className="font-medium">Application Details</h4>
                        <div className="mt-1 text-sm">
                          <p>Applied on: {applicant.appliedDate}</p>
                          <p className="mt-1">Seeking to volunteer as a {applicant.subject} teacher.</p>
                        </div>
                        <div className="mt-2">
                          <Button variant="outline" size="sm" className="w-full">View Application</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex w-full justify-between">
                    <Button variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                    <div className="flex gap-2">
                      <Button onClick={() => handleApprove(applicant.id)}>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button variant="outline" onClick={() => handleReject(applicant.id)}>
                        <X className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="inactive" className="mt-6 text-center py-8">
            <div className="rounded-lg border border-dashed p-8">
              <X className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No Inactive Volunteers</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Currently, there are no inactive volunteers in the system.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SchoolVolunteers;
