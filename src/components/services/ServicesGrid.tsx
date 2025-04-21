
import React from "react";

const services = [
  {
    image: "/lovable-uploads/b8392819-b4f7-433f-94fd-cbbc7c918404.png",
    title: <span><span className="text-nclex-red font-bold">Free Initial <span className="text-nclex-blue">NCLEX</span> Consultation</span></span>,
    description: (
      <>
        Once enrolled, jumpstart your review with a <span className="text-nclex-red font-bold">FREE Initial consultation</span> to make the most out of the program.
      </>
    )
  },
  {
    image: "/lovable-uploads/bad1ba00-d88c-4e53-a1f0-580e8e584503.png",
    title: <span className="text-nclex-blue font-bold">Unlimited <span className="text-nclex-red font-bold">NCLEX</span> Review</span>,
    description: (
      <>
        Enjoy your <span className="text-nclex-blue font-bold">unlimited Review until you PASS!</span> once you pass, your account will be discontinued as per terms and conditions.
      </>
    )
  },
  {
    image: "/lovable-uploads/7552db56-643b-4af2-9986-2fd2cf12d1a8.png",
    title: <span><span className="text-nclex-blue font-bold">Next Generation <span className="text-nclex-red font-bold">NCLEX</span> Ready</span></span>,
    description: (
      <>
        Edition 1, Edition 2, U-World, and Archer NGN Ready Question and Answer with Rationale are all available.
      </>
    )
  },
  {
    image: "/lovable-uploads/f509d17b-dd79-42bc-9319-d58dd4fef487.png",
    title: <span><span className="text-nclex-blue font-bold">Online <span className="text-nclex-red font-bold">Live Lecture</span> via Zoom</span></span>,
    description: (
      <>
        Once you've enrolled, we conduct live online lectures every day from 8 am to 12 am PHT through Zoom.
      </>
    )
  },
  {
    image: "/lovable-uploads/2da9a2ec-1456-4fb2-8430-9dc46cff9942.png",
    title: <span className="text-nclex-blue font-bold">Free <span className="text-nclex-red font-bold">Success Guide Books</span></span>,
    description: (
      <>
        Once you enrolled you get free Success Guide Books La Charity and Prio and Delegation.
      </>
    )
  },
  {
    image: "/lovable-uploads/9c822ddb-5e65-4c65-ab52-afcc43367284.png",
    title: <span><span className="text-nclex-red font-bold">24/7</span> <span className="text-nclex-blue font-bold">Access Recorded Video</span></span>,
    description: (
      <>
        You may watch recorded footage at any time by accessing our dashboard.
      </>
    )
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
};

export default ServicesGrid;
