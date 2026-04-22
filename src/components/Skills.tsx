'use client'
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiGithub, SiVercel } from "react-icons/si";
import ParticleScene from "./ParticleScene";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 text-center relative">
            {/* Background continuation */}
            <div className="absolute inset-0 z-1 opacity-40">
                <ParticleScene />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-transparent via-black/20 to-black"></div>

            {/* Glow elements */}
            <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full top-20 left-20 z-1"></div>
            <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full bottom-10 right-10 z-1"></div>

            {/* Skills content */}
            <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-14">
                    Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Frontend */}
                    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl transition duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

                        {/* Icons */}
                        <div className="flex justify-center gap-4 text-3xl text-blue-400 mb-5">
                            <FaReact />
                            <SiNextdotjs />
                            <SiTypescript />
                            <SiTailwindcss />
                            <SiJavascript />
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Frontend</h3>

                        {/* Skills badges */}
                        <div className="flex flex-wrap justify-center gap-2 text-sm">
                            {["React", "Next.js", "TypeScript", "Tailwind", "JavaScript"].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/10 rounded-full border border-white/10">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Tools */}
                    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl transition duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

                        <div className="flex justify-center gap-4 text-3xl text-blue-400 mb-5">
                            <FaGitAlt />
                            <SiGithub />
                            <SiVercel />
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Tools</h3>

                        <div className="flex flex-wrap justify-center gap-2 text-sm">
                            {["Git", "GitHub", "Vercel"].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/10 rounded-full border border-white/10">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Learning */}
                    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl transition duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

                        <div className="text-3xl text-purple-400 mb-5">
                            🚀
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Learning</h3>

                        <div className="flex flex-wrap justify-center gap-2 text-sm">
                            {["Backend", "APIs", "Node.js"].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/10 rounded-full border border-white/10">
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