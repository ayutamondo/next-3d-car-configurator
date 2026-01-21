'use client';

import { useState } from 'react';

export default function SpecsPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'compare' | 'faq'>('features');

  const features = [
    {
      title: '3D Visualization',
      description: 'Interactive 3D car model with orbit controls and real-time rendering',
      icon: '🎮'
    },
    {
      title: 'Customization Options',
      description: 'Choose from multiple paint colors, wheel styles, environments, and camera angles',
      icon: '🎨'
    },
    {
      title: 'Save & Share',
      description: 'Save configurations to gallery and share via URL with embedded state',
      icon: '💾'
    },
    {
      title: 'Gallery Management',
      description: 'Browse, restore, and manage saved configurations with thumbnails',
      icon: '🖼️'
    },
    {
      title: 'URL State Sync',
      description: 'Configuration automatically syncs with URL parameters for easy sharing',
      icon: '🔗'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive interface that works on desktop, tablet, and mobile',
      icon: '📱'
    }
  ];

  const specs = [
    { category: 'Performance', items: [
      { name: '0-60 mph', value: '3.2 seconds' },
      { name: 'Top Speed', value: '180 mph' },
      { name: 'Horsepower', value: '450 HP' },
      { name: 'Torque', value: '430 lb-ft' }
    ]},
    { category: 'Dimensions', items: [
      { name: 'Length', value: '178.9 in' },
      { name: 'Width', value: '82.7 in' },
      { name: 'Height', value: '54.1 in' },
      { name: 'Wheelbase', value: '107.9 in' }
    ]},
    { category: 'Efficiency', items: [
      { name: 'City MPG', value: '18 mpg' },
      { name: 'Highway MPG', value: '26 mpg' },
      { name: 'Combined MPG', value: '21 mpg' },
      { name: 'Range', value: '350 miles' }
    ]}
  ];

  const presets = [
    {
      name: 'Sport Edition',
      config: { paint: 'red', wheels: 'sport', env: 'studio', cam: 'default' },
      specs: {
        '0-60 mph': '3.1s',
        'Top Speed': '185 mph',
        'Horsepower': '475 HP',
        'Torque': '450 lb-ft',
        'Weight': '3,450 lbs'
      },
      description: 'Track-focused performance with aggressive styling and maximum power output.'
    },
    {
      name: 'Luxury Touring',
      config: { paint: 'black', wheels: 'luxury', env: 'studio', cam: 'default' },
      specs: {
        '0-60 mph': '3.4s',
        'Top Speed': '175 mph',
        'Horsepower': '425 HP',
        'Torque': '400 lb-ft',
        'Weight': '3,620 lbs'
      },
      description: 'Premium comfort with advanced technology and refined driving dynamics.'
    },
    {
      name: 'All-Rounder',
      config: { paint: 'blue', wheels: 'sport', env: 'outdoor', cam: 'default' },
      specs: {
        '0-60 mph': '3.2s',
        'Top Speed': '180 mph',
        'Horsepower': '450 HP',
        'Torque': '430 lb-ft',
        'Weight': '3,535 lbs'
      },
      description: 'Balanced performance for daily driving and weekend adventures.'
    }
  ];

  const faqs = [
    {
      question: 'How do I save a configuration?',
      answer: 'Click the "Save to Gallery" button in the configurator. Your configuration will be saved to your browser\'s local storage.'
    },
    {
      question: 'Can I share my configuration with others?',
      answer: 'Yes! Click the "Share Configuration" button to copy the URL to your clipboard. The link contains all your configuration settings.'
    },
    {
      question: 'Where are my saved configurations stored?',
      answer: 'Configurations are stored in your browser\'s local storage. They are only available on the same browser and device where they were created.'
    },
    {
      question: 'How many configurations can I save?',
      answer: `Maximum of 20 builds can be saved. Gallery storage is optimized to maintain performance while preserving your favorite configurations.`
    },
    {
      question: 'What browsers are supported?',
      answer: 'The configurator works best on modern browsers like Chrome, Firefox, Safari, and Edge. WebGL support is required for 3D visualization.'
    },
    {
      question: 'Can I delete saved configurations?',
      answer: 'Yes, go to the Gallery page and click the Delete button on any configuration you want to remove.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Specifications</h1>
      
      <div className="mb-8">
        <div className="flex space-x-1 border-b">
          {(['features', 'specs', 'compare', 'faq'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'features' && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'specs' && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {specs.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                <div className="p-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between py-2 border-b last:border-b-0">
                      <span className="text-gray-600">{item.name}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'compare' && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Compare Presets</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Preset</th>
                  <th className="text-left p-4 font-semibold">Paint</th>
                  <th className="text-left p-4 font-semibold">Wheels</th>
                  <th className="text-left p-4 font-semibold">0-60 mph</th>
                  <th className="text-left p-4 font-semibold">Top Speed</th>
                  <th className="text-left p-4 font-semibold">Horsepower</th>
                  <th className="text-left p-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {presets.map((preset, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{preset.name}</td>
                    <td className="p-4 capitalize">{preset.config.paint}</td>
                    <td className="p-4 capitalize">{preset.config.wheels}</td>
                    <td className="p-4 font-mono">{preset.specs['0-60 mph']}</td>
                    <td className="p-4 font-mono">{preset.specs['Top Speed']}</td>
                    <td className="p-4 font-mono">{preset.specs.Horsepower}</td>
                    <td className="p-4 text-sm text-gray-600 max-w-xs">{preset.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {presets.map((preset, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold">{preset.name}</h3>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paint:</span>
                    <span className="capitalize">{preset.config.paint}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wheels:</span>
                    <span className="capitalize">{preset.config.wheels}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">0-60 mph:</span>
                    <span>{preset.specs['0-60 mph']}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Horsepower:</span>
                    <span>{preset.specs.Horsepower}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 pt-3 border-t">
                    {preset.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'faq' && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
