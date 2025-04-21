
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Demo testimonials. We'll use a random person's image for avatar.
 */
const TESTIMONIALS = [
  {
    name: "Khareen Cate Danan RN, USRN",
     avatar: "../../../public/lovable-uploads/khareen.jpg",
    comment: "To aspiring USRN's just keep the momentum high! lagi nyo iisipin ung sinabi ni sir JM, temporary sacrifice leads to permanent result, lahat tayo may struggles during our review hindi lahat smooth ang flow meron dyan may bagay or tao will put you down pero balik ka lagi sa WHY's mo. Pray to God, surrender nyo lahat sakanya ang worries nyo, I swear one day pag gising nyo everything will be okay. Aralin mabuti ang concept, sa qbank mas aralin and rationale mas madami kayong aral dun kaysa sa score lang, la charity sagutan po and read yung book na NCLEX success guide. "
  },
   {
    name: "Louise Danielle Almazar RN, USRN",
   avatar: "../../../public/lovable-uploads/louise.jpg",
    comment: "Special Mention to TEAM BISDAK, you guys really helped lalo na sa mga QandA nagpapractice tayo sa groupchat and nag didrills din sa GC minsan and most specially sa prayers ninyo sobrang thank you! To sis Marichel Gamban, gumaan talaga loob ko before the exam after you prayed over me, thank you so much sis. To my family, friends and prayer warriors, Thank you for all your prayers Most especially to God, St. Jude and my little angel up there for guiding me during the exam."
  },
  {
    name: "Carla Jean Garcia RN, USRN",
    avatar: "../../../public/lovable-uploads/carla.jpg",
    comment: "The NCLEX journey will never be easy; there will be many ups and downs along the way. But nothing is impossible if you stay dedicated and focused on your goal, especially when you are studying with NCLEX Amplified, this review center approach is very holistic, it will not only hound your concepts but also your values and life's perspective.  I will be eternally grateful to this team for making my impossible dream a reality."
  }
];

const TestimonialSlider: React.FC = () => {
  // Use simple slider for 2 demo testimonials
  return (
    <section className="py-16 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">What Our Students Say</h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="flex-1 max-w-md bg-white border-blue-100 shadow">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <img 
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100 shadow"
                  loading="lazy"
                />
                <p className="text-lg text-gray-800 italic mb-4">&quot;{t.comment}&quot;</p>
                <p className="font-semibold text-nclex-blue">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
