'use client'
import { useEffect, useState } from "react";

const techStack = [
    "HTML", "CSS", "JavaScript", "React",
    "Next.js", "TypeScript", "Tailwind", "Git"
];

export default function TechBackground() {
    const [positions, setPositions] = useState<any[]>([]);

    useEffect(() => {
        const pos = techStack.map(() => ({
            top: Math.random() * 80,
            left: Math.random() * 80,
            rotate: Math.random() * 40 - 20,
            size: Math.random() > 0.5 ? "text-4xl" : "text-3xl"
        }));
        setPositions(pos);
    }, []);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {techStack.map((tech, i) => (
                <span
                    key={i}
                    className={`absolute text-white/5 font-bold ${positions[i]?.size}`}
                    style={{
                        top: `${positions[i]?.top || 0}%`,
                        left: `${positions[i]?.left || 0}%`,
                        transform: `rotate(${positions[i]?.rotate || 0}deg)`
                    }}
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}