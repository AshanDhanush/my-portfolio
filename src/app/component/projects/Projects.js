"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen w-full bg-sky-50 py-20 px-8">
            <div className="container mx-auto max-w-6xl">
                {/* Section Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true , amount: 0.5 }}
                    className="text-5xl md:text-7xl text-sky-600 font-sans text-center underline decoration-sky-500 decoration-4 mb-16"
                >
                    My Projects
                </motion.h1>

                {/* Grid Container - Stacks on mobile, 2 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-10 ">
                    
                    {/* Project 1: Harvest Link */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="flex flex-col bg-emerald-50 border border-emerald-200 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl shadow-emerald-400"
                    >
                        <h2 className="text-emerald-700 font-sans mb-4 text-4xl font-bold">Harvest Link</h2>
                        <div className="relative w-full h-52 mb-4 overflow-hidden rounded-xl">
                            <Image 
                                src={require('../../../assets/Harvest Link_ Connecting Farms to Tables.png')} 
                                alt="Harvest Link" 
                                fill
                                className="object-cover border border-emerald-300" 
                            />
                        </div>
                        <p className="text-emerald-600 text-lg font-sans italic mb-6 flex-grow">
                            A web application for connecting farmers with potential buyers, facilitating the sale of fresh produce.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-emerald-700 font-medium">View on GitHub</span>
                            <a href="https://github.com/AshanDhanush/HarvestLink.git" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 transition-transform hover:scale-110">
                                <GitHubIcon />
                            </a>
                        </div>
                    </motion.div>

                    {/* Project 2: Auto Hive */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="flex flex-col bg-sky-100 border border-sky-300 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl shadow-sky-500"
                    >
                        <h2 className="text-sky-700 font-sans mb-4 text-4xl font-bold">Auto Hive</h2>
                        <div className="relative w-full h-52 mb-4 overflow-hidden rounded-xl">
                            <Image 
                                src={require('../../../assets/ChatGPT Image Apr 3, 2026, 06_48_32 PM.png')} 
                                alt="Auto Hive" 
                                fill
                                className="object-cover border border-sky-300" 
                            />
                        </div>
                        <p className="text-sky-600 text-lg font-sans italic mb-6 flex-grow">
                            A robust e-commerce platform for vehicle components. Built with Next.js and Spring Boot for high-performance data handling.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-sky-700 font-medium">View on GitHub</span>
                            <a href="https://github.com/Sithum39/AutoHive.git" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800 transition-transform hover:scale-110">
                                <GitHubIcon />
                            </a>
                        </div>
                    </motion.div>

                    {/* AI based Research  */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="flex flex-col bg-purple-100 border border-purple-300 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl shadow-purple-500"
                    >
                        <h2 className="text-purple-700 font-sans mb-4 text-4xl font-bold">AI based Research</h2>
                        <div className="relative w-full h-52 mb-4 overflow-hidden rounded-xl">
                            <Image 
                             src={require('../../../assets/Blind navigation system in urban setting.png')} 
                                alt="Auto Hive" 
                                fill
                                className="object-cover border border-purple-300" 
                            />
                        </div>
                             <p className="text-purple-600 text-lg font-sans italic mb-6 grow">
                           An AI research project focused on Knowledge Distillation. I developed a lightweight Student Model (MobileNetV3 + MobileViT) that mimics a high-performance Teacher Model to estimate distance from a single camera image.
                           </p>
                        <div className="flex items-center justify-between">
                            <span className="text-purple-700 font-medium">View on GitHub</span>
                            <a href="https://github.com/Sithum39/AutoHive.git" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-transform hover:scale-110">
                                <GitHubIcon />
                            </a>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// Separate SVG component for cleaner code
function GitHubIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
    );
}