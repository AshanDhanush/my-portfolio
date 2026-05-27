"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import healthSyncImg from '../../../assets/gemini-svg.svg';
import salonImg from '../../../assets/salon.svg';

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen w-full py-28 px-6 relative">
            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Section Heading with clean neon underline */}
                <div className="flex flex-col items-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl text-slate-100 font-sans tracking-tight text-center font-bold"
                    >
                        Selected Creations
                    </motion.h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Project 1: Harvest Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -12, borderTopColor: "rgba(34, 211, 238, 0.4)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.08)] group"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Agri-Tech</span>
                        </div>
                        <h2 className="text-slate-100 font-sans text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">Harvest Link</h2>

                        <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                            <Image
                                src={require('../../../assets/Harvest Link_ Connecting Farms to Tables.png')}
                                alt="Harvest Link"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed font-sans mb-6 flex-grow">
                            A smart ecosystem connecting agricultural producers directly with buyers, stabilizing supply lines and optimizing pricing structures.
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-xs text-slate-500 font-mono">Open Source</span>
                            <a href="https://github.com/AshanDhanush/HarvestLink.git" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all transform hover:scale-110">
                                <GitHubIcon />
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 2: Auto Hive */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -12, borderTopColor: "rgba(167, 139, 250, 0.4)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(167,139,250,0.08)] group"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">E-Commerce Architecture</span>
                        </div>
                        <h2 className="text-slate-100 font-sans text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">Auto Hive</h2>

                        <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                            <Image
                                src={require('../../../assets/ChatGPT Image Apr 3, 2026, 06_48_32 PM.png')}
                                alt="Auto Hive"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed font-sans mb-6 flex-grow">
                            An advanced marketplace vehicle components hub. Engineered with scalable microservices and lightning-fast JWT validation states.
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-xs text-slate-500 font-mono">Open Source</span>
                            <a href="https://github.com/Sithum39/AutoHive.git" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-all transform hover:scale-110">
                                <GitHubIcon />
                            </a>
                        </div>
                    </motion.div>
                    {/* Project 3: Elite Salon */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -12, borderTopColor: "rgba(236, 72, 153, 0.4)" }} // Rose/Pink light token for Salon theme
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-pink-400 bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/20">Full-Stack SaaS // GenAI</span>
                        </div>
                        <h2 className="text-slate-100 font-sans text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors duration-300">Elite Salon</h2>

                        {/* Integrated Custom Vector Asset Showcase */}
                        <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                            <Image
                                src={salonImg}
                                alt="Elite Salon Intelligent Reservation System"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                priority
                            />
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed font-sans mb-6 flex-grow">
                            A full-stack salon management and salon reservation ecosystem. Features a custom integrated RAG-enabled chatbot designed to handle seamless real-time client consultations.
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-xs text-slate-500 font-mono">Commercial App</span>
                            <a href="https://github.com/AshanDhanush/salon-management-system.git" className="text-slate-400 hover:text-pink-400 transition-all transform hover:scale-110">
                                <GitHubIcon />
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 4: HealthSync (Hospital Management System) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -12, borderTopColor: "rgba(34, 211, 238, 0.4)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group md:col-span-2 lg:col-span-1"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">Healthcare SaaS</span>
                        </div>

                        <h2 className="text-slate-100 font-sans text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">HealthSync</h2>

                        {/* Realized Project Vector Showcase Image Container */}
                        <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                            <Image
                                src={healthSyncImg}
                                alt="HealthSync Smart Healthcare Platform"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                priority
                            />
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed font-sans mb-6 flex-grow">
                            A dynamic, secure smart healthcare appointment system engineered to streamline patient scheduling, manage records, and optimize channel workflows flawlessly.
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <span className="text-xs text-slate-500 font-mono">Enterprise Solution</span>
                            <a href="https://github.com/AshanDhanush/Smart-Healthcare-Appointment-Syestem.git" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all transform hover:scale-110">
                                <GitHubIcon />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function GitHubIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    );
}