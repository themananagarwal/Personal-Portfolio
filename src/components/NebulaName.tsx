// src/components/NebulaName.tsx

// src/components/NebulaName.tsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const NebulaParticles = () => {
  const mesh = useRef<THREE.Points>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0005;
      mesh.current.rotation.x += 0.0003;
    }
  });

  const count = 2000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#80dfff"
        size={0.07}
        sizeAttenuation
        depthWrite={false}
        transparent
      />
    </points>
  );
};

const NebulaName = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  const handleHover = () => {
    gsap.to(nameRef.current, {
      scale: 1.1,
      textShadow: '0 0 20px #80dfff',
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    gsap.to(nameRef.current, {
      scale: 1.0,
      textShadow: '0 0 10px #80dfff',
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <NebulaParticles />
        <Sparkles count={100} scale={[8, 8, 8]} size={2} speed={0.4} color="#80dfff" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <h1
        ref={nameRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="absolute text-white text-4xl sm:text-6xl font-bold tracking-wide text-center"
        style={{ textShadow: '0 0 10px #80dfff', transition: 'all 0.3s ease-in-out' }}
      >
        Manan Agarwal
      </h1>
    </div>
  );
};

export default NebulaName;
