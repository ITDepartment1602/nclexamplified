
import React from "react";

const services = [
  {
    image: "/lovable-uploads/b8392819-b4f7-433f-94fd-cbbc7c918404.png",
    title: <span><span className="text-nclex-red font-bold">Unlimited Review Until You Pass</span></span>,
    description: (
      <>
        No expiration, no limits — attend as many cycles as you need. Learn from top-performing USRN passers with proven experience.
      </>
    )
  },
  {
    image: "/lovable-uploads/bad1ba00-d88c-4e53-a1f0-580e8e584503.png",
    title: <span className="text-nclex-blue font-bold">Live, Interactive Zoom Classes</span>,
    description: (
      <>
        Real-time coaching & discussion of ALL NCLEX concepts. Regular updates aligned with <span className="text-nclex-blue font-bold">NCLEX Next Gen (NGN)</span> standards.
      </>
    )
  },
  {
    image: "/lovable-uploads/7552db56-643b-4af2-9986-2fd2cf12d1a8.png",
    title: <span><span className="text-nclex-blue font-bold">Amplified Dashboard</span></span>,
    description: (
      <>
        Our very own website! Missed a class? Watch recordings anytime. Study at your own pace, anywhere, anytime.
      </>
    )
  },
  {
    image: "/lovable-uploads/f509d17b-dd79-42bc-9319-d58dd4fef487.png",
    title: <span><span className="text-nclex-blue font-bold">Full NGN Question Bank</span></span>,
    description: (
      <>
        4,000+ practice questions with detailed rationales. Practice with trend-based NCLEX questions and understand the "why" behind each answer.
      </>
    )
  },
  {
    image: "/lovable-uploads/2da9a2ec-1456-4fb2-8430-9dc46cff9942.png",
    title: <span className="text-nclex-blue font-bold">Simulated Mock Exams</span>,
    description: (
      <>
        Adaptive style exams that train you under real-exam conditions. Includes quizzes, topic drills, and post-lecture mastery activities.
      </>
    )
  },
  {
    image: "/lovable-uploads/9c822ddb-5e65-4c65-ab52-afcc43367284.png",
    title: <span><span className="text-nclex-red font-bold">FREE</span> <span className="text-nclex-blue font-bold">Reviewer PDFs & Ebooks</span></span>,
    description: (
      <>
        Care for the NCLEX RN, Practice and Exercises (4th Edition), Linda A. LaCharity – Prioritization & Delegation, NCLEX Success Guide & more.
      </>
    )
  },
  {
    image: "/lovable-uploads/b8392819-b4f7-433f-94fd-cbbc7c918404.png",
    title: <span><span className="text-nclex-red font-bold">UWorld, Archer, Bootcamp-Style</span> <span className="text-nclex-blue font-bold">QBank Discussions</span></span>,
    description: (
      <>
        Live Zoom Q&A drills to sharpen test-taking skills. Answer breakdowns & rationales in real-time.
      </>
    )
  },
  {
    image: "/lovable-uploads/bad1ba00-d88c-4e53-a1f0-580e8e584503.png",
    title: <span><span className="text-nclex-blue font-bold">Motivational Support Community</span></span>,
    description: (
      <>
        Daily reminders, progress tracking, & peer encouragement. You'll never feel alone in your NCLEX journey.
      </>
    )
  },
  {
    image: "/lovable-uploads/7552db56-643b-4af2-9986-2fd2cf12d1a8.png",
    title: <span><span className="text-nclex-red font-bold">"Amplified Way"</span> <span className="text-nclex-blue font-bold">Study Cycle</span></span>,
    description: (
      <>
        50+ lectures per cycle, 20 NCLEX drills, 4-hour full-length mock exams with rationales. Program Duration: 1 Cycle = 4 Months.
      </>
    )
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 bg-white flex flex-col">
              <div className="w-full h-56 overflow-hidden">
                <img src={service.image} alt="" className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Studium CAT Section */}
        <div className="mt-16 bg-gradient-to-r from-nclex-blue to-nclex-red rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Studium CAT
          </h2>
          <p className="text-xl mb-2">Computer Adaptive Test</p>
          <p className="text-lg mb-6 opacity-90">
            Ace Your NCLEX with your all-in-one NCLEX prep, just like UWorld, Archer, and Bootcamp but designed to help you pass smarter!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold mb-1">Real NCLEX Simulation</h4>
              <p className="text-sm opacity-90">Computer-adaptive test that mirrors the actual exam</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-semibold mb-1">4,000+ Questions</h4>
              <p className="text-sm opacity-90">High-quality questions with detailed rationales</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-semibold mb-1">Track Progress</h4>
              <p className="text-sm opacity-90">Monitor scores and identify areas to improve</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-semibold mb-1">Review Anytime</h4>
              <p className="text-sm opacity-90">Go back to previous questions for deeper understanding</p>
            </div>
          </div>

          <a 
            href="https://home.studium.cat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-nclex-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Studium Today →
          </a>
          <p className="mt-4 text-sm opacity-90">Practice, review, and pass with confidence!</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
