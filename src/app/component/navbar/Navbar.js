"use client";
import { motion } from "framer-motion"; 
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className=" flex justify-between items-center bg-[#0f172a] text-white font-sans py-4 w-full z-50 shadow-md fixed">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        
        {/* 1. The Name Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-sky-500">Ashan Portfolio</h1>
        </motion.div>

        {/* 2. Desktop Navigation Links */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="hidden md:flex space-x-8 items-center font-medium">
            <li><a href="#hero" className="hover:text-sky-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-sky-500 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-sky-500 transition-colors text-sky-400 border border-sky-400 px-4 py-1 rounded-full hover:bg-sky-400 hover:text-white transition-all">Contact</a></li>
          </ul>
        </motion.div>

        {/* 3. The Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
            <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 4. The Mobile Menu Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#1e293b] border-t border-white/10 shadow-2xl z-50 md:hidden"
        >
          <ul className="flex flex-col p-6 space-y-4"> 
            <li><a href="#hero" onClick={() => setIsOpen(false)} className="text-lg hover:text-sky-500">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="text-lg hover:text-sky-500">About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="text-lg hover:text-sky-500">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="text-lg text-sky-400 font-bold">Contact</a></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}