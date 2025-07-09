import Image from 'next/image'
import { Github, Linkedin, ArrowUpRight, Download } from 'lucide-react'
import { Profile1, Profile2, Thumbnail1, Thumbnail2, Thumbnail3 } from "@/assets/images/index"
import Link from 'next/link'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Contact from '@/components/Home/Contact'
import About from '@/components/Home/About'

export default function Home() {
  return (
    <main >
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}