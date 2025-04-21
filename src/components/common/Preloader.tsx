
import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "NCLEX Amplified";
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Text typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold mb-4 font-sans">
          <span className="text-nclex-blue">
            {text.substring(0, 5)}
          </span>
          <span className="text-nclex-red">
            {text.substring(5)}
          </span>
        </div>
        <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-nclex-blue rounded-full animate-[preloader_3s_ease-in-out]"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
