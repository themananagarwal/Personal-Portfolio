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
      
      // Create a nebula-like distribution
      const radius = Math.random() * 8 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
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
        color="#00aaff"
        transparent
        opacity={0.6}
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
        
        {/* Additional nebula layers with different colors */}
        <Points positions={useMemo(() => {
          const positions = new Float32Array(1000 * 3);
          for (let i = 0; i < 1000; i++) {
            const i3 = i * 3;
            const radius = Math.random() * 6 + 1;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
          }
          return positions;
        }, [])}>
          <PointMaterial
            size={0.03}
            color="#00ffff"
            transparent
            opacity={0.4}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
        
        <Points positions={useMemo(() => {
          const positions = new Float32Array(800 * 3);
          for (let i = 0; i < 800; i++) {
            const i3 = i * 3;
            const radius = Math.random() * 4 + 1;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
          }
          return positions;
        }, [])}>
          <PointMaterial
            size={0.08}
            color="#64c8ff"
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
          background: 'radial-gradient(circle at center, rgba(0, 170, 255, 0.1) 0%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default NebulaBackground;