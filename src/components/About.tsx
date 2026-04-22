export default function About() {
    return (
        <section className="relative py-28 px-6 overflow-hidden text-center">
            {/* 🌌 background continuation */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-black via-black/90 to-blue-950/30"></div>

            {/* ✨ soft glow */}
            <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full left-20 top-10 z-1"></div>

            <div className="relative z-10 max-w-2xl mx-auto">

                <h2 className="text-3xl font-bold mb-6">About</h2>

                <p className="text-gray-400 leading-relaxed">
                    I started as a beginner and now build modern web apps using Next.js and TypeScript.
                    I focus on performance, clean UI and real-world solutions.
                </p>

            </div>
        </section>
    );
}