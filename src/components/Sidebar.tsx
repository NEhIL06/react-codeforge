import { Book, ChevronDown, File, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const topics = [
  {
    title: "Data Structures",
    items: ["Arrays", "Linked Lists", "Trees", "Graphs"],
  },
  {
    title: "Algorithms",
    items: ["Sorting", "Searching", "Dynamic Programming", "Greedy"],
  },
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "C++"],
  },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white overflow-y-auto animate-fade-in">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <Book className="w-5 h-5 text-geek-primary" />
          <h2 className="font-semibold">Learning Paths</h2>
        </div>

        <div className="space-y-2">
          {topics.map((topic) => (
            <Collapsible key={topic.title}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <Folder className="w-4 h-4" />
                    <span>{topic.title}</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4">
                {topic.items.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="w-full justify-start pl-6"
                  >
                    <File className="w-4 h-4 mr-2" />
                    {item}
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </aside>
  );
};