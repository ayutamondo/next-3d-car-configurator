'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { CarConfig } from '@/lib/types';

interface CarModelProps {
  config: CarConfig;
}

function CarModel({ config }: CarModelProps) {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 1, 4]} />
      <meshStandardMaterial 
        color={config.paint === 'red' ? '#ef4444' : 
               config.paint === 'blue' ? '#3b82f6' :
               config.paint === 'black' ? '#000000' :
               config.paint === 'white' ? '#ffffff' :
               '#9ca3af'} 
      />
    </mesh>
  );
}

interface CarViewerProps {
  config: CarConfig;
}

export default function CarViewer({ config }: CarViewerProps) {
  const getEnvironmentPreset = () => {
    switch (config.env) {
      case 'studio': return 'studio';
      case 'outdoor': return 'sunset';
      case 'night': return 'night';
      default: return 'studio';
    }
  };

  const getCameraPosition = () => {
    switch (config.cam) {
      case 'front': return [0, 1, 5];
      case 'side': return [5, 1, 0];
      case 'rear': return [0, 1, -5];
      default: return [3, 2, 3];
    }
  };

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ 
          position: getCameraPosition() as [number, number, number],
          fov: 50
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <CarModel config={config} />
          
          <Environment preset={getEnvironmentPreset()} />
          <OrbitControls 
            enablePan={false}
            minDistance={2}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}