import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the time complexity of QuickSort in average case?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Which data structure uses LIFO principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: 1,
  },
];

export const MCQTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    if (selectedAnswer === sampleQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Wrong answer!");
    }

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      toast.success(`Test completed! Score: ${score + 1}/${sampleQuestions.length}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">MCQ Test</h2>
        <span className="text-sm font-medium">
          Question {currentQuestion + 1} of {sampleQuestions.length}
        </span>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
        <h3 className="text-lg font-medium">
          {sampleQuestions[currentQuestion].question}
        </h3>

        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => setSelectedAnswer(parseInt(value))}
          className="space-y-3"
        >
          {sampleQuestions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50"
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <label
                htmlFor={`option-${index}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {option}
              </label>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleSubmit}
          className="w-full mt-4"
          size="lg"
        >
          {currentQuestion === sampleQuestions.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};