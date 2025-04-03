
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, School, Heart, Target, Lightbulb } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former school principal with over 20 years in education, passionate about connecting schools with quality volunteer educators.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Tech industry veteran who left Silicon Valley to help build tools that improve educational opportunities for all students.",
      image: "/placeholder.svg"
    },
    {
      name: "Amara Patel",
      role: "Director of Volunteer Relations",
      bio: "Former teacher and volunteer coordinator who excels at matching skilled volunteers with the schools that need them most.",
      image: "/placeholder.svg"
    },
    {
      name: "James Wilson",
      role: "Educational Content Director",
      bio: "Curriculum developer and former professor dedicated to creating high-quality educational materials and training resources.",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Accessibility",
      description: "We believe quality education should be accessible to every student, regardless of their background or location."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster meaningful connections between schools, volunteers, and students to build stronger educational communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace innovative teaching methods and technologies to enhance the learning experience for all."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach education with empathy, understanding that each student has unique needs and learning styles."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-orange-50 py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Our Mission
                </h1>
                <p className="mt-4 text-lg">
                  At EdConnect, we're bridging the gap between schools and experienced volunteers to create meaningful educational experiences for students of all backgrounds.
                </p>
                <p className="mt-4">
                  We believe that by connecting schools with passionate volunteers, we can enhance curriculum delivery, expose students to diverse perspectives, and create a more equitable educational landscape.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button>Join Our Team</Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Students and volunteers in a classroom" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide our mission and work
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <value.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="mt-4 text-xl font-medium">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-orange-50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Our Impact</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Since our founding, we've made significant strides in connecting schools with quality volunteers
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mx-auto">
                  <School className="h-6 w-6 text-orange-500" />
                </div>
                <div className="mt-4 text-4xl font-bold">350+</div>
                <p className="mt-1 text-muted-foreground">Schools Partnered</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mx-auto">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <div className="mt-4 text-4xl font-bold">2,500+</div>
                <p className="mt-1 text-muted-foreground">Active Volunteers</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mx-auto">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <div className="mt-4 text-4xl font-bold">50,000+</div>
                <p className="mt-1 text-muted-foreground">Students Reached</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the dedicated professionals working to connect schools with volunteers
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">{member.name}</h3>
                  <p className="text-orange-500">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
