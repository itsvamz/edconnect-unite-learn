
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, Plus, BookOpen, Users, Briefcase, Mail, CheckCircle, XCircle, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SchoolJobs = () => {
  const { toast } = useToast();
  const [isAddingJob, setIsAddingJob] = useState(false);
  
  const activeJobs = [
    {
      id: 1,
      title: "Mathematics Teacher",
      subject: "Mathematics",
      postedDate: "Apr 1, 2023",
      schedule: "Mon, Wed, Fri 2:00 PM - 3:30 PM",
      duration: "3 months",
      gradeLevel: "9-12",
      status: "Open",
      applications: 6,
      required: "Algebra, Calculus",
      description: "Looking for an experienced mathematics teacher to conduct lessons on algebra and calculus for high school students."
    },
    {
      id: 2,
      title: "English Literature Instructor",
      subject: "English Literature",
      postedDate: "Apr 3, 2023",
      schedule: "Tues, Thurs 1:00 PM - 2:30 PM",
      duration: "4 months",
      gradeLevel: "8-10",
      status: "Open",
      applications: 4,
      required: "Shakespeare, Poetry Analysis",
      description: "Seeking an English literature instructor to teach Shakespeare and poetry analysis to middle and high school students."
    }
  ];
  
  const filledJobs = [
    {
      id: 3,
      title: "Science Lab Assistant",
      subject: "Science",
      postedDate: "Mar 15, 2023",
      schedule: "Mon, Wed 3:00 PM - 4:30 PM",
      duration: "6 months",
      gradeLevel: "10-12",
      status: "Filled",
      filledBy: "Dr. Emily Chen",
      required: "Chemistry, Biology",
      description: "Needed a science lab assistant to help with chemistry and biology experiments for high school students."
    }
  ];
  
  const applications = [
    {
      id: 1,
      jobTitle: "Mathematics Teacher",
      applicant: {
        name: "Dr. Robert Lee",
        email: "robert.lee@example.com",
        avatar: "/placeholder.svg"
      },
      appliedDate: "Apr 2, 2023",
      experience: "12 years",
      status: "Under Review"
    },
    {
      id: 2,
      jobTitle: "Mathematics Teacher",
      applicant: {
        name: "Ms. Jennifer Smith",
        email: "jennifer.smith@example.com",
        avatar: "/placeholder.svg"
      },
      appliedDate: "Apr 2, 2023",
      experience: "8 years",
      status: "Under Review"
    },
    {
      id: 3,
      jobTitle: "English Literature Instructor",
      applicant: {
        name: "Mr. David Johnson",
        email: "david.johnson@example.com",
        avatar: "/placeholder.svg"
      },
      appliedDate: "Apr 4, 2023",
      experience: "10 years",
      status: "Under Review"
    }
  ];
  
  const handleAddJob = () => {
    toast({
      title: "Job Posted",
      description: "The volunteer position has been successfully posted.",
    });
    
    setIsAddingJob(false);
  };
  
  const handleApproveApplication = (id: number) => {
    toast({
      title: "Application Approved",
      description: "The volunteer has been selected for the position.",
    });
  };
  
  const handleRejectApplication = (id: number) => {
    toast({
      title: "Application Rejected",
      description: "The application has been rejected.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Jobs & Opportunities</h1>
            <p className="text-muted-foreground">
              Post and manage volunteer teaching positions
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsAddingJob(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          </div>
        </div>
        
        {isAddingJob ? (
          <Card>
            <CardHeader>
              <CardTitle>Post New Volunteer Position</CardTitle>
              <CardDescription>
                Create a new teaching opportunity for volunteers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="job-title" className="text-sm font-medium">Position Title</label>
                <Input id="job-title" placeholder="e.g., Mathematics Teacher, Science Instructor..." />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="job-subject" className="text-sm font-medium">Subject</label>
                  <select 
                    id="job-subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select subject...</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English Literature</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="computer">Computer Science</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="language">Foreign Languages</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="job-grade" className="text-sm font-medium">Grade Level</label>
                  <Input id="job-grade" placeholder="e.g., 6-8, 9-12" />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="job-schedule" className="text-sm font-medium">Schedule</label>
                  <Input id="job-schedule" placeholder="e.g., Mon, Wed, Fri 2:00 PM - 3:30 PM" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="job-duration" className="text-sm font-medium">Duration</label>
                  <Input id="job-duration" placeholder="e.g., 3 months, 1 semester" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="job-skills" className="text-sm font-medium">Required Skills/Knowledge</label>
                <Input id="job-skills" placeholder="e.g., Algebra, Calculus, Experience with high school students" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="job-description" className="text-sm font-medium">Description</label>
                <Textarea 
                  id="job-description" 
                  placeholder="Describe the position, responsibilities, and requirements..." 
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={() => setIsAddingJob(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddJob}>
                Post Position
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <Tabs defaultValue="positions">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="positions">Job Postings</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="positions" className="mt-6 space-y-6">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Search job postings..." 
                      className="pl-8" 
                    />
                  </div>
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">All Subjects</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                  </select>
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="filled">Filled</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight">Open Positions</h2>
                  {activeJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.subject} • Grade {job.gradeLevel}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-green-500">{job.status}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Posted: {job.postedDate}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Schedule: {job.schedule}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Duration: {job.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Required: {job.required}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{job.applications} applications received</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm">{job.description}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button className="flex-1">
                            <Eye className="mr-2 h-4 w-4" />
                            View Applications
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Mail className="mr-2 h-4 w-4" />
                            Message Applicants
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Edit Position
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-bold tracking-tight">Filled Positions</h2>
                  {filledJobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>
                              {job.subject} • Grade {job.gradeLevel}
                            </CardDescription>
                          </div>
                          <Badge className="w-fit bg-blue-500">{job.status}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Posted: {job.postedDate}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Schedule: {job.schedule}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Duration: {job.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Filled by: {job.filledBy}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm">{job.description}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex w-full flex-wrap gap-2">
                          <Button variant="outline" className="flex-1">
                            <Users className="mr-2 h-4 w-4" />
                            View Classes
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Volunteer
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="applications" className="mt-6 space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search applications..." 
                    className="pl-8 mb-4" 
                  />
                </div>
                
                {applications.map((application) => (
                  <Card key={application.id}>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                            <Briefcase className="h-6 w-6 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{application.jobTitle}</CardTitle>
                            <CardDescription>Applied on {application.appliedDate}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {application.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 overflow-hidden rounded-full">
                            <img 
                              src={application.applicant.avatar} 
                              alt={application.applicant.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{application.applicant.name}</p>
                            <p className="text-sm text-muted-foreground">{application.applicant.email}</p>
                          </div>
                        </div>
                        <div className="md:ml-auto flex items-center">
                          <div className="rounded-full border px-3 py-1 text-xs">
                            {application.experience} of teaching experience
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <div className="flex w-full flex-wrap gap-2">
                        <Button className="flex-1" onClick={() => handleApproveApplication(application.id)}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Approve
                        </Button>
                        <Button variant="outline" className="flex-1" onClick={() => handleRejectApplication(application.id)}>
                          <XCircle className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
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

export default SchoolJobs;
