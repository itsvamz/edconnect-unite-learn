
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Calendar, BookOpen, Edit2, Trash2, FilePlus2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentNotes = () => {
  const { toast } = useToast();
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [noteSubject, setNoteSubject] = useState("Mathematics");
  
  const notes = [
    {
      id: 1,
      title: "Algebraic Equations",
      content: "Key points about solving linear and quadratic equations...",
      subject: "Mathematics",
      date: "Apr 2, 2023",
      tags: ["algebra", "equations"]
    },
    {
      id: 2,
      title: "Chemical Reactions Types",
      content: "Notes on synthesis, decomposition, and other reaction types...",
      subject: "Chemistry",
      date: "Apr 3, 2023",
      tags: ["reactions", "chemistry"]
    },
    {
      id: 3,
      title: "Shakespeare's Macbeth - Key Themes",
      content: "Analysis of major themes including ambition, guilt, and fate...",
      subject: "English Literature",
      date: "Apr 4, 2023",
      tags: ["shakespeare", "themes", "literature"]
    }
  ];
  
  const classes = ["Mathematics", "Chemistry", "Physics", "English Literature", "History"];
  
  const handleCreateNote = () => {
    if (!noteTitle.trim()) {
      toast({
        title: "Error",
        description: "Please enter a title for your note.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Note Created",
      description: "Your note has been successfully saved."
    });
    
    setIsCreatingNote(false);
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Class Notes</h1>
            <p className="text-muted-foreground">
              Create, organize and review your notes from classes
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsCreatingNote(true)}>
              <FilePlus2 className="mr-2 h-4 w-4" />
              New Note
            </Button>
          </div>
        </div>
        
        {isCreatingNote ? (
          <Card>
            <CardHeader>
              <CardTitle>Create New Note</CardTitle>
              <CardDescription>
                Record your thoughts, key points, and questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="note-title" className="text-sm font-medium">Title</label>
                <Input 
                  id="note-title" 
                  placeholder="Enter note title..." 
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="note-subject" className="text-sm font-medium">Subject</label>
                <select 
                  id="note-subject"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={noteSubject}
                  onChange={(e) => setNoteSubject(e.target.value)}
                >
                  {classes.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="note-content" className="text-sm font-medium">Content</label>
                <Textarea 
                  id="note-content" 
                  placeholder="Write your note here..." 
                  rows={8}
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="note-tags" className="text-sm font-medium">Tags (optional)</label>
                <Input id="note-tags" placeholder="Enter tags separated by commas..." />
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" onClick={() => setIsCreatingNote(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateNote}>
                Save Note
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search your notes..." 
                  className="pl-8" 
                />
              </div>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">All Subjects</option>
                {classes.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            
            <Tabs defaultValue="my-notes">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="my-notes">My Notes</TabsTrigger>
                <TabsTrigger value="shared">Shared Notes</TabsTrigger>
                <TabsTrigger value="class">Class Materials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="my-notes" className="mt-6 space-y-4">
                {notes.map((note) => (
                  <Card key={note.id}>
                    <CardHeader className="pb-3">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle>{note.title}</CardTitle>
                          <CardDescription>{note.subject}</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{note.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        {note.content}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {note.tags.map((tag, index) => (
                          <Badge variant="outline" key={index}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit2 className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Export
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="shared" className="mt-6">
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No Shared Notes Yet</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    You haven't shared notes with others or received shared notes.
                  </p>
                  <Button className="mt-4">
                    Share a Note
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="class" className="mt-6">
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Class Materials</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Teacher-provided notes and study materials will appear here.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Check Class Resources
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentNotes;
