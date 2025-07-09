'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bebas font-bold">SIVA SUBRAMANIAN</h1>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Links - Desktop */}
      <div className="hidden lg:flex gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Links - Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-start px-4 py-4 gap-4 lg:hidden z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

