export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <p className="text-gray-600 mb-8">
        Your saved configurations will appear here (Phase 2)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
          <p className="text-gray-500">No saved builds yet</p>
        </div>
      </div>
    </div>
  );
}
