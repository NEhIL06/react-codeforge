import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Terminal, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const CodingTerminal = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // Sample question data - in a real app, this would come from an API
  const sampleQuestion = {
    title: "Two Sum",
    difficulty: "Easy",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      }
    ]
  };

  const handleRun = () => {
    try {
      setOutput("Running code...\n");
      // In a real application, this would send the code to a backend
      toast.success("Code executed successfully!");
    } catch (error) {
      setOutput(`Error: ${error}`);
      toast.error("Error executing code");
    }
  };

  return (
    <div className="w-full h-full flex flex-col space-y-4 p-6">
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold">{sampleQuestion.title}</CardTitle>
              <span className="text-sm text-green-600 font-medium">{sampleQuestion.difficulty}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700">{sampleQuestion.description}</p>
            <div className="mt-4">
              <h4 className="font-semibold text-sm">Example:</h4>
              <div className="bg-gray-50 p-3 rounded-md mt-2 space-y-2">
                <p className="font-mono text-sm">Input: {sampleQuestion.examples[0].input}</p>
                <p className="font-mono text-sm">Output: {sampleQuestion.examples[0].output}</p>
                <p className="text-sm text-gray-600">Explanation: {sampleQuestion.examples[0].explanation}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Terminal className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Solution</h2>
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
            className="flex-1 font-mono text-sm p-4 bg-gray-50 min-h-[300px]"
            placeholder="Write your solution here..."
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Output</label>
          <div className="flex-1 font-mono text-sm p-4 bg-gray-900 text-white rounded-md overflow-auto min-h-[300px]">
            {output || "Output will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
};