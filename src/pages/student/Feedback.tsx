
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MessageSquare, Calendar, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentFeedback = () => {
  const { toast } = useToast();
  const [feedbackMessage, setFeedbackMessage] = useState("");
  
  const recentFeedback = [
    {
      id: 1,
      teacher: {
        name: "Dr. Sarah Johnson",
        avatar: "/placeholder.svg",
        subject: "Mathematics"
      },
      date: "Apr 3, 2023",
      message: "Great job on your algebra assignment! Your approach to solving the equations was very methodical. I particularly liked your clear step-by-step work. Keep it up!",
      assignment: "Algebra Problem Set #2"
    },
    {
      id: 2,
      teacher: {
        name: "Mr. Michael Williams",
        avatar: "/placeholder.svg",
        subject: "English Literature"
      },
      date: "Mar 28, 2023",
      message: "Your essay on Hamlet shows deep understanding of the characters' motivations. Your analysis of the themes was insightful, though you could develop your conclusion more thoroughly. Let's discuss this in our next class.",
      assignment: "Hamlet Character Analysis"
    }
  ];
  
  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg",
      subject: "Mathematics",
      lastMessage: "Apr 3, 2023"
    },
    {
      id: 2,
      name: "Mr. Michael Williams",
      avatar: "/placeholder.svg",
      subject: "English Literature",
      lastMessage: "Mar 28, 2023"
    },
    {
      id: 3,
      name: "Ms. Emily Chen",
      avatar: "/placeholder.svg",
      subject: "Science",
      lastMessage: "None"
    }
  ];
  
  const courses = [
    { id: 1, name: "Algebra II", teacher: "Dr. Sarah Johnson" },
    { id: 2, name: "English Literature", teacher: "Mr. Michael Williams" },
    { id: 3, name: "Physics", teacher: "Dr. Robert Lee" },
    { id: 4, name: "Chemistry", teacher: "Ms. Emily Chen" },
    { id: 5, name: "World History", teacher: "Mr. James Wilson" }
  ];
  
  const handleSendFeedback = () => {
    if (!feedbackMessage.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message before sending.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Feedback Sent",
      description: "Your message has been sent to the teacher."
    });
    
    setFeedbackMessage("");
  };
  
  const handleRateCourse = (courseId: number, rating: number) => {
    toast({
      title: "Thank You!",
      description: `You rated this course ${rating} stars.`
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
          <p className="text-muted-foreground">
            View feedback from teachers and provide your own input
          </p>
        </div>
        
        <Tabs defaultValue="received">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="received">Received Feedback</TabsTrigger>
            <TabsTrigger value="send">Send Feedback</TabsTrigger>
            <TabsTrigger value="rate">Rate Courses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="received" className="mt-6 space-y-4">
            {recentFeedback.map((feedback) => (
              <Card key={feedback.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={feedback.teacher.avatar} alt={feedback.teacher.name} />
                      <AvatarFallback>{feedback.teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{feedback.teacher.name}</CardTitle>
                      <CardDescription>
                        {feedback.teacher.subject} • {feedback.assignment}
                      </CardDescription>
                      <div className="mt-1 flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{feedback.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{feedback.message}</p>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="send" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Send Feedback to Teachers</CardTitle>
                <CardDescription>
                  Select a teacher and write your message
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="teacher-select" className="text-sm font-medium">Select Teacher</label>
                  <select 
                    id="teacher-select"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Choose a teacher...</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name} ({teacher.subject})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="feedback-type" className="text-sm font-medium">Feedback Type</label>
                  <select 
                    id="feedback-type"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="question">Question</option>
                    <option value="comment">Comment</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="concern">Concern</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="feedback-message" className="text-sm font-medium">Your Message</label>
                  <Textarea 
                    id="feedback-message" 
                    placeholder="Write your message here..." 
                    rows={5}
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="text-sm text-muted-foreground">
                  Your message will be sent privately to the selected teacher.
                </div>
                <Button onClick={handleSendFeedback}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-6">
              <h3 className="mb-4 font-medium">Recent Conversations</h3>
              {teachers.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="flex items-center justify-between rounded-lg border p-4 mb-2 hover:bg-muted/50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={teacher.avatar} alt={teacher.name} />
                      <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{teacher.name}</p>
                      <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {teacher.lastMessage !== "None" ? (
                      <>Last message: {teacher.lastMessage}</>
                    ) : (
                      <>No messages yet</>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rate" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rate Your Courses</CardTitle>
                <CardDescription>
                  Your feedback helps improve the learning experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-muted-foreground">Teacher: {course.teacher}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => handleRateCourse(course.id, rating)}
                            className="rounded-full p-1 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                            <Star className="h-5 w-5 text-muted-foreground hover:text-orange-500" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Your ratings are anonymous and help teachers improve their courses.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentFeedback;
