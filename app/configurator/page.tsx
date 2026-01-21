'use client';

import { Suspense } from 'react';
import ConfiguratorContent from './ConfiguratorContent';

export default function ConfiguratorPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8"><div>Loading...</div></div>}>
      <ConfiguratorContent />
    </Suspense>
  );
}