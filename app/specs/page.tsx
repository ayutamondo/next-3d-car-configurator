export default function SpecsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Specifications</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Save Configurations</h3>
            <p className="text-gray-600">Save your custom builds to localStorage</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Share via URL</h3>
            <p className="text-gray-600">Share your configurations with a simple link</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Gallery View</h3>
            <p className="text-gray-600">Browse all your saved configurations</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Specs</h2>
        <p className="text-gray-600">Detailed specifications will be added in Phase 4</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <p className="text-gray-600">Frequently asked questions will be added in Phase 4</p>
      </section>
    </div>
  );
}
