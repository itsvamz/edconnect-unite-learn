
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, BookOpen, FileCheck, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock upcoming classes
const upcomingClasses = [
  {
    id: '1',
    title: 'Advanced Physics',
    date: 'Today, 2:00 PM',
    teacher: 'Dr. Michael Chen',
    subject: 'Physics'
  },
  {
    id: '2',
    title: 'Creative Writing Workshop',
    date: 'Tomorrow, 10:00 AM',
    teacher: 'Ms. Sarah Johnson',
    subject: 'English'
  },
  {
    id: '3',
    title: 'Calculus Review',
    date: 'April 4, 3:30 PM',
    teacher: 'Mr. Robert Taylor',
    subject: 'Mathematics'
  }
];

// Mock recent assignments
const recentAssignments = [
  {
    id: '1',
    title: 'Physics Problem Set',
    dueDate: 'Due April 5',
    subject: 'Physics',
    status: 'Not started'
  },
  {
    id: '2',
    title: 'Essay: Modern Literature',
    dueDate: 'Due April 7',
    subject: 'English',
    status: 'In progress'
  },
  {
    id: '3',
    title: 'Calculus Practice Questions',
    dueDate: 'Due April 10',
    subject: 'Mathematics',
    status: 'Not started'
  }
];

const StudentDashboard = () => {
  const { user } = useAuth();
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your classes today.
            </p>
          </div>
          <Button asChild>
            <Link to="/student/classes">View All Classes</Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                3 classes in the next 7 days
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                5 courses currently active
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assignments Due</CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                3 due this week, 4 next week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Study Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5</div>
              <p className="text-xs text-muted-foreground">
                Hours this week (+2.5 from last week)
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Upcoming Classes</CardTitle>
              <CardDescription>
                Your upcoming scheduled classes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="h-12 w-12 rounded-md flex items-center justify-center edconnect-gradient text-white font-semibold">
                      {cls.subject.substring(0, 2)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{cls.title}</h4>
                      <p className="text-muted-foreground text-sm">{cls.date} • {cls.teacher}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/student/classes">
                        Join
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Link to="/student/classes" className="text-edconnect-orange hover:underline inline-flex items-center text-sm font-medium">
                  View all classes <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Assignments</CardTitle>
              <CardDescription>
                Assignments you need to complete.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAssignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <div className="h-12 w-12 rounded-md flex items-center justify-center beige-gradient text-foreground font-semibold">
                      {assignment.subject.substring(0, 2)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{assignment.title}</h4>
                      <p className="text-muted-foreground text-sm">{assignment.dueDate} • {assignment.status}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/student/assignments">
                        View
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Link to="/student/assignments" className="text-edconnect-orange hover:underline inline-flex items-center text-sm font-medium">
                  View all assignments <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
