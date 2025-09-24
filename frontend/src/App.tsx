import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400 text-black">
      <h1 className="text-3xl font-bold mb-4">
        Personal Finance Tracker
      </h1>

      <p className="mb-6 text-lg">
        Tailwind + Vite + React + TypeScript is working 🎉
      </p>

      <button
        className="px-6 py-2 rounded-2xl bg-green-600 text-blue-200 font-medium shadow-md hover:bg-green-300 transition"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default App;

