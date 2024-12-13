import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-gray-200 bg-gray-50 font-code animate-fade-in">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <span className="text-sm text-gray-500">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyCode}
          className="text-gray-500 hover:text-gray-700"
        >
          <Copy className="w-4 h-4 mr-2" />
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
};