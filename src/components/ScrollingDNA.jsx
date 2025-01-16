import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { DNAHelix } from './DNAHelix';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingDNA = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.2]);

  return (
    <div className="fixed top-0 right-0 w-3/5 h-screen pointer-events-none z-0" ref={containerRef}>
      <motion.div 
        className="w-full h-full blur-[2px]"
        style={{
          y: yPos,
          opacity
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ 
            background: 'transparent',
            position: 'absolute',
            top: 0,
            right: '-10%',
            width: '110%',
            height: '100%',
            filter: 'blur(1px)'
          }}
          gl={{
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: false,
            clearColor: 'transparent'
          }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#FFFFFF" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#E5E7EB" />
          <DNAHelix position={[0, 0, 0]} scale={1.5} />
          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default ScrollingDNA; 