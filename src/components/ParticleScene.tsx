'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Particles() {
    const ref = useRef<THREE.Points>(null!)

    // random particle positions
    const particles = useMemo(() => {
        const count = 1500
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }

        return positions
    }, [])

    // slow rotation animation
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.0008
        }
    })

    return (
        <Points ref={ref} positions={particles} stride={3}>
            <PointMaterial
                transparent
                color="#3b82f6"
                size={0.02}
                sizeAttenuation
                depthWrite={false}
            />
        </Points>
    )
}

export default function ParticleScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5] }}
            gl={{ alpha: true }}
            dpr={[1, 2]}
            style={{ width: '100%', height: '100%' }}
        >
            <Particles />
        </Canvas>
    )
}