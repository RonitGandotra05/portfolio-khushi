import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, MeshDistortMaterial } from '@react-three/drei';

export function DNAHelix(props) {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} {...props}>
      {[...Array(15)].map((_, i) => (
        <group 
          key={i} 
          position={[0, i * 0.4 - 3, 0]} 
          rotation={[0, (i * Math.PI) / 5, 0]}
        >
          {/* First strand */}
          <Box 
            args={[0.3, 0.1, 0.1]} 
            position={[0.5, 0, 0]}
          >
            <MeshDistortMaterial
              color="#E5E7EB"
              envMapIntensity={3}
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0.9}
              roughness={0.1}
              distort={0.2}
              speed={0.5}
              transparent
              opacity={0.9}
              alphaTest={0.5}
            />
          </Box>
          
          {/* Second strand */}
          <Box 
            args={[0.3, 0.1, 0.1]} 
            position={[-0.5, 0, 0]}
          >
            <MeshDistortMaterial
              color="#9CA3AF"
              envMapIntensity={3}
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0.9}
              roughness={0.1}
              distort={0.2}
              speed={0.5}
              transparent
              opacity={0.9}
              alphaTest={0.5}
            />
          </Box>

          {/* Connecting lines */}
          <Box 
            args={[1, 0.02, 0.02]} 
            position={[0, 0, 0]}
          >
            <meshPhysicalMaterial
              color="#D1D5DB"
              emissive="#F3F4F6"
              emissiveIntensity={0.8}
              metalness={1}
              roughness={0.1}
              transparent
              opacity={0.7}
              alphaTest={0.5}
              depthWrite={false}
            />
          </Box>
        </group>
      ))}
    </group>
  );
}

export default DNAHelix; 