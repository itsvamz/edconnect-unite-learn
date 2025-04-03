
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, Users, BookOpen, Briefcase, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock volunteer applications
const volunteerApplications = [
  {
    id: '1',
    name: 'Dr. Michael Chen',
    expertise: 'Physics, Mathematics',
    appliedDate: 'March 30, 2025',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    expertise: 'English Literature, Creative Writing',
    appliedDate: 'March 31, 2025',
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Robert Taylor',
    expertise: 'Computer Science, Web Development',
    appliedDate: 'April 1, 2025',
    image: '/placeholder.svg',
  },
];

// Mock active jobs
const activeJobs = [
  {
    id: '1',
    title: 'Physics Teacher',
    applications: 12,
    posted: 'March 25, 2025',
    status: 'Active',
  },
  {
    id: '2',
    title: 'Creative Writing Workshop Instructor',
    applications: 8,
    posted: 'March 27, 2025',
    status: 'Active',
  },
  {
    id: '3',
    title: 'Web Development Mentor',
    applications: 15,
    posted: 'March 28, 2025',
    status: 'Active',
  },
];

const SchoolDashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h1>
            <p className="text-muted-foreground">
              Manage your school's curriculum and volunteer programs.
            </p>
          </div>
          <Button asChild>
            <Link to="/school/jobs">
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Volunteers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                Currently active volunteers
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Open volunteer positions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Scheduled in the next 7 days
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Curriculum Topics</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                Topics currently published
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Volunteer Applications</CardTitle>
              <CardDescription>
                Volunteers who recently applied to your jobs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {volunteerApplications.map((application) => (
                  <div key={application.id} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={application.image} />
                      <AvatarFallback>{application.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">{application.name}</h4>
                      <p className="text-muted-foreground text-sm">{application.expertise}</p>
                      <p className="text-muted-foreground text-xs">Applied: {application.appliedDate}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Link to="/school/volunteers" className="text-edconnect-orange hover:underline inline-flex items-center text-sm font-medium">
                  View all applications <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Active Job Postings</CardTitle>
              <CardDescription>
                Your currently active volunteer positions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="h-10 w-10 rounded-full bg-edconnect-orange/10 flex items-center justify-center text-edconnect-orange">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{job.title}</h4>
                      <p className="text-muted-foreground text-sm">{job.applications} applications • Posted: {job.posted}</p>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 mt-1">
                        {job.status}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/school/jobs">
                        Manage
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Link to="/school/jobs" className="text-edconnect-orange hover:underline inline-flex items-center text-sm font-medium">
                  Manage all jobs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks for managing your school's volunteer program.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                <Link to="/school/curriculum">
                  <BookOpen className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Upload Curriculum</span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                <Link to="/school/jobs">
                  <Briefcase className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Post New Job</span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center">
                <Link to="/school/volunteers">
                  <Users className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium">Manage Volunteers</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SchoolDashboard;
