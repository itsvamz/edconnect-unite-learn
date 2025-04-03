
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Public Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Schools from "./pages/Schools";
import Volunteers from "./pages/Volunteers";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

// Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentClasses from "./pages/student/Classes";
import StudentCurriculum from "./pages/student/Curriculum";
import StudentVideos from "./pages/student/Videos";
import StudentAssignments from "./pages/student/Assignments";
import StudentNotes from "./pages/student/Notes";
import StudentFeedback from "./pages/student/Feedback";

// Volunteer Pages
import VolunteerDashboard from "./pages/volunteer/Dashboard";
import VolunteerClasses from "./pages/volunteer/Classes";
import VolunteerCurriculum from "./pages/volunteer/Curriculum";
import VolunteerCertificates from "./pages/volunteer/Certificates";
import VolunteerMessaging from "./pages/volunteer/Messaging";

// School Pages
import SchoolDashboard from "./pages/school/Dashboard";
import SchoolCurriculum from "./pages/school/Curriculum";
import SchoolAssignments from "./pages/school/Assignments";
import SchoolReports from "./pages/school/Reports";
import SchoolVolunteers from "./pages/school/Volunteers";
import SchoolJobs from "./pages/school/Jobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schools" element={<Schools />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={
              <ProtectedRoute allowedRoles={['student', 'volunteer', 'school']}>
                <Profile />
              </ProtectedRoute>
            } />
            
            {/* Student Routes */}
            <Route 
              path="/student/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/classes" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentClasses />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/curriculum" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentCurriculum />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/videos" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentVideos />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/assignments" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentAssignments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/notes" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentNotes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student/feedback" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentFeedback />
                </ProtectedRoute>
              } 
            />
            
            {/* Volunteer Routes */}
            <Route 
              path="/volunteer/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['volunteer']}>
                  <VolunteerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/volunteer/classes" 
              element={
                <ProtectedRoute allowedRoles={['volunteer']}>
                  <VolunteerClasses />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/volunteer/curriculum" 
              element={
                <ProtectedRoute allowedRoles={['volunteer']}>
                  <VolunteerCurriculum />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/volunteer/certificates" 
              element={
                <ProtectedRoute allowedRoles={['volunteer']}>
                  <VolunteerCertificates />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/volunteer/messaging" 
              element={
                <ProtectedRoute allowedRoles={['volunteer']}>
                  <VolunteerMessaging />
                </ProtectedRoute>
              } 
            />
            
            {/* School Routes */}
            <Route 
              path="/school/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['school']}>
                  <SchoolDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/school/curriculum" 
              element={
                <ProtectedRoute allowedRoles={['school']}>
                  <SchoolCurriculum />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/school/assignments" 
              element={
                <ProtectedRoute allowedRoles={['school']}>
                  <SchoolAssignments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/school/reports" 
              element={
                <ProtectedRoute allowedRoles={['school']}>
                  <SchoolReports />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/school/volunteers" 
              element={
                <ProtectedRoute allowedRoles={['school']}>
                  <SchoolVolunteers />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/school/jobs" 
              element={
                <ProtectedRoute allowedRoles={['school']}>
                  <SchoolJobs />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
