'use client';

import { useConfigState } from '@/lib/useConfigState';
import { useToast } from '@/lib/useToast';
import { useBuilds } from '@/lib/useBuilds';
import { PAINT_OPTIONS, WHEEL_OPTIONS, ENV_OPTIONS, CAM_OPTIONS } from '@/lib/types';

export default function ConfiguratorPage() {
  const { config, updateConfig, resetConfig } = useConfigState();
  const { showToast, isVisible, message } = useToast();
  const { saveBuild } = useBuilds();

  const handleShare = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    showToast('Configuration URL copied to clipboard!');
  };

  const handleSave = () => {
    saveBuild(config);
    showToast('Configuration saved to gallery!');
  };

  const handleReset = () => {
    resetConfig();
    showToast('Configuration reset to default');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Car Configurator</h1>
      
      {isVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
          <p className="text-gray-500">3D View (Coming in Phase 3)</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Paint Color</label>
                <div className="grid grid-cols-3 gap-2">
                  {PAINT_OPTIONS.map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateConfig({ paint: option.value })}
                      className={`p-2 rounded border-2 transition-all ${
                        config.paint === option.value 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className={`w-full h-6 rounded ${option.color} mb-1`} />
                      <span className="text-xs">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Wheels</label>
                <select
                  value={config.wheels}
                  onChange={(e) => updateConfig({ wheels: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  {WHEEL_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Environment</label>
                <select
                  value={config.env}
                  onChange={(e) => updateConfig({ env: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  {ENV_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Camera Angle</label>
                <select
                  value={config.cam}
                  onChange={(e) => updateConfig({ cam: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  {CAM_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleShare}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Share Configuration
            </button>
            
            <button
              onClick={handleSave}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Save to Gallery
            </button>
            
            <button
              onClick={handleReset}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
