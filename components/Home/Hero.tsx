import { Profile1 } from '@/assets/images'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between border-b-[1px] border-gray-500 md:border-none items-center mb-20">
            <div className="md:w-1/2">
                <h1 className="font-bebas text-5xl font-bold mb-4 hover:text-lime-300">Hi, I’m Siva Subramanian</h1>
                <p className="text-gray-400 mb-6">A Coimbatore-based Front-end Developer passionate about building accessible and user-friendly websites.</p>
                <div className="flex gap-4 items-center">
                    <a href="#contact" className="bg-lime-400 text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 text-sm">
                    <ArrowUpRight className="w-5 h-5" /> Contact Me</a>
                    <a href="https://linkedin.com/in/sivasubramanian19" target="_blank"><Linkedin className="text-white hover:text-lime-400 w-6 h-6" /></a>
                    <a href="https://github.com/" target="_blank"><Github className="text-white hover:text-lime-400 w-6 h-6" /></a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center mb-12 mt-4 md:mb-0">
                <Image src={Profile1} alt="Siva Subramanian" width={300} height={360} className="rounded-xl object-cover" />
            </div>
            {/* <hr className='bg-red-400 h-2' /> */}
        </section>
    )
}

export default Hero
