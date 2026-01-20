'use client';

import { Build, CarConfig } from './types';

const STORAGE_KEY = 'car-configurator-builds';

export function useBuilds() {
  const getBuilds = (): Build[] => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  const saveBuild = (config: CarConfig): Build => {
    const build: Build = {
      id: Date.now().toString(),
      name: `Build ${new Date().toLocaleString()}`,
      config,
      createdAt: new Date().toISOString(),
    };

    const builds = getBuilds();
    builds.unshift(build);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(builds));
    }

    return build;
  };

  const deleteBuild = (id: string) => {
    const builds = getBuilds().filter(build => build.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(builds));
    }
  };

  const clearAllBuilds = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return { getBuilds, saveBuild, deleteBuild, clearAllBuilds };
}