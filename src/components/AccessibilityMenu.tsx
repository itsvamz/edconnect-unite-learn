
import React, { useState } from "react";
import { 
  Bot, 
  Globe, 
  MessageSquare, 
  Settings, 
  Volume2, 
  X, 
  ZoomIn 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger 
} from "@/components/ui/drawer"; 
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMediaQuery } from "@/hooks/use-mobile";

interface AccessibilityMenuProps {
  className?: string;
}

export function AccessibilityMenu({ className }: AccessibilityMenuProps) {
  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const isMobile = useMediaQuery("(max-width: 640px)");

  const languages = ["English", "Spanish", "French", "German", "Chinese", "Arabic"];
  
  const handleFeatureOpen = (feature: string) => {
    setSelectedFeature(feature);
  };
  
  const handleFeatureClose = () => {
    setSelectedFeature(null);
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    if (!isLargeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
  };

  const toggleSpeech = () => {
    setIsSpeechEnabled(!isSpeechEnabled);
  };

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    // In a real app, you would update the application's language here
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90",
              className
            )}
          >
            <Settings className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Accessibility Options</DrawerTitle>
          </DrawerHeader>
          <div className="grid grid-cols-2 gap-4 p-4">
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={() => handleFeatureOpen("text-to-speech")}
            >
              <Volume2 className="h-6 w-6" />
              <span>Text to Speech</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={() => handleFeatureOpen("chatbot")}
            >
              <Bot className="h-6 w-6" />
              <span>Chatbot</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={() => handleFeatureOpen("language")}
            >
              <Globe className="h-6 w-6" />
              <span>Language</span>
            </Button>
            <Button 
              variant={isHighContrast ? "secondary" : "outline"}
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={toggleHighContrast}
            >
              <Settings className="h-6 w-6" />
              <span>High Contrast</span>
            </Button>
            <Button 
              variant={isLargeText ? "secondary" : "outline"}
              className="flex flex-col items-center justify-center gap-2 p-4 col-span-2"
              onClick={toggleLargeText}
            >
              <ZoomIn className="h-6 w-6" />
              <span>Large Text</span>
            </Button>
          </div>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <Settings className="h-6 w-6" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[300px] sm:w-[400px] p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>Accessibility Options</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-2 gap-4 p-4">
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={() => handleFeatureOpen("text-to-speech")}
            >
              <Volume2 className="h-6 w-6" />
              <span>Text to Speech</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={() => handleFeatureOpen("chatbot")}
            >
              <Bot className="h-6 w-6" />
              <span>Chatbot</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={() => handleFeatureOpen("language")}
            >
              <Globe className="h-6 w-6" />
              <span>Language</span>
            </Button>
            <Button 
              variant={isHighContrast ? "secondary" : "outline"}
              className="flex flex-col items-center justify-center gap-2 p-4"
              onClick={toggleHighContrast}
            >
              <Settings className="h-6 w-6" />
              <span>High Contrast</span>
            </Button>
            <Button 
              variant={isLargeText ? "secondary" : "outline"}
              className="flex flex-col items-center justify-center gap-2 p-4 col-span-2"
              onClick={toggleLargeText}
            >
              <ZoomIn className="h-6 w-6" />
              <span>Large Text</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Text to Speech Dialog */}
      <Dialog open={selectedFeature === "text-to-speech"} onOpenChange={handleFeatureClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Text to Speech</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <span>Enable Text to Speech</span>
              <Button 
                variant={isSpeechEnabled ? "default" : "outline"}
                onClick={toggleSpeech}
              >
                {isSpeechEnabled ? "Enabled" : "Disabled"}
              </Button>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Test Text to Speech:</p>
              <div className="flex gap-2">
                <Button onClick={() => speakText("Welcome to EdConnect - Unite and Learn")} disabled={!isSpeechEnabled}>
                  Test Speech
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              When enabled, you can select any text on the page and use the context menu to have it read aloud.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Language Dialog */}
      <Dialog open={selectedFeature === "language"} onOpenChange={handleFeatureClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Language Settings</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-2 py-4">
            {languages.map((language) => (
              <Button
                key={language}
                variant={currentLanguage === language ? "default" : "outline"}
                className="justify-start"
                onClick={() => changeLanguage(language)}
              >
                {language}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Current language: {currentLanguage}
          </p>
        </DialogContent>
      </Dialog>

      {/* Chatbot Dialog */}
      <Dialog open={selectedFeature === "chatbot"} onOpenChange={handleFeatureClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>EdConnect Assistant</DialogTitle>
          </DialogHeader>
          <Chatbot />
        </DialogContent>
      </Dialog>
    </>
  );
}
