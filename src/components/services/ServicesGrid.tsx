
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg border border-blue-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white flex flex-col group">
              <div className="w-full h-64 overflow-hidden">
                <img src={service.image} alt="" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold mb-3 leading-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Studium CAT Section */}
        <div className="mt-20 bg-studium-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Studium CAT
            </h2>
            <p className="text-xl md:text-2xl mb-4 font-medium">Computer Adaptive Test</p>
            <p className="text-lg md:text-xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Ace Your NCLEX with your all-in-one NCLEX prep, just like UWorld, Archer, and Bootcamp but designed to help you pass smarter!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-lg">Real NCLEX Simulation</h4>
                <p className="text-sm opacity-90 leading-relaxed">Computer-adaptive test that mirrors the actual exam</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-lg">4,000+ Questions</h4>
                <p className="text-sm opacity-90 leading-relaxed">High-quality questions with detailed rationales</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-lg">Track Progress</h4>
                <p className="text-sm opacity-90 leading-relaxed">Monitor scores and identify areas to improve</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 text-lg">Review Anytime</h4>
                <p className="text-sm opacity-90 leading-relaxed">Go back to previous questions for deeper understanding</p>
              </div>
            </div>

            <a 
              href="https://home.studium.cat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-studium-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover-studium-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Your Studium Today
            </a>
            <p className="mt-6 text-sm opacity-90">Practice, review, and pass with confidence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
