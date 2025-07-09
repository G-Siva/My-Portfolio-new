import Image from 'next/image'
import { Github, Linkedin, Download,} from 'lucide-react'
import {Profile2} from "@/assets/images"
import Hero from '@/components/About/Hero'
import Capabilities from '@/components/About/Capabilities'
import Experience from '@/components/About/Experience'
import Contact from '@/components/Home/Contact'
export default function About() {
  return (
    <main >
      <Hero />
      <Capabilities />
      <Experience />
      <Contact />
    </main>
  )
}
