'use client'
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiGithub, SiVercel } from "react-icons/si";
import ParticleScene from "./ParticleScene";

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden text-center">
            {/* Background continuation */}
            <div className="absolute inset-0 z-1 opacity-30 pointer-events-none">
                <ParticleScene />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-transparent via-black/20 to-black"></div>

            {/* Glow elements */}
            <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-500/10 blur-3xl rounded-full top-10 left-[-50px] sm:left-20 z-1"></div>
            <div className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-500/10 blur-3xl rounded-full bottom-0 right-[-50px] sm:right-10 z-1"></div>

            {/* Skills content */}
            <div className="relative z-1 max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-14">
                    Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    {/* Frontend */}
                    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-2xl
                     transition duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

                        {/* Icons */}
                        <div className="flex justify-center gap-3 sm:gap-4 text-2xl sm:text-3xl text-blue-400 mb-4 sm:mb-5 flex-wrap">
                            <FaReact />
                            <SiNextdotjs />
                            <SiTypescript />
                            <SiTailwindcss />
                            <SiJavascript />
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Frontend</h3>

                        {/* Skills badges */}
                        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                            {["React", "Next.js", "TypeScript", "Tailwind", "JavaScript"].map((skill) => (
                                <span key={skill} className="px-2 sm:px-3 py-1 bg-white/10 rounded-full border border-white/10">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Tools */}
                    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-2xl
                     transition duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

                        <div className="flex justify-center gap-3 sm:gap-4 text-2xl sm:text-3xl text-blue-400 mb-4 sm:mb-5">
                            <FaGitAlt />
                            <SiGithub />
                            <SiVercel />
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Tools</h3>

                        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                            {["Git", "GitHub", "Vercel"].map((skill) => (
                                <span key={skill} className="px-2 sm:px-3 py-1 bg-white/10 rounded-full border border-white/10">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Learning */}
                    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-2xl transition duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

                        <div className="text-2xl sm:text-3xl text-purple-400 mb-4 sm:mb-5">
                            🚀
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Learning</h3>

                        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                            {["Backend", "APIs", "Node.js"].map((skill) => (
                                <span key={skill} className="px-2 sm:px-3 py-1 bg-white/10 rounded-full border border-white/10">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}