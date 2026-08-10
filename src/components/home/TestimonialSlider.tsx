import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mikaela Ligacion, CDRN",
    role: "Passed NCLEX 2025",
    company: "NCLEX Amplified",
    content: "A special thank you to NCLEX Amplified for providing comprehensive and effective review materials. Your resources were instrumental in my preparation, and I truly believe they played a significant role in my success.",
    rating: 5,
    avatar: "/lovable-uploads/10a61823-e49c-4e4b-8380-798b96419b48.png"
  },
  {
    id: 2,
    name: "Ruark Lim Ritardo, USRN",
    role: "Passed NCLEX 2025",
    company: "NCLEX Amplified",
    content: "I can't thank NCLEX Amplified Review Center enough for helping me pass the NCLEX! Their content was exactly what I needed - clear, focused, and incredibly effective.",
    rating: 5,
    avatar: "/lovable-uploads/43e3ca09-5df1-44b1-b654-26b2b96675ee.png"
  },
  {
    id: 3,
    name: "Krystle Kay L. Almoete, USRN",
    role: "Passed NCLEX 2025",
    company: "NCLEX Amplified",
    content: "I want to extend my heartfelt gratitude to NCLEX AMPLIFIED for being such an essential part of my NCLEX journey. Your comprehensive review sessions helped me gain the knowledge and test-taking strategies I needed.",
    rating: 5,
    avatar: "/lovable-uploads/ff8b5b12-0727-4776-bd9b-9a8566d45a00.png"
  }
];

const TestimonialSlider = () => {
  return (
    <AnimatedTestimonials
      title="What Our Students Say"
      subtitle="Hear from successful nurses who achieved their dreams with NCLEX Amplified's comprehensive review program."
      badgeText="Trusted by Nurses"
      testimonials={TESTIMONIALS}
      autoRotateInterval={6000}
    />
  );
};

export default TestimonialSlider;
