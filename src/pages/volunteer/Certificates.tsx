
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Clock, Download, Share2, School, BarChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const VolunteerCertificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Mathematics Teaching Excellence",
      issueDate: "March 15, 2023",
      school: "Westside High School",
      hours: 50,
      description: "Awarded for exceptional contributions to mathematics education and student success.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Science Education Contribution",
      issueDate: "February 10, 2023",
      school: "Central Middle School",
      hours: 35,
      description: "Recognition for innovative approaches to teaching science concepts.",
      image: "/placeholder.svg"
    }
  ];
  
  const upcomingCertificates = [
    {
      id: 3,
      title: "Literature & Composition Teaching",
      progress: 80,
      hoursCompleted: 40,
      hoursRequired: 50,
      school: "Eastwood Elementary",
      description: "Certificate for excellence in teaching literature and writing skills."
    },
    {
      id: 4,
      title: "History Education Specialist",
      progress: 60,
      hoursCompleted: 30,
      hoursRequired: 50,
      school: "Lakeside Academy",
      description: "Recognition for expertise in teaching historical concepts and critical thinking."
    }
  ];
  
  const volunteerStats = {
    totalHours: 155,
    schoolsHelped: 4,
    studentsReached: 237,
    classesCompleted: 22
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Certificates</h1>
            <p className="text-muted-foreground">
              View and download your teaching certificates
            </p>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{volunteerStats.totalHours}</div>
              <p className="text-xs text-muted-foreground">Teaching hours completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Schools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{volunteerStats.schoolsHelped}</div>
              <p className="text-xs text-muted-foreground">Schools supported</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{volunteerStats.studentsReached}</div>
              <p className="text-xs text-muted-foreground">Students impacted</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{volunteerStats.classesCompleted}</div>
              <p className="text-xs text-muted-foreground">Classes conducted</p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight">Earned Certificates</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <Card key={certificate.id} className="overflow-hidden">
              <div className="relative h-32 bg-gradient-to-r from-orange-500 to-amber-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{certificate.title}</CardTitle>
                    <CardDescription>
                      Issued on {certificate.issueDate} by {certificate.school}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{certificate.description}</p>
                <div className="mt-4 flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{certificate.hours} teaching hours</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight">In Progress</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {upcomingCertificates.map((certificate) => (
            <Card key={certificate.id}>
              <CardHeader>
                <CardTitle>{certificate.title}</CardTitle>
                <CardDescription>
                  {certificate.school}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{certificate.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{certificate.progress}%</span>
                  </div>
                  <Progress value={certificate.progress} className="h-2" />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      <Clock className="mr-1 inline h-3 w-3" />
                      {certificate.hoursCompleted} / {certificate.hoursRequired} hours
                    </span>
                    <span>{certificate.hoursRequired - certificate.hoursCompleted} hours remaining</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <BarChart className="mr-2 h-4 w-4" />
                  View Progress Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Additional Certifications</CardTitle>
            <CardDescription>
              Enhance your teaching credentials with these opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-medium">Digital Learning Specialist</h3>
                  <p className="text-sm text-muted-foreground">
                    Certification for expertise in digital teaching tools and online education.
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      60 hours required
                    </span>
                    <span className="flex items-center">
                      <School className="mr-1 h-4 w-4 text-muted-foreground" />
                      Any participating school
                    </span>
                  </div>
                </div>
                <Button>Apply Now</Button>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-medium">STEM Education Expert</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced certification for teaching science, technology, engineering, and mathematics.
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      80 hours required
                    </span>
                    <span className="flex items-center">
                      <School className="mr-1 h-4 w-4 text-muted-foreground" />
                      Westside High, Central Middle
                    </span>
                  </div>
                </div>
                <Button>Apply Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerCertificates;
