
import React from "react";

const charityEvents = [
  {
    image: "/lovable-uploads/4dc5cd4e-19fb-45d7-9d8e-4a7812746aa6.png",
    title: "Little Angel Foundation Inc.",
    date: "(December 29, 2022)",
    text: "Our Christmas season kicked off with a visit to the Little Angel Foundation, where we distributed gifts and essentials to the children and residents, spreading joy and hope as we celebrated the spirit of giving."
  },
  {
    image: "/lovable-uploads/e5f25f15-719f-438b-bd62-9c5f00102568.png",
    title: "Jardin de Maria Foundation, Inc.",
    date: "(May 25, 2023)",
    text: "Bringing smiles to the children and volunteers at Jardin de Maria Foundation, our team provided support and companionship through shared activities and outreach efforts."
  },
  {
    image: "/lovable-uploads/19ee5267-0ef0-419e-87db-f3d3498031b6.png",
    title: "Balay Alima Foundation Inc.",
    date: "(July 29, 2023)",
    text: "We spent meaningful moments with the residents of Balay Alima, sharing meals and stories while extending care and medical support to the elderly community."
  },
  {
    image: "/lovable-uploads/59a9086e-c0e9-4e09-9df2-dfdb7f0ef038.png",
    title: "Bahay Aruga Cancer Patients Inc.",
    date: "(September 22, 2023)",
    text: "A day filled with compassion and encouragement for children and families at Bahay Aruga, where we provided assistance, gifts, and heartfelt prayers to those bravely facing their journey with cancer."
  },
  {
    image: "/lovable-uploads/8d78c976-f787-4fc9-9258-61824a42a619.png",
    title: "Dental Mission",
    date: "(October 15, 2023)",
    text: "Accessible dental care became a reality for a local community, thanks to our team’s collaboration with Doc Emmanuel B. Galendez and Attorney Rameses Maigue, making healthy smiles possible for more families."
  },
  {
    image: "/lovable-uploads/8d286dcf-3ffd-48ba-aab5-72681c072bf1.png",
    title: "Aeta Community",
    date: "(December 22, 2023)",
    text: "Our volunteers reached out to the Aeta Community to deliver holiday cheer and essential supplies, underscoring our commitment to inclusivity and empowerment."
  },
  {
    image: "/lovable-uploads/89fd2c48-14d1-4bfa-8847-64c4c183e3da.png",
    title: "Plant-a-tree programme",
    date: "(June 26, 2024)",
    text: "Promoting environmental stewardship, our Plant-a-Tree Programme engaged volunteers in planting trees to give back to nature and nurture a greener future."
  },
  {
    image: "/lovable-uploads/81e735c7-1645-49a5-9b22-16863db49faf.png",
    title: "Mother Teresa Spinelli’s Inc",
    date: "(November 24, 2024)",
    text: "Ending the year with gratitude, we spent time at Mother Teresa Spinelli’s, supporting children and families and renewing our dedication to compassionate service."
  },
];

const CharitySlider: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-white to-blue-50 font-sans">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Charity Activities</h2>
        <div className="w-20 h-1 bg-nclex-blue mx-auto mb-6"></div>
        <p className="text-gray-600">
          Our journey of giving back takes us to various foundations and communities, as our dedicated team and founders foster a spirit of hope and generosity across the country.
        </p>
      </div>
      <div className="space-y-20 max-w-5xl mx-auto">
        {charityEvents.map((event, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-xl border-2 border-blue-100 p-6 md:p-10`}
          >
            <div className="flex-1 mb-4 md:mb-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full max-w-md mx-auto rounded-xl object-cover shadow"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-nclex-blue mb-2" style={{ fontFamily:"Poppins, sans-serif" }}>{event.title}</h3>
              <div className="text-gray-700 font-medium mb-4">{event.date}</div>
              <p className="text-gray-700 text-base">{event.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CharitySlider;
