export default function ConfiguratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Car Configurator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
          <p className="text-gray-500">3D View (Coming in Phase 3)</p>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
            <p className="text-gray-600">Controls will be added in Phase 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
