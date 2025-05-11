
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Particles = ({ count = 200 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 4;
      light.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.4) * 4;
    }
    
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={10} intensity={2} color="#0071e3" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </instancedMesh>
    </>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <Particles />
        <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#0071e3" 
            wireframe 
            transparent
            opacity={0.15}
            emissive="#0071e3"
            emissiveIntensity={0.5}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
