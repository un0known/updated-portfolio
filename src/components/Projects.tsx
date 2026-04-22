import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="relative py-28 px-6 overflow-hidden">

            {/* darker gradient */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-black via-black/90 to-black"></div>

            {/* subtle glow */}
            <div className="absolute w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full top-20 right-20 z-1"></div>


            <div className="relative z-2">
                <h2 className="text-3xl text-center font-bold mb-10">Projects</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <div key={i} className=" p-6 rounded-2xl hover:scale-105 transition  duration-300 hover:border-blue-500
                    bg-white/10 backdrop-blur-md border border-white/20">

                            <h3 className="text-xl font-semibold">{p.title}</h3>
                            <p className="text-gray-400 my-2">{p.desc}</p>

                            <div className="flex gap-2 flex-wrap text-sm text-gray-500">
                                {p.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}