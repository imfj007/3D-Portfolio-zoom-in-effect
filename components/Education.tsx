'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
  field: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Allama Iqbal Open University',
    year: 'Expected 2025',
    description: 'Comprehensive business education with focus on entrepreneurship, management, and strategic planning. Strong foundation in business analytics and digital transformation.',
    field: 'Business Administration',
  },
  {
    id: 2,
    degree: 'Web Development & Full-Stack',
    institution: 'Self-Taught & Online Courses',
    year: '2020 - Present',
    description: 'Advanced training in modern web technologies including React, Next.js, TypeScript, Node.js, and cloud deployment. Specialized in performance optimization and SEO best practices.',
    field: 'Web Development',
  },
  {
    id: 3,
    degree: 'Digital Marketing & SEO Specialist',
    institution: 'Online Certification Programs',
    year: '2021 - Present',
    description: 'Expert-level certification in search engine optimization, digital marketing strategies, content marketing, and analytics. Proven track record of improving website rankings and driving organic traffic.',
    field: 'SEO & Marketing',
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#1a1a1a] py-24 px-4 md:px-8"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Education &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {' '}
              Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development in web development, business administration, and digital marketing.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div className="absolute left-0 md:left-16 top-32 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}

              <div className="flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center pt-2">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-[#121212]">
                    <div className="h-3 w-3 rounded-full bg-black"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 group-hover:border-white/20 p-6 transition-all duration-500">
                  {/* Year Badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-3">
                    {item.year}
                  </span>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm font-semibold text-purple-400 mb-3">
                    {item.institution}
                  </p>

                  {/* Field */}
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-purple-500/20 border border-purple-400/30 text-purple-300">
                      {item.field}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-24 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-white">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills & Expertise</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'React.js',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'JavaScript',
              'Node.js',
              'SEO',
              'Web Performance',
              'UI/UX Design',
              'Responsive Design',
              'Git & GitHub',
              'Web Analytics',
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 hover:border-white/20 text-center font-medium text-gray-200 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
