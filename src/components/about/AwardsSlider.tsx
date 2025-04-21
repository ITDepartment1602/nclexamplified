import React, { useRef, useEffect } from 'react';

interface AwardImage {
  src: string;
  alt: string;
}

const AwardsSlider: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const awardsImages: AwardImage[] = [
    { src: "/lovable-uploads/a.jpg", alt: "Award 1" },
    { src: "/lovable-uploads/b.jpg", alt: "Award 2" },
    { src: "/lovable-uploads/c.jpg", alt: "Award 3" },
    { src: "/lovable-uploads/d.jpg", alt: "Award 4" },
    { src: "/lovable-uploads/e.jpg", alt: "Award 5" },
    { src: "/lovable-uploads/f.jpg", alt: "Award 6" },
    { src: "/lovable-uploads/g.jpg", alt: "Award 7" },
    { src: "/lovable-uploads/h.jpg", alt: "Award 8" },
    { src: "/lovable-uploads/i.jpg", alt: "Award 9" },
    { src: "/lovable-uploads/j.jpg", alt: "Award 10" },
    { src: "/lovable-uploads/k.jpg", alt: "Award 11" },
    { src: "/lovable-uploads/l.jpg", alt: "Award 12" },
    { src: "/lovable-uploads/m.jpg", alt: "Award 13" },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let scrollInterval: NodeJS.Timeout;

    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      const scrollImages = () => {
        currentIndex = (currentIndex + 1) % awardsImages.length;
        imageContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      scrollInterval = setInterval(scrollImages, 2000); // Adjust speed as needed

      imageContainer.addEventListener("mouseover", () => clearInterval(scrollInterval));
      imageContainer.addEventListener("mouseout", () => scrollInterval = setInterval(scrollImages, 2000));

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Awarded for Global Nursing Review Excellence
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
        </div>
        <div ref={imageContainerRef} className="w-full overflow-hidden relative" style={{ display: 'flex' }}>
          {awardsImages.map((award, index) => (
            <div key={index} className="w-full" style={{ width: '100%' }}>
              <img src={award.src} alt={award.alt} className="w-full h-auto object-contain rounded-xl shadow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSlider;
