'use client'
import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";
import ParticleScene from "./ParticleScene";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
            {/* 🔥 Three Background */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <ParticleScene />
            </div>
            <div className="h-full w-full">
                {/* ✨ Animated Background glow */}
                <div className="absolute inset-0 z-1 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-transparent animate-pulse"></div>
                <div className="relative h-full flex justify-center items-center">
                    {/* ✨ Glow Effect */}
                    <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-500/20 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>
                    {/* main content */}
                    <div className="relative text-center z-20 max-w-xl" >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                        >
                            Hi, I'm Deepak
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm sm:text-base text-gray-400 mt-3 mb-6"
                        >
                            Frontend Developer (Next.js + TypeScript)
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a href="#projects"
                                className="bg-blue-600 px-6 py-2 rounded-xl shadow-lg shadow-blue-500/40 hover:scale-105 transition">
                                Projects
                            </a>
                            <a href="#contact"
                                className="border border-white/20 px-6 py-2 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition">
                                Hire Me
                            </a>
                        </motion.div>

                    </div>
                    {/* 💬 Contact Info (hide on mobile) */}
                    <div className="absolute bottom-6 right-4 hidden lg:block text-sm text-gray-400">
                        <div className='grid'>
                            <span className=' bg-whit bg-opacity-10  px-1'>deepakmehra7830@gamil.com</span>
                            <span className=' bg-whit bg-opacity-10  px-1 my-1'>+91 7830799870</span>
                        </div>
                        <ul className="flex gap-5 sm:gap-3">
                            <li>
                                <a href="https://www.facebook.com/the.demon.3/" target="blank" className=' bg-whit  bg-opacity-10 px-1'>
                                    facebook,
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/deepak__mehra" target="blank" className=' bg-whit  bg-opacity-10 px-1'>
                                    Instagram,
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/deepak-singh-763487263/" target="blank" className=' bg-whit bg-opacity-10 px-1'>
                                    Linkdin,
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/un0known" target="blank" className=' bg-whit  bg-opacity-10 px-1'>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* proffession */}
                    <div className="absolute hidden sm:block bottom-4 left-4 sm:left-10 text-white/5 select-none">
                        <div className=" text-4xl  sm:text-7xl md:text-8xl text-[120px] font-bold text-white/10 select-none">
                            <h1 className=' text-[60px] sm:text-[100px] md:text-[140px] font-bold leading-0 sm:leading-none'>
                                Web</h1>

                            <span className=' text-[60px] sm:text-[100px] md:text-[140px] font-bold leading-none'>
                                Developer
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}