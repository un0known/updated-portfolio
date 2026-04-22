'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';

export default function ThreeScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]} // Better resolution on retina screens
            style={{ width: '100%', height: '100%' }}
        // gl={{ alpha: true }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />

            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#3b82f6"
                        metalness={0.6}
                        roughness={0.2} />
                </mesh>
            </Float>

            <Environment preset="city" />
            {/* <OrbitControls makeDefault /> */}
        </Canvas>
    );
}