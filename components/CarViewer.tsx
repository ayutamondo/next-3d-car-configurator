'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import { CarConfig } from '@/lib/types';

interface CarModelProps {
  config: CarConfig;
  onError?: (error: Error) => void;
}

function CarModel({ config, onError }: CarModelProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleWebGLContextLost = (event: Event) => {
      event.preventDefault();
      setHasError(true);
      onError?.(new Error('WebGL context lost'));
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('webglcontextlost', handleWebGLContextLost);
      return () => {
        canvas.removeEventListener('webglcontextlost', handleWebGLContextLost);
      };
    }
  }, [onError]);

  if (hasError) {
    return null;
  }

  try {
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
  } catch (error) {
    onError?.(error as Error);
    return null;
  }
}

interface FallbackViewProps {
  config: CarConfig;
}

function FallbackView({ config }: FallbackViewProps) {
  const paintColor = config.paint === 'red' ? '#ef4444' : 
                    config.paint === 'blue' ? '#3b82f6' :
                    config.paint === 'black' ? '#000000' :
                    config.paint === 'white' ? '#ffffff' :
                    '#9ca3af';

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div 
          className="w-32 h-16 mx-auto mb-4 rounded"
          style={{ backgroundColor: paintColor }}
        />
        <p className="text-gray-600 mb-2">3D View Unavailable</p>
        <p className="text-sm text-gray-500">
          {config.paint.charAt(0).toUpperCase() + config.paint.slice(1)} Car
        </p>
        <p className="text-xs text-gray-400 mt-2">
          {config.wheels.charAt(0).toUpperCase() + config.wheels.slice(1)} Wheels
        </p>
      </div>
    </div>
  );
}

interface CarViewerProps {
  config: CarConfig;
  onCanvasReady?: (canvas: HTMLCanvasElement) => void;
}

export default function CarViewer({ config, onCanvasReady }: CarViewerProps) {
  const [hasError, setHasError] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          setIsWebGLSupported(false);
          return false;
        }
        return true;
      } catch (error) {
        setIsWebGLSupported(false);
        return false;
      }
    };

    const supported = checkWebGLSupport();
    if (!supported) {
      setHasError(true);
    }
  }, []);

  const handleError = () => {
    setHasError(true);
  };

  if (!isWebGLSupported || hasError) {
    return <FallbackView config={config} />;
  }

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
        onCreated={({ gl }) => {
          if (onCanvasReady && gl.domElement) {
            onCanvasReady(gl.domElement);
          }
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <CarModel config={config} onError={handleError} />
          
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