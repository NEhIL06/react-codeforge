import { Code, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white overflow-y-auto animate-fade-in">
      <div className="p-4">
        <div className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start"
          >
            <CheckSquare className="w-4 h-4 mr-2" />
            MCQ Test
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
          >
            <Code className="w-4 h-4 mr-2" />
            Coding Terminal
          </Button>
        </div>
      </div>
    </aside>
  );
};