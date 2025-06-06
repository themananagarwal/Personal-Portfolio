import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NebulaBackgroundProps {
  isHovered: boolean;
}

function ParticleNebula({ isHovered }: { isHovered: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create particle positions
  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    
    return positions;
  }, []);

  // Animation
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotate the entire nebula slowly
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.z = Math.cos(time * 0.1) * 0.05;
    
    // Scale effect on hover
    const targetScale = isHovered ? 1.3 : 1;
    pointsRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    
    // Update particle positions for floating effect
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3 + 1] += Math.sin(time * 0.5 + i * 0.1) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        size={0.05}
        color="#0080ff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ParticleStars() {
  const starCount = 500;
  const positions = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;
    }
    
    return positions;
  }, []);

  return (
    <Points positions={positions}>
      <PointMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

const NebulaBackground = ({ isHovered }: NebulaBackgroundProps) => {
  return (
    <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ParticleStars />
        <ParticleNebula isHovered={isHovered} />
        
        {/* Additional nebula layers with soft sci-fi colors */}
        <Points positions={useMemo(() => {
          const positions = new Float32Array(1000 * 3);
          for (let i = 0; i < 1000; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 12;
            positions[i3 + 1] = (Math.random() - 0.5) * 12;
            positions[i3 + 2] = (Math.random() - 0.5) * 12;
          }
          return positions;
        }, [])}>
          <PointMaterial
            size={0.03}
            color="#00cccc"
            transparent
            opacity={0.5}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
        
        <Points positions={useMemo(() => {
          const positions = new Float32Array(800 * 3);
          for (let i = 0; i < 800; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 10;
            positions[i3 + 1] = (Math.random() - 0.5) * 10;
            positions[i3 + 2] = (Math.random() - 0.5) * 10;
          }
          return positions;
        }, [])}>
          <PointMaterial
            size={0.08}
            color="#66ccff"
            transparent
            opacity={0.3}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Canvas>
      
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at center, rgba(0, 204, 204, 0.1) 0%, rgba(0, 128, 255, 0.08) 40%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default NebulaBackground;