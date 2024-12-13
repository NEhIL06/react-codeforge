import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MCQTest } from "@/components/MCQTest";
import { CodingTerminal } from "@/components/CodingTerminal";
import { Button } from "@/components/ui/button";
import { Code, CheckSquare } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"mcq" | "coding">("mcq");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />
      <main className="ml-64 pt-16 min-h-screen animate-fade-in">
        <div className="container mx-auto p-6">
          <div className="flex space-x-4 mb-6">
            <Button
              variant={activeTab === "mcq" ? "default" : "outline"}
              onClick={() => setActiveTab("mcq")}
              className="flex items-center space-x-2"
            >
              <CheckSquare className="w-4 h-4" />
              <span>MCQ Test</span>
            </Button>
            <Button
              variant={activeTab === "coding" ? "default" : "outline"}
              onClick={() => setActiveTab("coding")}
              className="flex items-center space-x-2"
            >
              <Code className="w-4 h-4" />
              <span>Coding Terminal</span>
            </Button>
          </div>

          {activeTab === "mcq" ? <MCQTest /> : <CodingTerminal />}
        </div>
      </main>
    </div>
  );
};

export default Index;