import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main className="w-full">
      {/* Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas frameCount={240} />
        <Overlay />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Education Section */}
      <Education />

      {/* Footer */}
      <footer className="relative w-full bg-[#0a0a0a] border-t border-white/10 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-2">Muhammad Faizan</h3>
              <p className="text-sm text-gray-400">Web Developer & SEO Expert</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">Work</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.linkedin.com/in/faizan007/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:faizanjarral000@gmail.com" className="hover:text-white transition-colors">Email: faizanjarral000@gmail.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2026 Muhammad Faizan. All rights reserved.</p>
            <p>Crafted with React, Next.js & Framer Motion</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
