
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, SendIcon, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your EdConnect assistant. How can I help you today?",
    sender: "bot",
  },
];

const botResponses: Record<string, string> = {
  "hello": "Hi there! How can I assist you with EdConnect today?",
  "help": "I can help you navigate the platform, find classes, or connect with volunteers. What would you like to know?",
  "class": "We offer various classes across different subjects. You can browse them in the Classes section!",
  "volunteer": "Interested in volunteering? Great! Check out the Volunteer section to see how you can contribute.",
  "contact": "You can contact our support team at support@edconnect.com or through the Contact page.",
  "about": "EdConnect is a platform that connects students with volunteer teachers to provide quality education regardless of location or resources.",
};

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const generateResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    for (const keyword in botResponses) {
      if (lowerCaseMessage.includes(keyword)) {
        return botResponses[keyword];
      }
    }
    
    return "I'm not sure I understand. Could you try phrasing that differently? Or ask about classes, volunteering, or contact information.";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: generateResponse(input),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[400px]">
      <ScrollArea className="flex-1 p-4 border rounded-md mb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-2 max-w-[80%] ${
                  message.sender === "user"
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    message.sender === "user"
                      ? "bg-secondary"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSendMessage} disabled={!input.trim()}>
          <SendIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
