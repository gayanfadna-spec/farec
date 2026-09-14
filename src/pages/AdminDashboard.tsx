import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Newspaper, FolderGit2, Users } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{name: string, email: string} | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (e) {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold font-serif">FAREC Admin Dashboard</h1>
          <div className="text-sm font-medium">Welcome, {user.name}</div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 md:px-8 py-12 flex-1">
        <h2 className="text-3xl font-serif font-bold mb-8">Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Publications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120</div>
              <p className="text-xs text-muted-foreground">+3 added this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FolderGit2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">2 completing soon</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">News Articles</CardTitle>
              <Newspaper className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">Last updated 2 days ago</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Inquiries</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">4 unread messages</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-background rounded-lg border p-8 text-center text-muted-foreground">
          <p>This MERN stack dashboard uses JWT authentication via the Express backend.</p>
        </div>
      </main>
    </div>
  );
}
