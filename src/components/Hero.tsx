'use client'
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import ThreeScene from "./ThreeScene";
import ParticleScene from "./ParticleScene";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center  px-0">
            {/* 🔥 Three Background */}
            <div className="absolute inset-0 z-20">
                <ParticleScene />
            </div>
            {/* <TechBackground /> */}
            <div className="h-full w-full">
                {/* ✨ Animated Background glow */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-transparent animate-pulse"></div>
                <div className="relative h-full flex justify-center items-center">
                    {/* main content */}
                    {/* ✨ Glow Effect */}
                    <div className="absolute w-72 h-72 top-50 bg-blue-500/20 blur-3xl rounded-full"></div>
                    <div className="text-center z-999" >
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                        >
                            Hi, I'm Deepak
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 mb-6"
                        >
                            Frontend Developer (Next.js + TypeScript)
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex gap-4 justify-center"
                        >
                            <a href="#projects" className="bg-blue-600 px-6 py-2 rounded-xl shadow-lg shadow-blue-500/40 hover:scale-105 transition">
                                Projects
                            </a>
                            <a href="#contact" className="border px-6 py-2 rounded-xl shadow-lg shadow-blue-500/40 hover:scale-105 transition-all">
                                Hire Me
                            </a>
                        </motion.div>

                    </div>
                    {/* contect detail */}
                    <div className="absolute text-base  right-24 bottom-10 text-gray-400 font-medium  hidden xl:grid pe-10">
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
                    <div className="absolute bottom-8 sm:left-32 lg:ms-10 text-gray-400">
                        <div className=" text-4xl  sm:text-7xl md:text-8xl text-[120px] font-bold text-white/10 select-none">
                            <h1 className=' bg-opacity-5 '>Web</h1>

                            <span className=' bg-opacity-5 px-2'>
                                Developer
                                {/* <ReactTyped strings={["Developer", "Designer"]} typeSpeed={70} backSpeed={50} loop className=' ps-2' /> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}