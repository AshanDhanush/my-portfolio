"use client"

import { motion } from "framer-motion";

export default function AboutMe() {
    const skills = ["Java (Spring Boot)", "Python (FastAPI)", "Next.js / React", "Computer Vision", "MongoDB", "MySQL", "RAG Systems", "Docker"];

    return (
        <section id="about" className="w-full py-24 px-6 relative">
            <div className="container mx-auto max-w-5xl relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    
                    {/* Floating Profile Bio Block */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-7 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-sans tracking-tight text-slate-100 font-bold">
                            Architecting <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Scalable Intelligence</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-base font-sans">
                            As an Electronic and Computer Science researcher and full-stack engineer, I specialized in distilling complex computer vision models and building high-throughput architectural ecosystems. 
                        </p>
                        <p className="text-slate-400 leading-relaxed text-base font-sans">
                            My focus centers around bridging algorithmic deep learning (Metric Depth Estimation, Knowledge Distillation) with production-ready cloud environments.
                        </p>
                    </motion.div>

                    {/* Floating Core Tech Matrix */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-5 bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-2xl p-6 relative"
                    >
                        {/* Internal ambient vector lines */}
                        <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent pointer-events-none" />
                        
                        <h3 className="text-slate-200 font-mono text-sm tracking-wider uppercase mb-6 text-purple-400">
                            // Tech Stack Matrix
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.03)" }}
                                    className="p-3 rounded-xl border border-white/5 bg-slate-950/40 text-xs font-mono text-slate-300 flex items-center gap-2"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}