
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  Home,
  MessageSquare, 
  User, 
  FileCheck, 
  GraduationCap,
  Users,
  School,
  Briefcase,
  BarChart,
  Award,
  Video,
  Settings
} from 'lucide-react';

interface SidebarNavProps {
  className?: string;
}

const getLinksForUserRole = (role: string) => {
  if (role === 'student') {
    return [
      { href: '/student/dashboard', label: 'Dashboard', icon: Home },
      { href: '/student/classes', label: 'Classes', icon: Calendar },
      { href: '/student/curriculum', label: 'Curriculum', icon: BookOpen },
      { href: '/student/videos', label: 'Videos', icon: Video },
      { href: '/student/assignments', label: 'Assignments', icon: FileCheck },
      { href: '/student/notes', label: 'Class Notes', icon: FileText },
      { href: '/student/feedback', label: 'Feedback', icon: MessageSquare },
    ];
  } else if (role === 'volunteer') {
    return [
      { href: '/volunteer/dashboard', label: 'Dashboard', icon: Home },
      { href: '/volunteer/classes', label: 'My Classes', icon: Calendar },
      { href: '/volunteer/curriculum', label: 'Curriculum', icon: BookOpen },
      { href: '/volunteer/certificates', label: 'Certificates', icon: Award },
      { href: '/volunteer/messaging', label: 'Messaging', icon: MessageSquare },
    ];
  } else if (role === 'school') {
    return [
      { href: '/school/dashboard', label: 'Dashboard', icon: Home },
      { href: '/school/curriculum', label: 'Curriculum', icon: BookOpen },
      { href: '/school/assignments', label: 'Assignments', icon: FileCheck },
      { href: '/school/reports', label: 'Reports', icon: BarChart },
      { href: '/school/volunteers', label: 'Volunteers', icon: Users },
      { href: '/school/jobs', label: 'Jobs', icon: Briefcase },
    ];
  }
  
  return [];
};

export const SidebarNav = ({ className }: SidebarNavProps) => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  
  if (!user) return null;
  
  const links = getLinksForUserRole(user.role);
  
  const RoleIcon = user.role === 'student' 
    ? GraduationCap 
    : user.role === 'volunteer' 
      ? Users 
      : School;

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            <div className="flex items-center gap-2">
              <RoleIcon className="h-5 w-5 text-edconnect-orange" />
              <span className="capitalize">{user.role}</span>
            </div>
          </h2>
          <div className="space-y-1">
            {links.map((link) => (
              <Button
                key={link.href}
                variant={pathname === link.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === link.href && "bg-edconnect-beige"
                )}
                asChild
              >
                <Link to={link.href}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 py-8">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6">
            <SidebarNav />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
