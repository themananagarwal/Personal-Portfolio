// src/components/NebulaName.tsx

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const ParticleBurst = () => {
  const ref = useRef<THREE.Points>(null);
  const [burstDone, setBurstDone] = useState(false);

  useFrame(() => {
    if (!burstDone && ref.current) {
      const positions = (ref.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * 0.5;
        positions[i + 1] += (Math.random() - 0.5) * 0.5;
        positions[i + 2] += (Math.random() - 0.5) * 0.5;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
      setBurstDone(true);
    }
  });

  const particles = new Float32Array(1500 * 3);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = (Math.random() - 0.5) * 5;
  }

  return (
    <points ref={ref} position={[0, 0, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="#80dfff"
        size={0.04}
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
    gsap.to(nameRef.current, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
  };

  const handleLeave = () => {
    gsap.to(nameRef.current, { scale: 1.0, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <ParticleBurst />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <h1
        ref={nameRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="absolute text-white text-4xl sm:text-6xl font-bold tracking-wide drop-shadow-lg"
      >
        Manan Agarwal
      </h1>
    </div>
  );
};

export default NebulaName;
