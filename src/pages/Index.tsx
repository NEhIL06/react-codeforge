import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { CodeBlock } from "@/components/CodeBlock";

const sampleCode = `function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`;

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />
      <main className="ml-64 pt-16 min-h-screen animate-fade-in">
        <div className="container mx-auto px-8 py-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-geek-primary/10 text-geek-primary rounded-full text-sm font-medium mb-4">
              Algorithms
            </span>
            <h1 className="text-4xl font-bold mb-6">Bubble Sort Algorithm</h1>
            <p className="text-gray-600 mb-8">
              Learn how to implement the bubble sort algorithm in JavaScript. This sorting algorithm is an introductory sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed.
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
                <CodeBlock code={sampleCode} language="JavaScript" />
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Best Case:</span>
                      <code className="px-2 py-1 bg-gray-100 rounded">O(n)</code>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Average Case:</span>
                      <code className="px-2 py-1 bg-gray-100 rounded">O(n²)</code>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Worst Case:</span>
                      <code className="px-2 py-1 bg-gray-100 rounded">O(n²)</code>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;