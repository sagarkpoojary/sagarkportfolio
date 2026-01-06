import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Background3DProps {
  isDark: boolean;
}

function ParticleField({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  
  const sphere = useMemo(() => {
    const temp = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
        temp[i] = (Math.random() - 0.5) * 10;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points 
      ref={ref} 
      positions={sphere} 
      stride={3} 
      frustumCulled={false}
      rotation={[0, 0, Math.PI / 4]}
    >
      <PointMaterial
        transparent
        color={isDark ? "#0ea5e9" : "#0284c7"}
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDark ? 0.6 : 0.4}
      />
    </Points>
  );
}

export const Background3D: React.FC<Background3DProps> = ({ isDark }) => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleField isDark={isDark} />
      </Canvas>
    </div>
  );
};