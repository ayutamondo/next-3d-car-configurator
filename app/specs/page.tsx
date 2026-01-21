'use client';

import { useState } from 'react';

export default function SpecsPage() {
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'faq'>('features');

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
      answer: 'There\'s no strict limit, but browser local storage has space limitations. We recommend keeping your gallery to a reasonable number of builds.'
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
          {(['features', 'specs', 'faq'] as const).map((tab) => (
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
