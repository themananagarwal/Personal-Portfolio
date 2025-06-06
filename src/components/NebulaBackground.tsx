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
      
      // Create organic nebula shape with spiral arms
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.pow(Math.random(), 0.4) * 8; // More density in center
      const height = (Math.random() - 0.5) * 4;
      
      // Add spiral arms and organic noise
      const spiralFactor = Math.sin(angle * 2.5 + radius * 0.3) * 1.5;
      const organicNoise = (Math.random() - 0.5) * 3;
      
      positions[i3] = Math.cos(angle) * radius + spiralFactor + organicNoise * 0.5;
      positions[i3 + 1] = height + Math.sin(radius * 0.2) * 2 + organicNoise * 0.3;
      positions[i3 + 2] = Math.sin(angle) * radius + spiralFactor * 0.7 + organicNoise * 0.5;
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
        
        {/* Additional nebula layers with vibrant colors */}
        <Points positions={useMemo(() => {
          const positions = new Float32Array(1000 * 3);
          for (let i = 0; i < 1000; i++) {
            const i3 = i * 3;
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.pow(Math.random(), 0.5) * 6;
            const height = (Math.random() - 0.5) * 3;
            const spiralOffset = Math.sin(angle * 3 + radius * 0.4) * 1.2;
            
            positions[i3] = Math.cos(angle) * radius + spiralOffset;
            positions[i3 + 1] = height + Math.sin(radius * 0.3) * 1.5;
            positions[i3 + 2] = Math.sin(angle) * radius + spiralOffset * 0.6;
          }
          return positions;
        }, [])}>
          <PointMaterial
            size={0.03}
            color="#ff0099"
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
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.pow(Math.random(), 0.6) * 4;
            const height = (Math.random() - 0.5) * 2;
            const spiralOffset = Math.cos(angle * 2 + radius * 0.5) * 0.8;
            
            positions[i3] = Math.cos(angle) * radius + spiralOffset;
            positions[i3 + 1] = height + Math.sin(radius * 0.4) * 1;
            positions[i3 + 2] = Math.sin(angle) * radius + spiralOffset * 0.5;
          }
          return positions;
        }, [])}>
          <PointMaterial
            size={0.08}
            color="#6600ff"
            transparent
            opacity={0.4}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Canvas>
      
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at center, rgba(102, 0, 255, 0.15) 0%, rgba(0, 128, 255, 0.1) 40%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default NebulaBackground;