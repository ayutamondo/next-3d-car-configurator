export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to 3D Car Configurator</h1>
        <p className="text-xl text-gray-600 mb-8">
          Customize your dream car with our interactive 3D configurator
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/configurator"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Configuring
          </a>
          <a
            href="/gallery"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
