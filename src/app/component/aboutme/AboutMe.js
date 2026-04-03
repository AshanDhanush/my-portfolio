"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import portrait from '../../../assets/Young software engineer at work.png';

export default function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <section id="about" className="min-h-screen w-full flex items-center bg-sky-50 pt-20 px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl">

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6  ">
                        <h1 className="text-5xl md:text-7xl text-sky-600 font-sans whitespace-nowrap underline decoration-sky-500 decoration-4 mb-4">
                            So, Who Am I?
                        </h1>

                        <span className="text-sky-500 text-lg md:text-xl font-sans italic ">
                           Passionate Full-Stack Developer and AI Architect with a deep interest in distributed systems and deep learning. I have a proven track record of developing end-to-end applications like AutoHive, where I integrate Next.js frontends with robust Java/Spring Boot backends and NoSQL (MongoDB) databases.

                             Beyond development, I am exploring the frontiers of AI, currently researching lightweight depth estimation models using the Hypersim and HeadsUp datasets. I thrive at the intersection of clean code, microservices orchestration, and efficient neural network design
                        </span>

                        <div className="mt-8 relative z-50">
                            <button type="button" className="inline-block  shadow-indigo-500 bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition-shadow shadow-lg cursor-pointer" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <Image
                            src={portrait}
                            alt="Ashan Dhanushka"
                            className="w-100 h-100 md:w-[450px] md:h-[450px] rounded-2xl shadow-xl border border-sky-100 object-cover"
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );

}