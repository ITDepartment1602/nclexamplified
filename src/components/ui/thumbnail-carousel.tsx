import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  calendarCycles,
  fetchCalendarCycles,
  type CalendarCycle,
} from "@/lib/calendarCycles";

const FULL_WIDTH_PX = 140;
const COLLAPSED_WIDTH_PX = 45;
const GAP_PX = 8;
const MARGIN_PX = 4;

interface ThumbnailsProps {
  items: CalendarCycle[];
  index: number;
  setIndex: (index: number) => void;
}

function Thumbnails({ items, index, setIndex }: ThumbnailsProps) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto no-scrollbar py-4 px-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        className="flex items-center gap-2 h-24"
        style={{ width: "fit-content" }}
      >
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                scale: 1.05,
                opacity: 1,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                scale: 1,
                opacity: 0.6,
              },
            }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative shrink-0 h-full overflow-hidden rounded-xl border-2 border-transparent hover:border-nclex-blue/30 transition-colors bg-slate-100 shadow-sm"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
            {i === index && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-1">
                <p className="text-[10px] text-white font-medium text-center truncate">
                  {item.title}
                </p>
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Carousel({ items }: { items: CalendarCycle[] }) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 260,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  const onPrev = () => setIndex((i) => Math.max(0, i - 1));
  const onNext = () => setIndex((i) => Math.min(items.length - 1, i + 1));

  // No cycle published yet
  if (items.length === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <div className="rounded-[1rem] border border-dashed border-slate-200 bg-slate-50/60 px-6 py-16 text-center">
          <p className="text-sm font-medium text-slate-400">
            Cycle schedules will be posted here soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col gap-6">
        {/* Main Carousel Wrapper */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-[1rem] bg-white shadow-xl shadow-blue-900/10 border border-slate-100">
            {/* Image area — nav overlay & badges are scoped to this, not the thumbnail strip below */}
            <div className="relative" ref={containerRef}>
              <motion.div
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={containerRef}
                dragElastic={0.15}
                dragMomentum={false}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => {
                  setIsDragging(false);
                  const containerWidth = containerRef.current?.offsetWidth || 1;
                  const offset = info.offset.x;
                  const velocity = info.velocity.x;

                  let newIndex = index;

                  if (Math.abs(velocity) > 500) {
                    newIndex = velocity > 0 ? index - 1 : index + 1;
                  } else if (Math.abs(offset) > containerWidth * 0.25) {
                    newIndex = offset > 0 ? index - 1 : index + 1;
                  }

                  newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
                  setIndex(newIndex);
                }}
                style={{ x }}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="shrink-0 w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[600px] md:p-5 lg:p-10"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-contain select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </motion.div>

              {/* Navigation Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 sm:px-8">
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: index === 0 ? 0 : 1, x: 0 }}
                  disabled={index === 0}
                  onClick={onPrev}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center text-[#3e53a0] hover:bg-[#3e53a0] hover:text-white transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: index === items.length - 1 ? 0 : 1, x: 0 }}
                  disabled={index === items.length - 1}
                  onClick={onNext}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center text-[#3e53a0] hover:bg-[#3e53a0] hover:text-white transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Image Counter & Title Badge */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex gap-3 pointer-events-none">
                <div className="bg-white/90 backdrop-blur text-nclex-blue px-4 py-2 rounded-2xl text-xs font-bold shadow-lg border border-slate-100 uppercase tracking-widest">
                  {index + 1} / {items.length}
                </div>
                <div className="hidden sm:block bg-nclex-blue text-white px-5 py-2 rounded-2xl text-xs font-semibold shadow-lg">
                  Cycle: {items[index].title}
                </div>
              </div>
            </div>

            <div className="px-2 lg:px-4">
              <Thumbnails items={items} index={index} setIndex={setIndex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Cycles come live from Manage Landing Page in the IT dashboard. Until they
 * load — or if the dashboard is unreachable — the images in `public/calendar`
 * are shown instead (see src/lib/calendarCycles.ts).
 */
export default function ThumbnailCarousel() {
  const { data } = useQuery({
    queryKey: ["landing-calendar"],
    queryFn: fetchCalendarCycles,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const isLive = data !== undefined;

  // Remount when the live list replaces the fallback so the carousel restarts at the first cycle.
  return <Carousel key={isLive ? "live" : "fallback"} items={isLive ? data : calendarCycles} />;
}
