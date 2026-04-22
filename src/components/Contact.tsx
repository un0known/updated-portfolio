export default function Contact() {
    return (
        // <section id="contact" className="relative py-28 px-6 overflow-hidden text-center">
        //     {/* fade out */}
        //     <div className="absolute inset-0 z-1 bg-linear-to-b from-blue-950/20 via-black to-black"></div>

        //     {/* center glow */}
        //     <div className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-10 z-1"></div>


        //     <div className="relative z-2">
        //         <h2 className="text-3xl font-bold mb-6">Contact</h2>

        //         <p className="text-gray-400 mb-4">Let’s work together 🚀</p>

        //         <p>Email: your@email.com</p>

        //         <div className="flex justify-center gap-6 mt-4">
        //             <a href="#">GitHub</a>
        //             <a href="#">LinkedIn</a>
        //         </div>
        //     </div>
        // </section>
        <section className="relative py-28 px-6 overflow-hidden text-center">

            {/* 🌌 gradient fade */}
            <div className="absolute inset-0 -z-20 bg-linear-to-b from-blue-950/20 via-black to-black"></div>

            {/* 💎 center glow */}
            <div className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-10 -z-10"></div>

            <div className="relative z-10">

                <h2 className="text-3xl font-bold mb-6">Contact</h2>

                <p className="text-gray-400 mb-6">Let’s work together 🚀</p>

                <a
                    href="mailto:deepakmehra7830@gmail.com"
                    className="inline-block bg-blue-600 px-6 py-2 rounded-xl shadow-lg shadow-blue-500/30 hover:scale-105 transition"
                >
                    Email Me
                </a>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                </div>

            </div>

        </section>
    );
}