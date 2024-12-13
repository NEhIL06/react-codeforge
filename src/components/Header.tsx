import { Code, Book, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Code className="w-8 h-8 text-geek-primary" />
            <h1 className="text-xl font-semibold">GeeksCode</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <Book className="w-4 h-4" />
              <span>Tutorials</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Practice</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-geek-primary hover:bg-geek-hover">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};