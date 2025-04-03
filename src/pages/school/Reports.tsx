
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AreaChart, BarChart as ChartIcon, Download, Calendar, Users, ArrowUp, ArrowDown, BookOpen, Video, MessageSquare } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const SchoolReports = () => {
  // Sample data for charts
  const enrollmentData = [
    { name: 'Mathematics', students: 245, volunteers: 8 },
    { name: 'Science', students: 210, volunteers: 6 },
    { name: 'English', students: 180, volunteers: 5 },
    { name: 'History', students: 150, volunteers: 4 },
    { name: 'Computer Science', students: 120, volunteers: 3 },
  ];
  
  const attendanceData = [
    { month: 'Jan', attendance: 92 },
    { month: 'Feb', attendance: 94 },
    { month: 'Mar', attendance: 91 },
    { month: 'Apr', attendance: 95 },
    { month: 'May', attendance: 93 },
    { month: 'Jun', attendance: 90 },
  ];
  
  const performanceData = [
    { name: 'A', value: 20 },
    { name: 'B', value: 30 },
    { name: 'C', value: 25 },
    { name: 'D', value: 15 },
    { name: 'F', value: 10 },
  ];
  
  const COLORS = ['#22c55e', '#84cc16', '#eab308', '#f97316', '#ef4444'];
  
  const volunteersData = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      hours: 58,
      classes: 12,
      rating: 4.9,
      students: 245
    },
    {
      id: 2,
      name: "Mr. Michael Williams",
      subject: "English Literature",
      hours: 42,
      classes: 8,
      rating: 4.7,
      students: 180
    },
    {
      id: 3,
      name: "Ms. Emily Chen",
      subject: "Science",
      hours: 64,
      classes: 14,
      rating: 4.8,
      students: 210
    },
    {
      id: 4,
      name: "Dr. Robert Lee",
      subject: "Physics",
      hours: 36,
      classes: 7,
      rating: 4.6,
      students: 120
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Monitor school performance, volunteer engagement, and student progress
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">982</div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">4.3%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Volunteers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">26</div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">12.8%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Classes Conducted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">154</div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">8.2%</span>
                <span className="ml-1">from last quarter</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92.6%</div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                <span className="text-red-500">1.2%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Enrollment</CardTitle>
                  <CardDescription>
                    Students and volunteers per subject
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={enrollmentData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" orientation="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="students" fill="#8884d8" name="Students" />
                        <Bar yAxisId="right" dataKey="volunteers" fill="#82ca9d" name="Volunteers" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Attendance</CardTitle>
                  <CardDescription>
                    Average attendance percentage by month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={attendanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="month" />
                        <YAxis domain={[80, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="attendance" fill="#f97316" name="Attendance %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Student Performance</CardTitle>
                  <CardDescription>
                    Grade distribution across all subjects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={performanceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {performanceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest events and achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-orange-100 p-2">
                        <Video className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">New class videos uploaded</p>
                        <p className="text-sm text-muted-foreground">
                          12 new educational videos added to the Science curriculum.
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green-100 p-2">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">New volunteer onboarded</p>
                        <p className="text-sm text-muted-foreground">
                          Dr. James Wilson joined as a History volunteer.
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-2">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Curriculum updated</p>
                        <p className="text-sm text-muted-foreground">
                          Mathematics curriculum updated with new modules.
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-purple-100 p-2">
                        <MessageSquare className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Feedback collected</p>
                        <p className="text-sm text-muted-foreground">
                          42 students submitted feedback for English Literature classes.
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Downloadable Reports</CardTitle>
                  <CardDescription>
                    Generate detailed reports for your records
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Student Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">
                        Detailed analysis of student grades, attendance, and progress across subjects.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Volunteer Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">
                        Summary of volunteer hours, classes conducted, and student feedback.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Curriculum Effectiveness</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">
                        Evaluation of curriculum modules based on student outcomes and engagement.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="volunteers" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Volunteers</CardTitle>
                <CardDescription>
                  Volunteers with highest engagement and student satisfaction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-medium">Volunteer</th>
                        <th className="px-4 py-3 text-left font-medium">Subject</th>
                        <th className="px-4 py-3 text-center font-medium">Hours</th>
                        <th className="px-4 py-3 text-center font-medium">Classes</th>
                        <th className="px-4 py-3 text-center font-medium">Rating</th>
                        <th className="px-4 py-3 text-center font-medium">Students</th>
                        <th className="px-4 py-3 text-right font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteersData.map((volunteer) => (
                        <tr key={volunteer.id} className="border-b">
                          <td className="px-4 py-3">
                            <div className="font-medium">{volunteer.name}</div>
                          </td>
                          <td className="px-4 py-3">{volunteer.subject}</td>
                          <td className="px-4 py-3 text-center">{volunteer.hours}</td>
                          <td className="px-4 py-3 text-center">{volunteer.classes}</td>
                          <td className="px-4 py-3 text-center">{volunteer.rating}</td>
                          <td className="px-4 py-3 text-center">{volunteer.students}</td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">Details</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="ml-auto">
                  View All Volunteers
                </Button>
              </CardFooter>
            </Card>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Hours by Subject</CardTitle>
                  <CardDescription>
                    Distribution of volunteer teaching hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={enrollmentData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="volunteers" fill="#f97316" name="Volunteer Hours" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Satisfaction</CardTitle>
                  <CardDescription>
                    Feedback and ratings from volunteers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Overall Program Satisfaction</div>
                        <div className="text-sm font-medium">4.8/5.0</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "96%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">School Support</div>
                        <div className="text-sm font-medium">4.6/5.0</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Resources Provided</div>
                        <div className="text-sm font-medium">4.3/5.0</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "86%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Student Engagement</div>
                        <div className="text-sm font-medium">4.5/5.0</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Teaching Experience</div>
                        <div className="text-sm font-medium">4.9/5.0</div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Detailed Feedback
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="mt-6">
            <div className="text-center py-8">
              <AreaChart className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Student Performance Analytics</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Detailed student performance reporting will be displayed here.
              </p>
              <Button className="mt-4">
                <ChartIcon className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum" className="mt-6">
            <div className="text-center py-8">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">Curriculum Effectiveness</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Curriculum performance and effectiveness metrics will be displayed here.
              </p>
              <Button className="mt-4">
                <ChartIcon className="mr-2 h-4 w-4" />
                Analyze Curriculum
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SchoolReports;
