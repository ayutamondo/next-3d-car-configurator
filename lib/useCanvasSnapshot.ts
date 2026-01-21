import { useRef } from 'react';

export function useCanvasSnapshot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const captureSnapshot = (): string | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    try {
      const dataURL = canvas.toDataURL('image/jpeg', 0.8);
      return dataURL;
    } catch (error) {
      console.error('Failed to capture canvas snapshot:', error);
      return null;
    }
  };

  return { canvasRef, captureSnapshot };
}