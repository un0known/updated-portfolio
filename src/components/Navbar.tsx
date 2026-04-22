'use client'
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/0 rounded-b-lg border-white/10 z-50 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4">
                <h1 className="font-medium text-3xl text-gray-500 hover:text-white transition">

                    <a href='/resume/deepakResume.pdf' target="blank" className="relative group">
                        <span className="relative">
                            Resume
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </span></a>

                </h1>

                <div className="flex gap-6 text-2xl">
                    <Link
                        href="#projects"
                        className="relative group text-gray-500 hover:text-white transition"
                    >
                        <span className="relative">
                            Projects
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link
                        href="#skills"
                        className="relative group text-gray-500 hover:text-white transition"
                    >
                        <span className="relative">
                            Skills
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                        </span>
                    </Link>
                    <Link
                        href="#contact"
                        className="relative group text-gray-500 hover:text-white transition"
                    >
                        <span className="relative">
                            Contact
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </Link>
                    {/* <Link href="#projects"
                        className="hover:border-b-violet-800 hover:border-b hover:transition-all pb-1">Projects</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#contact">Contact</Link> */}
                </div>
                {/* <ThemeToggle /> */}
            </div>
        </nav>
    );
}