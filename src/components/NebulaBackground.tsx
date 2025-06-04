import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NebulaParticlesProps {
  isHovered: boolean;
  animationPhase: 'burst' | 'settle' | 'static';
}

const NebulaParticles = ({ isHovered, animationPhase }: NebulaParticlesProps) => {
  const ref = useRef<THREE.Points>(null);
  const particleCount = 2000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Create spiral galaxy-like distribution
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Spiral galaxy pattern
      const radius = Math.random() * 4 + 0.5;
      const angle = Math.random() * Math.PI * 2;
      const spiralOffset = radius * 0.5;
      
      positions[i3] = Math.cos(angle + spiralOffset) * radius + (Math.random() - 0.5) * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * 3;
      positions[i3 + 2] = Math.sin(angle + spiralOffset) * radius + (Math.random() - 0.5) * 2;
      
      // Color gradient from blue to teal to white
      const colorVariant = Math.random();
      if (colorVariant < 0.4) {
        // Blue tones
        colors[i3] = 0.2 + Math.random() * 0.3; // R
        colors[i3 + 1] = 0.4 + Math.random() * 0.4; // G
        colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
      } else if (colorVariant < 0.7) {
        // Teal tones
        colors[i3] = 0.1 + Math.random() * 0.2; // R
        colors[i3 + 1] = 0.6 + Math.random() * 0.3; // G
        colors[i3 + 2] = 0.7 + Math.random() * 0.3; // B
      } else {
        // White/light tones
        colors[i3] = 0.8 + Math.random() * 0.2; // R
        colors[i3 + 1] = 0.9 + Math.random() * 0.1; // G
        colors[i3 + 2] = 1.0; // B
      }
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    
    // Rotation and movement
    ref.current.rotation.y = time * 0.1;
    ref.current.rotation.z = Math.sin(time * 0.2) * 0.1;
    
    // Hover effect - ripple distortion
    if (isHovered) {
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        const distance = Math.sqrt(x * x + z * z);
        
        // Create ripple effect
        const ripple = Math.sin(distance * 2 - time * 4) * 0.1;
        positions[i3 + 1] += ripple * 0.1;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
    
    // Burst animation
    if (animationPhase === 'burst') {
      const burstProgress = Math.min(time / 1.5, 1);
      const scale = 0.3 + burstProgress * 0.7;
      ref.current.scale.setScalar(scale);
      
      // Expand particles outward during burst
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const expansionFactor = burstProgress * 0.5;
        positions[i3] *= (1 + expansionFactor * Math.random() * 0.3);
        positions[i3 + 2] *= (1 + expansionFactor * Math.random() * 0.3);
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
    
    // Subtle pulsing in static phase
    if (animationPhase === 'static') {
      const pulse = 1 + Math.sin(time * 0.5) * 0.05;
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        opacity={0.8}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </Points>
  );
};

interface NebulaBackgroundProps {
  isHovered: boolean;
}

const NebulaBackground = ({ isHovered }: NebulaBackgroundProps) => {
  const [animationPhase, setAnimationPhase] = React.useState<'burst' | 'settle' | 'static'>('burst');
  
  useEffect(() => {
    // Transition through animation phases
    const burstTimer = setTimeout(() => setAnimationPhase('settle'), 1500);
    const settleTimer = setTimeout(() => setAnimationPhase('static'), 2000);
    
    return () => {
      clearTimeout(burstTimer);
      clearTimeout(settleTimer);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#00aaff" />
        <NebulaParticles isHovered={isHovered} animationPhase={animationPhase} />
        
        {/* Additional glow effect */}
        <mesh position={[0, 0, -2]}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshBasicMaterial
            color="#0080ff"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Canvas>
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 80%)'
        }}
      />
    </div>
  );
};

export default NebulaBackground;