
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

// Mock upcoming classes
const upcomingClasses = [
  {
    id: '1',
    title: 'Introduction to Programming',
    date: 'Today, 2:00 PM',
    school: 'Lincoln High School',
    students: 24
  },
  {
    id: '2',
    title: 'Web Development Basics',
    date: 'Tomorrow, 10:00 AM',
    school: 'Washington Middle School',
    students: 18
  },
  {
    id: '3',
    title: 'Advanced Algorithms',
    date: 'April 5, 3:30 PM',
    school: 'Jefferson Academy',
    students: 15
  }
];

// Mock schools
const schools = [
  {
    id: '1',
    name: 'Lincoln High School',
    location: 'Chicago, IL',
    subjects: ['Computer Science', 'Mathematics'],
    logo: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Washington Middle School',
    location: 'Seattle, WA',
    subjects: ['Web Development', 'Digital Arts'],
    logo: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Jefferson Academy',
    location: 'Boston, MA',
    subjects: ['Computer Science', 'Robotics'],
    logo: '/placeholder.svg'
  }
];

const VolunteerDashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h1>
            <p className="text-muted-foreground">
              Manage your volunteer teaching activities and track your impact.
            </p>
          </div>
          <Button asChild>
            <Link to="/events">Find More Opportunities</Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32.5</div>
              <p className="text-xs text-muted-foreground">
                Volunteer hours this year
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes Taught</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Classes taught this semester
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students Impacted</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">
                Students reached through your classes
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                Certificates earned for volunteering
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Upcoming Classes</CardTitle>
              <CardDescription>
                Classes you're scheduled to teach.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="h-12 w-12 rounded-md flex items-center justify-center edconnect-gradient text-white font-semibold">
                      {cls.school.substring(0, 2)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{cls.title}</h4>
                      <p className="text-muted-foreground text-sm">{cls.date} • {cls.school}</p>
                      <p className="text-muted-foreground text-sm">{cls.students} students enrolled</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/volunteer/classes">
                        Prepare
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Link to="/volunteer/classes" className="text-edconnect-orange hover:underline inline-flex items-center text-sm font-medium">
                  View all classes <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Your Schools</CardTitle>
              <CardDescription>
                Schools you're currently supporting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schools.map((school) => (
                  <div key={school.id} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="h-12 w-12 rounded-md flex items-center justify-center bg-background border">
                      <img src={school.logo} alt={school.name} className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{school.name}</h4>
                      <p className="text-muted-foreground text-sm">{school.location}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {school.subjects.map((subject, idx) => (
                          <span key={idx} className="bg-edconnect-beige text-xs px-2 py-0.5 rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Link to="/schools" className="text-edconnect-orange hover:underline inline-flex items-center text-sm font-medium">
                  Find more schools <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Impact Progress</CardTitle>
            <CardDescription>
              Track your volunteer impact goals for this year.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Teaching Hours</span>
                  <span className="text-sm">32.5/50 hours</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Students Reached</span>
                  <span className="text-sm">142/200 students</span>
                </div>
                <Progress value={71} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Schools Supported</span>
                  <span className="text-sm">3/5 schools</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerDashboard;
