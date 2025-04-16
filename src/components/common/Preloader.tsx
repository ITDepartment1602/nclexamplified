
import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-purple-800 mb-4 font-serif">NCLEX Amplified</div>
        <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-purple-700 rounded-full animate-[preloader_1.5s_ease-in-out]"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
