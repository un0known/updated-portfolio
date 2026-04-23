'use client'
import Link from "next/link";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="fixed top-0 overflow-hidden w-full backdrop-blur-lg bg-white/0 rounded-b-lg border-white/10 z-50 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-0">
                {/* Logo / Resume */}
                <h1 className="font-medium text-3xl text-gray-500 hover:text-white transition">
                    <a href='/resume/deepakResume.pdf' target="blank" className="relative group">
                        <span className="relative">
                            Resume
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </span></a>

                </h1>

                <div className="flex gap-6 text-2xl">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-lg">
                        {["projects", "skills", "contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                className="relative group text-gray-400 hover:text-white transition"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <RxCross1 size={28} /> : <IoMenuOutline size={28} />}
                    </button>
                </div>
                {/* <ThemeToggle /> */}
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden flex flex-col items-center gap-6 py-6  z-10 backdrop-blur-lg bg-white/0"
                    >
                        {["projects", "skills", "contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                onClick={() => setOpen(false)}
                                className="text-lg text-gray-300 hover:text-white transition"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}