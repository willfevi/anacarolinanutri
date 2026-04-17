import { useEffect } from "react";
import HomePage from "./features/home/HomePage";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f1f3] via-[#f8f3f6] to-[#efe7ec] flex items-center justify-center py-10 px-4 font-[Inter] relative">
      <HomePage />
    </div>
  );
}
