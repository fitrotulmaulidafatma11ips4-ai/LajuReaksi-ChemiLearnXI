import React from 'react';
import { motion } from 'motion/react';

export const ComicText = ({ text, color = "text-yellow-400", className = "" }: any) => (
  <motion.div
    initial={{ scale: 0, rotate: Math.random() * 40 - 20, opacity: 1 }}
    animate={{ scale: [0, 1.2, 1], y: -60, opacity: [1, 1, 0] }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className={`absolute z-50 font-black text-4xl md:text-5xl uppercase tracking-tighter drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] ${color} ${className}`}
    style={{ WebkitTextStroke: '2px black', pointerEvents: 'none' }}
  >
    {text}
  </motion.div>
);

export const Erlenmeyer = ({ liquidColor, liquidLevel, bubbles = false, children, className = "" }: any) => (
  <div className={`relative w-28 h-36 flex flex-col items-center justify-end ${className}`}>
    {/* SVG Flask Outline */}
    <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-lg">
      <path d="M35,5 L65,5 M40,5 L40,40 L90,110 A10,10 0 0,1 80,120 L20,120 A10,10 0 0,1 10,110 L40,40 L40,5" fill="rgba(255,255,255,0.3)" stroke="#111" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M25,105 L40,65" stroke="rgba(255,255,255,0.8)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
    {/* Liquid */}
    <div className="absolute bottom-[4px] w-[84px] rounded-b-xl overflow-hidden z-10 flex items-end justify-center" style={{ height: `${liquidLevel}%`, transition: 'height 0.8s ease-in-out', clipPath: 'polygon(0% 100%, 100% 100%, 85% 0%, 15% 0%)' }}>
       <div className={`w-full h-full ${liquidColor} relative transition-colors duration-1000`}>
          {bubbles && Array.from({ length: 20 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute bg-white/70 rounded-full"
               style={{ width: Math.random() * 6 + 2, height: Math.random() * 6 + 2, left: `${Math.random() * 100}%`, bottom: -10 }}
               animate={{ y: [0, -100], opacity: [0, 1, 0] }}
               transition={{ repeat: Infinity, duration: 1 + Math.random() * 2, delay: Math.random() * 2 }}
             />
          ))}
       </div>
    </div>
    {children}
  </div>
);

export const Balloon = ({ color, scale, className="" }: any) => (
  <motion.div
    className={`absolute -top-20 z-10 origin-bottom flex flex-col items-center ${className}`}
    animate={{ scale: scale }}
    transition={{ type: "spring", stiffness: 60, damping: 15 }}
  >
    <svg viewBox="0 0 60 80" className={`w-20 h-24 ${color} drop-shadow-lg`}>
      <path d="M30,80 C25,70 5,50 5,30 C5,10 15,2 30,2 C45,2 55,10 55,30 C55,50 35,70 30,80 Z" fill="currentColor" stroke="#111" strokeWidth="2"/>
      <path d="M15,25 A10,10 0 0,1 25,15" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  </motion.div>
);

export const Beaker = ({ liquidColor, liquidLevel, bubbles = false, crossVisible = false, crossOpacity = 1, children, className = "" }: any) => (
  <div className={`relative w-32 h-36 flex flex-col items-center justify-end ${className}`}>
    <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-lg">
      <path d="M15,5 L85,5 M20,5 L20,110 A10,10 0 0,0 30,120 L70,120 A10,10 0 0,0 80,110 L80,5" fill="rgba(255,255,255,0.3)" stroke="#111" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M10,5 L20,15" stroke="#111" strokeWidth="3" strokeLinecap="round"/> {/* Spout */}
      <path d="M28,105 L28,45" stroke="rgba(255,255,255,0.8)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
    {crossVisible && (
      <div className="absolute bottom-4 z-0 font-black text-7xl text-black transition-opacity duration-1000" style={{ opacity: crossOpacity }}>X</div>
    )}
    <div className="absolute bottom-[4px] w-[60px] rounded-b-lg overflow-hidden z-10" style={{ height: `${liquidLevel}%`, transition: 'height 0.8s ease-in-out' }}>
       <div className={`w-full h-full ${liquidColor} relative transition-colors duration-1000`}>
          {bubbles && Array.from({ length: 20 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute bg-white/70 rounded-full"
               style={{ width: Math.random() * 6 + 2, height: Math.random() * 6 + 2, left: `${Math.random() * 100}%`, bottom: -10 }}
               animate={{ y: [0, -100], opacity: [0, 1, 0] }}
               transition={{ repeat: Infinity, duration: 1 + Math.random() * 2, delay: Math.random() * 2 }}
             />
          ))}
       </div>
    </div>
    {children}
  </div>
);

export const TestTube = ({ liquidColor, liquidLevel, bubbles = false, children, className = "" }: any) => (
  <div className={`relative w-14 h-48 flex flex-col items-center justify-end ${className}`}>
    <svg viewBox="0 0 40 160" className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-lg">
      <path d="M5,5 L35,5 M10,5 L10,140 A10,10 0 0,0 30,140 L30,5" fill="rgba(255,255,255,0.3)" stroke="#111" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M15,130 L15,50" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
    <div className="absolute bottom-[4px] w-[20px] rounded-b-full overflow-hidden z-10" style={{ height: `${liquidLevel}%`, transition: 'height 0.8s ease-in-out' }}>
       <div className={`w-full h-full ${liquidColor} relative transition-colors duration-1000`}>
          {bubbles && Array.from({ length: 15 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute bg-white/80 rounded-full"
               style={{ width: Math.random() * 4 + 2, height: Math.random() * 4 + 2, left: `${Math.random() * 100}%`, bottom: -10 }}
               animate={{ y: [0, -140], opacity: [0, 1, 0] }}
               transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 1.5, delay: Math.random() }}
             />
          ))}
       </div>
    </div>
    {children}
  </div>
);

