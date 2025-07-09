import React from 'react'
import { Github, Linkedin, ArrowUpRight, Download} from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="mb-15">
        <h2 className="font-bebas text-3xl font-bold mb-6">LET’S CONNECT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Content */}
          <div>
            <p className="mb-4">Say hello at <a href="https://linkedin.com/in/sivasubramanian19" className="text-lime-400 underline">Me(LinkedIn)</a></p>
            <p className="mb-6">For more info, here’s my <a href="/public/siva_resume.pdf" className="text-lime-400 underline">resume</a></p>
            <div className="flex gap-4">
              <Linkedin className="w-5 h-5 hover:text-lime-400" />
              <Github className="w-5 h-5 hover:text-lime-400" />
              <Download className="w-5 h-5 hover:text-lime-400" />
              <ArrowUpRight className="w-5 h-5 hover:text-lime-400" />
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-zinc-800 text-white" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-zinc-800 text-white" />
            <input type="text" placeholder="Subject" className="w-full px-4 py-2 rounded bg-zinc-800 text-white" />
            <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 rounded bg-zinc-800 text-white"></textarea>
            <button type="submit" className="bg-lime-400 text-black px-4 py-2 rounded font-semibold">SUBMIT</button>
          </form>
        </div>
      </section>
  )
}

export default Contact
