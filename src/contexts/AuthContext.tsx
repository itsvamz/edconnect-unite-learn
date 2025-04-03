
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

// User types
export type UserRole = 'student' | 'volunteer' | 'school';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}

// Mock users for demonstration
const MOCK_USERS = [
  {
    id: 'student1',
    email: 'student@example.com',
    password: 'password123',
    name: 'Alex Student',
    role: 'student' as UserRole,
    profileImage: '/placeholder.svg',
  },
  {
    id: 'volunteer1',
    email: 'volunteer@example.com',
    password: 'password123',
    name: 'Taylor Volunteer',
    role: 'volunteer' as UserRole,
    profileImage: '/placeholder.svg',
  },
  {
    id: 'school1',
    email: 'school@example.com',
    password: 'password123',
    name: 'Westside School',
    role: 'school' as UserRole,
    profileImage: '/placeholder.svg',
  },
];

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('edconnect-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function - in a real app, this would connect to a backend
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = MOCK_USERS.find(
        user => user.email === email && user.password === password
      );
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('edconnect-user', JSON.stringify(userWithoutPassword));
      
      toast({
        title: 'Login successful',
        description: `Welcome back, ${foundUser.name}!`,
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'Something went wrong',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function - in a real app, this would connect to a backend
  const register = async (name: string, email: string, password: string, role: UserRole) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const existingUser = MOCK_USERS.find(user => user.email === email);
      if (existingUser) {
        throw new Error('Email already registered');
      }
      
      // In a real app, we would save this to a database
      const newUser = {
        id: `user${Date.now()}`,
        name,
        email,
        role,
        profileImage: '/placeholder.svg',
      };
      
      setUser(newUser);
      localStorage.setItem('edconnect-user', JSON.stringify(newUser));
      
      toast({
        title: 'Registration successful',
        description: `Welcome to EdConnect, ${name}!`,
      });
    } catch (error) {
      toast({
        title: 'Registration failed',
        description: error instanceof Error ? error.message : 'Something went wrong',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('edconnect-user');
    setUser(null);
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  const value = {
    user, 
    loading, 
    login, 
    register, 
    logout, 
    isAuthenticated: !!user 
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
