
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, School, BookOpen, Star, Award, Calendar, Video, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-edconnect-beige/50 to-edconnect-beige-light/30 z-0" />
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-[url('/placeholder.svg')] bg-no-repeat bg-cover opacity-20 z-0" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Connect, Volunteer,
              <span className="text-edconnect-orange block">Make an Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              EdConnect brings together schools and volunteers to create enriching educational 
              experiences for students across the country.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="px-6">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-6">
                <Link to="/schools">Find Schools</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">500+</p>
                <p className="text-sm text-muted-foreground">Schools</p>
              </div>
              <div className="h-10 border-r border-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">2,500+</p>
                <p className="text-sm text-muted-foreground">Volunteers</p>
              </div>
              <div className="h-10 border-r border-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-edconnect-orange">10,000+</p>
                <p className="text-sm text-muted-foreground">Students Helped</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-edconnect-beige-light/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How EdConnect Works</h2>
            <p className="text-lg text-foreground/80">
              Our platform makes it easy to connect schools with qualified volunteers to enhance the educational experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <School className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Schools</h3>
                <p className="text-foreground/80 mb-4">
                  Register your school, submit your curriculum needs, and connect with qualified volunteers.
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  Register as a School <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Volunteers</h3>
                <p className="text-foreground/80 mb-4">
                  Create your profile, browse opportunities, and share your expertise with students who need it.
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  Become a Volunteer <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-edconnect-orange/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-edconnect-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">For Students</h3>
                <p className="text-foreground/80 mb-4">
                  Access quality educational content, attend live sessions, and learn from experienced professionals.
                </p>
                <Link to="/register" className="text-edconnect-orange font-medium inline-flex items-center hover:underline">
                  Join as a Student <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-lg text-foreground/80">
              EdConnect offers a comprehensive set of tools to make educational volunteering seamless and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Calendar className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Class Scheduling</h3>
                <p className="text-sm text-foreground/80">
                  Intuitive calendar system for scheduling and managing live classes and sessions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Video className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Video Content</h3>
                <p className="text-sm text-foreground/80">
                  Upload and access recorded video lessons to supplement live teaching.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Volunteer Tracking</h3>
                <p className="text-sm text-foreground/80">
                  Track volunteer hours, contributions, and impact with detailed analytics.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-edconnect-orange mb-4" />
                <h3 className="text-lg font-semibold mb-2">Certificates</h3>
                <p className="text-sm text-foreground/80">
                  Generate certificates for volunteers to recognize their contributions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-edconnect-beige-light/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
            <p className="text-lg text-foreground/80">
              Read about the experiences of schools, volunteers, and students using EdConnect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="italic text-foreground/80 mb-4">
                  "As a school principal, EdConnect has revolutionized how we bring expert knowledge into our classrooms. 
                  Our students love learning from professionals in various fields."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Dr. Jane Davis</p>
                    <p className="text-sm text-muted-foreground">Principal, Lincoln High School</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="italic text-foreground/80 mb-4">
                  "Volunteering through EdConnect has been incredibly rewarding. The platform makes it easy to 
                  schedule sessions, and I love seeing the impact I'm making on students' education."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mark Smith</p>
                    <p className="text-sm text-muted-foreground">Software Engineer & Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="italic text-foreground/80 mb-4">
                  "Learning from real professionals has helped me understand what I want to do after graduation. 
                  The volunteer sessions are engaging and have made difficult subjects much easier to grasp."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-edconnect-orange/20 flex items-center justify-center mr-3">
                    <span className="font-semibold text-edconnect-orange">AT</span>
                  </div>
                  <div>
                    <p className="font-semibold">Aisha Thompson</p>
                    <p className="text-sm text-muted-foreground">Student, Grade 11</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-edconnect-orange to-edconnect-orange-light rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join our community of schools, volunteers, and students to create better educational experiences today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-edconnect-orange hover:bg-white/90">
                  <Link to="/register">Sign Up Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
