"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // 1. Advanced Height Calculation (Handles window resize & dynamic loading)
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(() => updateHeight());
    if (ref.current) resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  // 2. Scroll Logic with "Start/End" offsets tuned for visibility
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // 3. Physics-based Smoothing (The "Advanced" Feel)
  // Instead of 1:1 scroll mapping, this adds weight/inertia to the line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-line-dark font-sans md:px-10" ref={containerRef}>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-7xl mb-4 text-white max-w-4xl font-black uppercase tracking-tighter">
          Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Chapters</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-sm font-mono border-l-2 border-purple-500 pl-4">
          // DEPLOYING NETWORKS...{"\n"}
          Reviewing active nodes across the region.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* LEFT COLUMN: Sticky Date/Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              
              {/* The "Node" Dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <div className="h-4 w-4 rounded-full bg-purple-500 border border-purple-300 p-2 animate-pulse" />
              </div>

              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">
                  {item.date}
                </h3>
                <p className="text-purple-400 font-mono text-xs mt-2 uppercase tracking-widest">
                  {item.job}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Content Card */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile Title */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.date}
              </h3>
              
              {/* Tech Card Container */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Decorative Corner Markers */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                {item.contents.map((content, idx) => (
                  <div key={idx} className="flex gap-3 mb-3 last:mb-0 items-start">
                    <span className="text-purple-500 mt-1.5 text-xs">▹</span>
                    <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed">
                      {content}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}

        {/* BACKGROUND LINE (The Track) */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* FOREGROUND LINE (The Beam) */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_20px_#a855f7]"
          />
        </div>
      </div>
    </div>
  );
};