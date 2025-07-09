import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <section className="mb-20">
        <h2 className="font-bebas text-3xl font-bold mb-4">ABOUT ME</h2>
        <p className="text-gray-300 max-w-3xl mb-4">
          I am a Front-end developer based in Coimbatore, India. Has Computer Science Engineering background.
        </p>
        <p className="text-gray-400 max-w-3xl">
          A passionate Front-end developer and Computer Science graduate with a strong interest in creating efficient, user-focused digital solutions. I enjoy exploring the intersection of technology and problem-solving, with hands-on experience in Front-end development, AI integration, and web technologies. As a learner and leader, I thrive in collaborative environments where I can contribute, grow, and innovate. With a curious mindset and a drive to build meaningful tech, I’m always looking for opportunities to learn, create, and make an impact.
        </p>
        <Link href="/about" className="text-lime-400 underline ml-1 mb-10">More about me</Link>
      </section>
  )
}

export default About
