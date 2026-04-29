import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  {
    id: 1,
    url: '/lovable-uploads/January.jpg',
    title: 'January Cycle',
  },
  {
    id: 2,
    url: '/lovable-uploads/March.jpg',
    title: 'March Cycle',
  },
  {
    id: 3,
    url: '/lovable-uploads/April.jpg',
    title: 'April Cycle',
  },
  {
    id: 4,
    url: '/lovable-uploads/May.jpg',
    title: 'May Cycle',
  },
  {
    id: 5,
    url: '/lovable-uploads/June.jpg',
    title: 'June Cycle',
  },
  {
    id: 6,
    url: '/lovable-uploads/July.jpg',
    title: 'July Cycle',
  },
  {
    id: 7,
    url: '/lovable-uploads/August.jpg',
    title: 'August Cycle',
  },
];

const FULL_WIDTH_PX = 140;
const COLLAPSED_WIDTH_PX = 45;
const GAP_PX = 8;
const MARGIN_PX = 4;

interface ThumbnailsProps {
  index: number;
  setIndex: (index: number) => void;
}

function Thumbnails({ index, setIndex }: ThumbnailsProps) {
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
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className='overflow-x-auto no-scrollbar py-4 px-2'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className='flex items-center gap-2 h-24' style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
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
            className='relative shrink-0 h-full overflow-hidden rounded-xl border-2 border-transparent hover:border-[#3e53a0]/30 transition-colors bg-slate-100 shadow-sm'
          >
            <img
              src={item.url}
              alt={item.title}
              className='w-full h-full object-cover pointer-events-none select-none'
              draggable={false}
            />
            {i === index && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-1">
                    <p className="text-[10px] text-white font-medium text-center truncate">{item.title}</p>
                </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailCarousel() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 260,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  const onPrev = () => setIndex((i) => Math.max(0, i - 1));
  const onNext = () => setIndex((i) => Math.min(items.length - 1, i + 1));

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <div className='flex flex-col gap-6'>
        {/* Main Carousel Wrapper */}
        <div className='relative group'>
          <div className='relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-blue-900/10 border border-slate-100' ref={containerRef}>
            <motion.div
              className='flex cursor-grab active:cursor-grabbing'
              drag='x'
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
                }
                else if (Math.abs(offset) > containerWidth * 0.25) {
                  newIndex = offset > 0 ? index - 1 : index + 1;
                }

                newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
                setIndex(newIndex);
              }}
              style={{ x }}
            >
              {items.map((item) => (
                <div key={item.id} className='shrink-0 w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] max-h-[600px]'>
                  <img
                    src={item.url}
                    alt={item.title}
                    className='w-full h-full object-contain bg-slate-50 select-none pointer-events-none p-4 sm:p-8'
                    draggable={false}
                  />
                </div>
              ))}
            </motion.div>

            {/* Navigation Overlay */}
            <div className='absolute inset-0 pointer-events-none flex items-center justify-between px-4 sm:px-8'>
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
            <div className='absolute top-6 left-6 sm:top-8 sm:left-8 flex gap-3 pointer-events-none'>
                <div className='bg-white/90 backdrop-blur text-[#3e53a0] px-4 py-2 rounded-2xl text-xs font-bold shadow-lg border border-slate-100 uppercase tracking-widest'>
                   {index + 1} / {items.length}
                </div>
                <div className='hidden sm:block bg-[#3e53a0] text-white px-5 py-2 rounded-2xl text-xs font-semibold shadow-lg'>
                   Cycle: {items[index].title}
                </div>
            </div>
          </div>
        </div>

        {/* Thumbnails Section */}
        <div className="mt-2 bg-slate-50/50 rounded-3xl p-2 sm:p-4 border border-slate-100">
             <div className="px-4 pt-2">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Quick Navigation</p>
             </div>
             <Thumbnails index={index} setIndex={setIndex} />
        </div>
      </div>
    </div>
  );
}
