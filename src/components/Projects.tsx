'use client'
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="relative py-28 px-4 sm:px-6 overflow-hidden">

            {/* 🌌 Background bridge */}
            <div className="absolute inset-0 -z-20 bg-linear-to-b from-black via-black/90 to-black"></div>

            {/* ✨ subtle glow */}
            <div className="absolute w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full top-20 right-10 -z-10"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:shadow-xl hover:shadow-blue-500/10 transition"
                        >

                            {/* 📸 Image */}
                            <div className="relative h-48 sm:h-56">
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* 🔥 Overlay */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                                <a
                                    href={p.live}
                                    target="_blank"
                                    className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:scale-105 transition"
                                >
                                    Live
                                </a>

                                <a
                                    href={p.github}
                                    target="_blank"
                                    className="border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition"
                                >
                                    Code
                                </a>

                            </div>

                            {/* 📄 Content */}
                            <div className="p-5 text-left">

                                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{p.desc}</p>

                                {/* 🏷 Tech badges */}
                                <div className="flex flex-wrap gap-2 text-xs">
                                    {p.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/10 rounded-md border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}