import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Terminal, Play } from "lucide-react";

export const CodingTerminal = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    try {
      // In a real application, this would send the code to a backend
      // For demo purposes, we'll just evaluate it safely
      setOutput("Running code...\n");
      toast.success("Code executed successfully!");
    } catch (error) {
      setOutput(`Error: ${error}`);
      toast.error("Error executing code");
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-4 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Terminal className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Coding Terminal</h2>
        </div>
        <Button onClick={handleRun} className="flex items-center space-x-2">
          <Play className="w-4 h-4" />
          <span>Run Code</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Code Editor</label>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 font-mono text-sm p-4 bg-gray-50"
            placeholder="Write your code here..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Output</label>
          <div className="flex-1 font-mono text-sm p-4 bg-gray-900 text-white rounded-md overflow-auto">
            {output || "Output will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
};