'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Arooj Portfolio',
    description: 'Modern portfolio website with smooth animations, responsive design, and optimized for search engines. Showcases creative work with interactive project showcase.',
    tags: ['React', 'JavaScript', 'CSS3', 'SEO', 'Responsive'],
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    link: 'https://imfj007.github.io/arooj-portfolio/',
  },
  {
    id: 2,
    title: 'Balcotone - E-Commerce',
    description: 'High-performance e-commerce platform featuring product catalog, shopping cart functionality, and payment integration. Built with modern web technologies for optimal user experience.',
    tags: ['Next.js', 'Tailwind CSS', 'JavaScript', 'E-Commerce', 'Payment'],
    category: 'E-Commerce',
    image: 'https://picsum.photos/800/600?random=2',
    link: 'https://balcotone-4b3h.vercel.app/',
  },
  {
    id: 3,
    title: 'Muhammad Faizan Portfolio',
    description: 'Personal portfolio website showcasing web development projects, skills, and expertise. Fully responsive design with optimized performance and SEO best practices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Portfolio', 'SEO'],
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    link: 'https://imfj007.github.io/Muhammadfaizan/',
  },
  {
    id: 4,
    title: 'My Portfolio Website',
    description: 'Comprehensive portfolio featuring multiple projects, skills showcase, and contact section. Demonstrates full-stack web development capabilities with clean, modern design.',
    tags: ['React', 'JavaScript', 'CSS', 'Web Development', 'UI/UX'],
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    link: 'https://imfj007.github.io/myportfolio/',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#0a0a0a] py-24 px-4 md:px-8">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of work showcasing expertise in design, engineering, and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                  {/* Top Section */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-4">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      View Project
                      <span className="text-lg">→</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <motion.a
            href="mailto:faizanjarral000@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
