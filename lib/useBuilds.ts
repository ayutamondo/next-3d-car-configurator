'use client';

import { Build, CarConfig } from './types';

const STORAGE_KEY = 'car-configurator-builds';
const MAX_BUILDS = 20;

export function useBuilds() {
  const getBuilds = (): Build[] => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    const builds = stored ? JSON.parse(stored) : [];
    return builds.slice(0, MAX_BUILDS);
  };

  const saveBuild = (config: CarConfig, thumbnail?: string): Build => {
    const build: Build = {
      id: Date.now().toString(),
      name: `Build ${new Date().toLocaleString()}`,
      config,
      thumbnail,
      createdAt: new Date().toISOString(),
    };

    const builds = getBuilds();
    builds.unshift(build);
    
    const limitedBuilds = builds.slice(0, MAX_BUILDS);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedBuilds));
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

  const isStorageFull = (): boolean => {
    const builds = getBuilds();
    return builds.length >= MAX_BUILDS;
  };

  return { getBuilds, saveBuild, deleteBuild, clearAllBuilds, isStorageFull, MAX_BUILDS };
}