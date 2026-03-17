'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // ===== SECTION 1: HERO - Premium Parallax =====
  const section1Opacity = useTransform(scrollY, [0, 400, 1000], [1, 1, 0]);
  const section1Y = useTransform(scrollY, [0, 400, 1000], [0, -60, -140]);
  const section1Scale = useTransform(scrollY, [0, 600, 1000], [1, 0.98, 0.9]);
  const section1Blur = useTransform(scrollY, [600, 1000], [0, 8]);

  // ===== SECTION 2: MESSAGE - Dynamic Transform =====
  const section2Opacity = useTransform(scrollY, [800, 1200, 1800], [0, 1, 0.8]);
  const section2Y = useTransform(scrollY, [800, 1200, 1800], [120, 0, -80]);
  const section2Scale = useTransform(scrollY, [800, 1200, 1800], [0.95, 1, 0.95]);
  const section2X = useTransform(scrollY, [800, 1200, 1800], [-40, 0, 40]);
  const section2Rotate = useTransform(scrollY, [800, 1200, 1800], [2, 0, -1]);

  // ===== SECTION 3: VALUE PROP - Sophisticated Parallax =====
  const section3Opacity = useTransform(scrollY, [1600, 2000, 2600], [0, 1, 0.7]);
  const section3Y = useTransform(scrollY, [1600, 2000, 2600], [120, 0, -100]);
  const section3Scale = useTransform(scrollY, [1600, 2000, 2600], [0.93, 1, 0.9]);
  const section3X = useTransform(scrollY, [1600, 2000, 2600], [60, 0, -50]);

  // ===== BACKGROUND GLOWS - Dynamic Effects =====
  const glowOpacity1 = useTransform(scrollY, [0, 500, 1000], [0.3, 0.4, 0.2]);
  const glowOpacity2 = useTransform(scrollY, [800, 1500, 2200], [0.2, 0.35, 0.15]);
  const glowScale = useTransform(scrollY, [0, 2000], [1, 1.2]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ height: '500vh' }}
    >
      {/* ===== ANIMATED BACKGROUND GLOWS ===== */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: glowOpacity1, scale: glowScale }}
      >
        <div className="absolute top-32 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"></div>
      </motion.div>

      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: glowOpacity2 }}
      >
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"></div>
      </motion.div>

      {/* ===== SECTION 1: HERO - Premium Entry Animation ===== */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-20"
        style={{
          opacity: section1Opacity,
          y: section1Y,
          scale: section1Scale,
        }}
      >
        <div className="text-center px-4 backdrop-blur-sm">
          {/* Hero Glow Background */}
          <div className="absolute -inset-12 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Main Heading */}
          <motion.h1
            className="relative text-7xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight"
            style={{
              filter: section1Blur,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.1,
              ease: [0.23, 1, 0.82, 1],
            }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl">
              Muhammad Faizan
            </span>
          </motion.h1>

          {/* Subtitle with Letter Spacing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.23, 1, 0.82, 1],
            }}
          >
            <p className="text-xl md:text-3xl font-light text-gray-300 tracking-wide letter-spacing-loose">
              Web Developer & SEO Expert
            </p>
            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.23, 1, 0.82, 1],
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ===== SECTION 2: MESSAGE - Dynamic Parallax Text ===== */}
      <motion.div
        className="fixed inset-0 flex items-center pointer-events-none z-10"
        style={{
          opacity: section2Opacity,
          y: section2Y,
          x: section2X,
          scale: section2Scale,
          rotateZ: section2Rotate,
        }}
      >
        <div className="w-full px-8 md:px-16">
          {/* Background Glow for Text */}
          <div className="absolute -inset-12 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-transparent rounded-3xl blur-2xl"></div>

          <motion.h2
            className="relative text-5xl md:text-7xl font-bold text-gray-50 max-w-3xl leading-tight tracking-tight"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.82, 1],
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            I create
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 drop-shadow-xl">
              high-performance
            </span>
            <br />
            web solutions that
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              drive growth
            </motion.span>
          </motion.h2>

          {/* Accent Element */}
          <motion.div
            className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
      </motion.div>

      {/* ===== SECTION 3: VALUE PROP - Refined Sophistication ===== */}
      <motion.div
        className="fixed inset-0 flex items-center justify-end pointer-events-none z-10"
        style={{
          opacity: section3Opacity,
          y: section3Y,
          x: section3X,
          scale: section3Scale,
        }}
      >
        <div className="w-full px-8 md:px-16 text-left md:text-right">
          {/* Background Glow */}
          <div className="absolute -inset-12 bg-gradient-to-l from-cyan-600/5 via-blue-600/5 to-transparent rounded-3xl blur-2xl"></div>

          <motion.h3
            className="relative text-4xl md:text-6xl font-bold text-gray-100 max-w-2xl ml-auto leading-tight tracking-tight"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.82, 1],
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Full-stack
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              development
            </span>
            <br />
            + SEO
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              optimization
            </motion.span>
          </motion.h3>

          {/* Accent Element */}
          <motion.div
            className="mt-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ml-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