export const BunsenBurner = ({ isOn, className = "" }: any) => (
  <div className={`relative w-20 h-24 flex flex-col items-center justify-end ${className}`}>
    {isOn && (
      <motion.div 
        className="absolute bottom-20 z-10 flex flex-col items-center"
        animate={{ scaleY: [1, 1.15, 0.9, 1.1, 1], scaleX: [1, 0.9, 1.1, 0.95, 1] }}
        transition={{ repeat: Infinity, duration: 0.4 }}
        style={{ transformOrigin: 'bottom center' }}
      >
        <svg viewBox="0 0 40 60" className="w-12 h-20 drop-shadow-[0_0_15px_rgba(255,100,0,0.9)]">
          <path d="M20,0 C30,20 40,40 20,60 C0,40 10,20 20,0 Z" fill="#ff7700" />
          <path d="M20,20 C25,35 30,50 20,60 C10,50 15,35 20,20 Z" fill="#ffcc00" />
          <path d="M20,40 C22,48 25,55 20,60 C15,55 18,48 20,40 Z" fill="#33ccff" />
        </svg>
      </motion.div>
    )}
    <svg viewBox="0 0 60 80" className="w-full h-full z-20 drop-shadow-md">
      <path d="M25,20 L35,20 L35,70 L25,70 Z" fill="#aaa" stroke="#111" strokeWidth="2"/>
      <path d="M10,70 L50,70 L55,80 L5,80 Z" fill="#555" stroke="#111" strokeWidth="2"/>
      <circle cx="30" cy="60" r="3" fill="#111"/>
    </svg>
  </div>
);

export const Thermometer = ({ temperature, className = "" }: any) => {
  // temperature 0 to 100
  const height = Math.min(100, Math.max(0, temperature));
  return (
    <div className={`relative w-8 h-40 flex flex-col items-center justify-end ${className}`}>
      <svg viewBox="0 0 20 100" className="absolute inset-0 w-full h-full z-20 drop-shadow-md">
        <path d="M5,5 L15,5 A5,5 0 0,1 15,15 L15,80 A10,10 0 1,1 5,80 L5,15 A5,5 0 0,1 5,5 Z" fill="rgba(255,255,255,0.6)" stroke="#111" strokeWidth="2"/>
        <circle cx="10" cy="85" r="6" fill="#ef4444" />
        {/* Ticks */}
        <path d="M15,20 L18,20 M15,40 L18,40 M15,60 L18,60" stroke="#111" strokeWidth="1"/>
      </svg>
      <div className="absolute bottom-[18px] w-[4px] bg-red-500 z-10 rounded-t-full" style={{ height: `${height * 0.7}%`, transition: 'height 1s ease-in-out' }} />
    </div>
  );
};
