"use client"

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 inset-x-0 mx-auto max-w-4xl h-14 z-50 rounded-full border border-white/10 bg-slate-950/40 backdrop-blur-md flex items-center justify-between px-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
            {/* Logo Token */}
            <div className="text-slate-100 font-mono font-bold tracking-tight text-sm">
                ASHAN<span className="text-cyan-400">.DEV</span>
            </div>

            {/* Floating Anchor Anchors */}
            <div className="flex items-center gap-6 text-sm font-medium font-sans">
                <a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Home</a>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">About</a>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Projects</a>
            </div>

            {/* Action Indicator Token */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for R&D
            </div>
        </motion.nav>
    );
}