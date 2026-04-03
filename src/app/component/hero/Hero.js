"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import portrait from '../../../assets/Full face portrait o.png';

export default function Hero() {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <section id="hero" className="min-h-screen w-full flex items-center bg-sky-50 pt-20 px-6">
                <div className="container mx-auto flex flex-col mb-30 md:flex-row items-center justify-center md:justify-between gap-10 md:gap-50 max-w-6xl">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                        
                        <span className="text-sky-700 text-xl font-medium block mb-2 md:mt-5">
                            Welcome to my Portfolio
                        </span>

                        <h1 className="text-4xl md:text-6xl font-sans text-sky-700 leading-tight">
                            Hi! I am <span className="font-bold text-sky-900">Ashan Dhanushka</span>
                        </h1>

                        <p className="text-sky-600 mt-6 text-lg max-w-lg">
                            A passionate Frontend Developer crafting seamless web experiences.<a href="#about" className="text-red-500 hover:text-red-700 transition-colors duration-300 relative z-50"> See more.......</a>
                        </p>
                        <div className="mt-8 relative z-50 md:mb-8">
                            <button type="button" className="inline-block shadow shadow-indigo-500 bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition-colors duration-300 shadow-lg cursor-pointer " onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                View My Work
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 flex justify-center md:justify-end mt-10">
                        <div className="w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                            <Image src={portrait} alt="Ashan Dhanushka" width={300} height={300} className="rounded-2xl" />
                        </div>
                    </div>
                </div>

            </section>

        </motion.div>
    );
}