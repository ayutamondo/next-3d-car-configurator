'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { CarConfig, DEFAULT_CONFIG } from './types';

export function useConfigState() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const config: CarConfig = {
    paint: searchParams.get('paint') || DEFAULT_CONFIG.paint,
    wheels: searchParams.get('wheels') || DEFAULT_CONFIG.wheels,
    env: searchParams.get('env') || DEFAULT_CONFIG.env,
    cam: searchParams.get('cam') || DEFAULT_CONFIG.cam,
  };

  const updateConfig = (updates: Partial<CarConfig>) => {
    const newConfig = { ...config, ...updates };
    const params = new URLSearchParams(searchParams);
    
    Object.entries(newConfig).forEach(([key, value]) => {
      params.set(key, value);
    });

    router.replace(`/configurator?${params.toString()}`);
  };

  const resetConfig = () => {
    router.replace('/configurator');
  };

  return { config, updateConfig, resetConfig };
}