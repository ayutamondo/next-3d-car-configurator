'use client';

import { useBuilds } from '@/lib/useBuilds';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Build } from '@/lib/types';

export default function GalleryPage() {
  const { getBuilds, deleteBuild } = useBuilds();
  const [builds, setBuilds] = useState<Build[]>([]);
  const router = useRouter();

  useEffect(() => {
    setBuilds(getBuilds());
  }, [getBuilds]);

  const handleOpen = (build: Build) => {
    const params = new URLSearchParams();
    params.set('paint', build.config.paint);
    params.set('wheels', build.config.wheels);
    params.set('env', build.config.env);
    params.set('cam', build.config.cam);
    
    router.push(`/configurator?${params.toString()}`);
  };

  const handleDelete = (id: string) => {
    deleteBuild(id);
    setBuilds(getBuilds());
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getConfigSummary = (config: Build['config']) => {
    const paintOption = config.paint.charAt(0).toUpperCase() + config.paint.slice(1);
    const wheelOption = config.wheels.charAt(0).toUpperCase() + config.wheels.slice(1);
    return `${paintOption} paint, ${wheelOption} wheels`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      
      {builds.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-gray-500 mb-4">No saved builds yet</p>
            <p className="text-gray-400 text-sm">
              Create your first configuration in the configurator and save it to see it here.
            </p>
            <button
              onClick={() => router.push('/configurator')}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Go to Configurator
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builds.map((build) => (
            <div key={build.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                {build.thumbnail ? (
                  <Image 
                    src={build.thumbnail} 
                    alt={build.name} 
                    width={300} 
                    height={192} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">No thumbnail</p>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{build.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{getConfigSummary(build.config)}</p>
                <p className="text-gray-400 text-xs mb-4">{formatDate(build.createdAt)}</p>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpen(build)}
                    className="flex-1 bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Open
                  </button>
                  <button
                    onClick={() => handleDelete(build.id)}
                    className="bg-red-500 text-white py-2 px-3 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
