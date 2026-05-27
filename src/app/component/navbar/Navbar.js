"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <div className="fixed top-4 inset-x-4 md:inset-x-6 lg:inset-x-0 mx-auto max-w-4xl z-50">
            <motion.nav 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-14 rounded-full border border-white/10 bg-slate-950/40 backdrop-blur-md flex items-center justify-between px-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
                {/* Logo Token */}
                <div className="text-slate-100 font-mono font-bold tracking-tight text-sm">
                    ASHAN<span className="text-cyan-400">.DEV</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium font-sans">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Action Indicator Token */}
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    Available for R&D
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-slate-400 hover:text-cyan-400 focus:outline-none transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </motion.nav>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)}
                                className="block text-slate-300 hover:text-cyan-400 text-base font-medium font-sans transition-colors duration-300 px-2 py-1 border-b border-white/5 last:border-0"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex sm:hidden items-center gap-2 text-xs font-mono text-slate-400 px-2 pt-2">
                            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                            Available for R&D
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}