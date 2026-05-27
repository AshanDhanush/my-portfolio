"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import portrait from '../../../assets/my_photo.jpeg';

export default function Hero() {
    return (
        <section id="hero" className="w-full pt-32 pb-24 px-6 relative min-h-screen flex items-center">
            <div className="container mx-auto max-w-5xl relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    
                    {/* Floating Hero Text Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:col-span-7 space-y-6 text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-white/10 text-orange-300/90 text-xs font-mono tracking-wider">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                            WELCOME TO MY PORTFOLIO
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-sans tracking-tight text-slate-100 font-bold leading-tight">
                            Hi! I am <br/>
                            <span className="bg-gradient-to-r from-orange-300 via-stone-200 to-amber-200 bg-clip-text text-transparent">Ashan Dhanushka</span>
                        </h1>
                        
                        <p className="text-slate-400 leading-relaxed text-lg font-sans max-w-xl mx-auto md:mx-0">
                            A passionate Frontend Developer crafting seamless, high-performance web experiences.
                        </p>
                        
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <button 
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 font-mono text-sm hover:bg-orange-500/20 hover:border-orange-400 transition-all duration-300 backdrop-blur-md"
                            >
                                [ VIEW MY WORK ]
                            </button>
                            <a 
                                href="#about" 
                                className="px-6 py-3 rounded-xl text-slate-400 font-mono text-sm hover:text-slate-200 transition-colors duration-300"
                            >
                                See more...
                            </a>
                        </div>
                    </motion.div>

                    {/* Floating Image Node - Color calibrated to match my_photo.jpeg */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="md:col-span-5 flex justify-center md:justify-end relative"
                    >
                        <div className="relative w-64 h-80 md:w-72 md:h-96 bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-3xl p-3.5 shadow-2xl flex items-center justify-center group overflow-hidden">
                            {/* Ambient backdrop matching the warm map tone in my_photo.jpeg */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                            
                            <Image 
                                src={portrait} 
                                alt="Ashan Dhanushka" 
                                width={280} 
                                height={360} 
                                className="rounded-2xl object-cover h-full w-full relative z-10 transition-transform duration-500 group-hover:scale-[1.02]" 
                                priority
                            />
                            
                            {/* Floating decorative warm background clouds */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/15 blur-3xl rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-stone-500/10 blur-3xl rounded-full" />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}