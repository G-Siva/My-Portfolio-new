import Image from 'next/image'
import React from 'react'
import { Github, Linkedin, ArrowUpRight} from 'lucide-react'
import { Profile1, Profile2, Thumbnail1, Thumbnail2, Thumbnail3 } from "@/assets/images/index"

const Projects = () => {
    return (
        <section className="mb-20">
          <h2 className="font-bebas text-3xl font-bold mb-2">FEATURED PROJECTS</h2>
            <p className="text-gray-400 mb-10">Here are some of the selected projects that showcase my passion.</p>

        {/* Project Cards */}
        <div className="space-y-16">
          {/* Storix AI */}
              <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                     <Image src={Thumbnail1} alt="Storix AI" width={600} height={400} className="rounded-xl" />
                  </div>
            <div className="md:w-1/2">
                   <h3 className="text-xl font-bold mb-2">Storix AI – Intelligent Pantry Management System</h3>
                       <p className="text-gray-400 mb-4">Built an AI-powered pantry management app to track inventory, reduce food waste, and suggest recipes based on available items. Implemented user authentication, real-time database updates, and collaborator access using Firebase, React.js, and Tailwind CSS. Achieved efficient inventory control and enhanced user collaboration with a responsive, intuitive UI.</p>
                       <p className="text-sm text-gray-500 mb-1">Year: 2024</p>
                       <p className="text-sm text-gray-500 mb-4">Role: Front-end Developer</p>
                <div className="flex gap-4">
                    <a href="https://storix-ai.vercel.app/" className="text-lime-400 font-medium flex items-center gap-1">LIVE DEMO <ArrowUpRight className="w-4 h-4" /></a>
                    <a href="https://github.com/G-Siva/Storix-AI" className="text-lime-400 font-medium flex items-center gap-1">SEE ON GITHUB <Github className="w-4 h-4" /></a>
                </div>
            </div>
        </div>

          {/* TrueScan AI */}
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Image src={Thumbnail2} alt="TrueScan AI" width={600} height={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-2">TrueScan AI – Detecting Image Forgery in Real Time with AI Precision</h3>
              <p className="text-gray-400 mb-4">Built a Chrome-integrated AI solution to detect Copy-Move & Splicing forgeries in images using an optimized Convolutional Neural Network (CNN) model. Designed a secure backend with Flask and enabled real-time analysis through seamless browser interaction. Achieved accurate detection and smooth user experience for verifying image authenticity online.</p>
              <p className="text-sm text-gray-500 mb-1">Project Type: Academic Project</p>
              <p className="text-sm text-gray-500 mb-4">Year: 2025 | Role: Lead Developer</p>
              <div className="flex gap-4">
                <a href="https://true-scan-ai.vercel.app/" className="text-lime-400 font-medium flex items-center gap-1">VIEW PROJECT <ArrowUpRight className="w-4 h-4" /></a>
                <a href="https://github.com/G-Siva/TrueScan-AI" className="text-lime-400 font-medium flex items-center gap-1">SEE ON GITHUB <Github className="w-4 h-4" /></a>
              </div>
            </div>
        </div>

          {/* NoteConnect */}
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Image src={Thumbnail3} alt="NoteConnect" width={600} height={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-2">NoteConnect – A Collaborative Platform for Academic Note Sharing</h3>
              <p className="text-gray-400 mb-4">Developed a Django-based web platform enabling students and lecturers to share notes, upload study materials, and interact in a structured academic space. Implemented user authentication, role-based access, and a clean, responsive UI to streamline communication and content sharing in educational environments.</p>
              <p className="text-sm text-gray-500 mb-1">Year: 2023</p>
              <p className="text-sm text-gray-500 mb-4">Role: Lead Developer</p>
              <div className="flex gap-4">
                <a href="https://github.com/G-Siva/NoteConnect" className="text-lime-400 font-medium flex items-center gap-1">SEE ON GITHUB <Github className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
    </section>
)
}

export default Projects