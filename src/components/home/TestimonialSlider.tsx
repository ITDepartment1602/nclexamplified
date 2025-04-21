
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Testimonial images
const TESTIMONIALS = [
  {
    name: "Khareen Cate Danan",
    title: "RN, USRN",
    avatar: "/lovable-uploads/683fc1ea-0753-4ad1-b556-6c254032220f.png",
    comment: "To aspiring USRN's just keep the momentum high! lagi nyo iisipin ung sinabi ni sir JM, temporary sacrifice leads to permanent result, lahat tayo may struggles during our review hindi lahat smooth ang flow meron dyan may bagay or tao will put you down pero balik ka lagi sa WHY's mo. Pray to God, surrender nyo lahat sakanya ang worries nyo, I swear one day pag gising nyo everything will be okay. Aralin mabuti ang concept, sa qbank mas aralin and rationale mas madami kayong aral dun kaysa sa score lang, la charity sagutan po and read yung book na NCLEX success guide."
  },
  {
    name: "Louise Danielle Almazar",
    title: "RN, USRN",
    avatar: "/lovable-uploads/b29ef2de-330d-4b60-aae9-4b880b71636c.png",
    comment: "Special Mention to TEAM BISDAK, you guys really helped lalo na sa mga QandA nagpapractice tayo sa groupchat and nag didrills din sa GC minsan and most specially sa prayers ninyo sobrang thank you! To sis Marichel Gamban, gumaan talaga loob ko before the exam after you prayed over me, thank you so much sis. To my family, friends and prayer warriors, Thank you for all your prayers Most especially to God, St. Jude and my little angel up there for guiding me during the exam."
  },
  {
    name: "Carla Jean Garcia",
    title: "RN, USRN",
    avatar: "/lovable-uploads/2cac0865-6bbf-4199-9e16-594c63a5312b.png",
    comment: "The NCLEX journey will never be easy; there will be many ups and downs along the way. But nothing is impossible if you stay dedicated and focused on your goal, especially when you are studying with ",
    highlight: "NCLEX Amplified",
    after: ", this review center approach is very holistic, it will not only hound your concepts but also your values and life's perspective.  I will be eternally grateful to this team for making my impossible dream a reality."
  }
];

const splitAmplified = (str?: string) => {
  if (!str) return null;
  const parts = str.split("NCLEX Amplified");
  return (
    <span>
      <span className="font-bold text-nclex-blue">NCLEX</span>
      <span className="font-bold text-nclex-red ml-1">Amplified</span>
    </span>
  );
};

const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-16 font-sans bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">
            What Our Students Say
          </h2>
          <div className="w-20 h-1 bg-nclex-blue mx-auto mb-4"></div>
        </div>
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {TESTIMONIALS.map((t, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <Card className="w-full max-w-xl bg-white border-blue-100 shadow-md">
                  <CardContent className="flex flex-col items-center p-8">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-32 h-32 rounded-xl object-cover mb-6 shadow-md border-4 border-nclex-blue"
                    />
                    <p className="text-base text-gray-800 italic mb-5 text-center">
                      {t.comment}
                      {t.highlight && (
                        <>
                          &nbsp;
                          <span className="font-bold">
                            <span className="text-nclex-blue">NCLEX</span>
                            <span className="text-nclex-red ml-1">Amplified</span>
                          </span>
                        </>
                      )}
                      {t.after}
                    </p>
                    <div className="text-center">
                      <span className="block font-semibold text-nclex-blue">{t.name}</span>
                      <span className="block text-gray-400">{t.title}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSlider;

