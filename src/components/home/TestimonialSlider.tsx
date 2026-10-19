import { useQuery } from "@tanstack/react-query";
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials";

// Managed in the IT dashboard: nclex/admin-it/manage_testimonials
const TESTIMONIALS_API =
  import.meta.env.VITE_TESTIMONIALS_API ||
  "https://nclexamplifiedreviewcenter.com/nclex/admin-it/manage_testimonials/public_api.php";

const PLACEHOLDER_AVATAR = "/placeholder.svg";

// Shown until the live list loads, and whenever the dashboard API is unreachable.
const FALLBACK_TESTIMONIALS: Testimonial[] = [
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
  },
  {
    id: 4,
    name: "Maria Carmela",
    role: "Passed NCLEX",
    company: "NCLEX Amplified",
    content: "Thank you for helping me make this dream a reality!",
    rating: 5,
    avatar: PLACEHOLDER_AVATAR
  },
  {
    id: 5,
    name: "Joel Pineda",
    role: "Passed NCLEX",
    company: "NCLEX Amplified",
    content: "I came prepared with confidence... succeed. Amplified big help po talaga!",
    rating: 5,
    avatar: PLACEHOLDER_AVATAR
  }
];

interface ApiTestimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string | null;
}

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const res = await fetch(TESTIMONIALS_API, { cache: "no-store" });
  if (!res.ok) throw new Error(`Testimonials API responded ${res.status}`);
  const data: { testimonials?: ApiTestimonial[] } = await res.json();
  return (data.testimonials ?? []).map((t) => ({
    id: t.id,
    name: t.name,
    role: t.role,
    company: "NCLEX Amplified",
    content: t.content,
    rating: t.rating,
    avatar: t.avatar || PLACEHOLDER_AVATAR
  }));
};

const TestimonialSlider = () => {
  const { data } = useQuery({
    queryKey: ["landing-testimonials"],
    queryFn: fetchTestimonials,
    retry: 1,
    refetchOnWindowFocus: false
  });

  const isLive = !!data && data.length > 0;
  const testimonials = isLive ? data : FALLBACK_TESTIMONIALS;

  return (
    <AnimatedTestimonials
      // Remount when the live list replaces the fallback so the slider restarts at the first card.
      key={isLive ? "live" : "fallback"}
      title="What Our Students Say"
      subtitle="Hear from successful nurses who achieved their dreams with NCLEX Amplified's comprehensive review program."
      badgeText="Trusted by Nurses"
      testimonials={testimonials}
      autoRotateInterval={6000}
    />
  );
};

export default TestimonialSlider;
