import React from 'react'

const Capabilities = () => {
  return (
    <section className="mb-20 mt-10">
        <h2 className="text-3xl font-bebas font-bold mb-6">MY CAPABILITIES</h2>
        <div className="lg:flex lg:justify-between lg:items-start gap-10">
          <p className="text-gray-300 max-w-2xl mb-4">
            Creative and detail-oriented front-end developer skilled in building responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and React with a strong eye for design and usability. Capable of translating design concepts into high-performance, scalable front-end solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            {['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'REACT', 'FIGMA', 'TAILWIND CSS'].map(skill => (
              <span key={skill} className="border border-white hover: text-lime-400 px-4 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Capabilities



