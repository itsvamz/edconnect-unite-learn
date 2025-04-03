
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send, Paperclip, Users, FileText, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const VolunteerMessaging = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState(1);
  
  const contacts = [
    {
      id: 1,
      name: "Sarah Wilson",
      role: "Student",
      avatar: "/placeholder.svg",
      school: "Westside High School",
      lastMessage: "Can you explain question 3 from the homework?",
      time: "10:30 AM",
      unread: 2
    },
    {
      id: 2,
      name: "James Thompson",
      role: "Student",
      avatar: "/placeholder.svg",
      school: "Westside High School",
      lastMessage: "Thanks for the help yesterday!",
      time: "Yesterday",
      unread: 0
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      role: "School Admin",
      avatar: "/placeholder.svg",
      school: "Westside High School",
      lastMessage: "Can we schedule a call to discuss the curriculum?",
      time: "Yesterday",
      unread: 0
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      role: "Student",
      avatar: "/placeholder.svg",
      school: "Central Middle School",
      lastMessage: "I'm having trouble with the algebra homework.",
      time: "Monday",
      unread: 0
    },
    {
      id: 5,
      name: "Advanced Math Group",
      role: "Group",
      avatar: "/placeholder.svg",
      members: 24,
      lastMessage: "Ms. Johnson: Remember to submit your projects by Friday!",
      time: "Tuesday",
      unread: 0
    }
  ];
  
  const messages = [
    {
      id: 1,
      sender: "Sarah Wilson",
      text: "Hi, I'm having trouble understanding the quadratic formula. Could you help me?",
      time: "10:15 AM",
      isUser: false
    },
    {
      id: 2,
      sender: "You",
      text: "Of course! The quadratic formula is used to solve equations in the form ax² + bx + c = 0. The formula is x = (-b ± √(b² - 4ac)) / 2a.",
      time: "10:20 AM",
      isUser: true
    },
    {
      id: 3,
      sender: "Sarah Wilson",
      text: "Thank you, but I'm still confused about how to use it. Can you explain question 3 from the homework?",
      time: "10:30 AM",
      isUser: false
    }
  ];
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your message has been delivered."
    });
    
    setMessage("");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messaging</h1>
          <p className="text-muted-foreground">
            Communicate with students and school administrators
          </p>
        </div>
        
        <div className="grid h-[75vh] grid-cols-1 gap-4 md:grid-cols-3">
          {/* Contacts sidebar */}
          <Card className="md:col-span-1">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <Button variant="ghost" size="icon">
                  <Users className="h-5 w-5" />
                </Button>
              </div>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search messages..." 
                  className="pl-8" 
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[calc(75vh-8rem)] overflow-auto">
                {contacts.map((contact) => (
                  <div 
                    key={contact.id}
                    className={`flex cursor-pointer items-center gap-3 border-b p-4 transition-colors hover:bg-muted/50 ${
                      activeChat === contact.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setActiveChat(contact.id)}
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={contact.avatar} alt={contact.name} />
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-muted-foreground">{contact.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Badge variant="outline" className="font-normal">
                          {contact.role}
                        </Badge>
                        {contact.role === "Group" ? (
                          <span className="text-xs text-muted-foreground">
                            {contact.members} members
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {contact.school}
                          </span>
                        )}
                      </div>
                      <p className="truncate text-sm text-muted-foreground">
                        {contact.lastMessage}
                      </p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Chat area */}
          <Card className="flex flex-col md:col-span-2">
            <CardHeader className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={contacts[0].avatar} alt={contacts[0].name} />
                    <AvatarFallback>{contacts[0].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{contacts[0].name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-normal">
                        {contacts[0].role}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {contacts[0].school}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-4" style={{ maxHeight: "calc(75vh - 14rem)" }}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isUser 
                        ? "bg-orange-500 text-white" 
                        : "bg-muted"
                    }`}>
                      {!msg.isUser && (
                        <div className="mb-1 font-medium">{msg.sender}</div>
                      )}
                      <p>{msg.text}</p>
                      <div className={`mt-1 text-right text-xs ${
                        msg.isUser ? "text-orange-100" : "text-muted-foreground"
                      }`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input 
                  placeholder="Type your message..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerMessaging;
