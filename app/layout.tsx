import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Car Configurator",
  description: "Configure and customize your dream car in 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-900 text-white">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">3D Car Configurator</h1>
              <ul className="flex gap-6">
                <li><a href="/" className="hover:text-gray-300">Home</a></li>
                <li><a href="/configurator" className="hover:text-gray-300">Configurator</a></li>
                <li><a href="/gallery" className="hover:text-gray-300">Gallery</a></li>
                <li><a href="/specs" className="hover:text-gray-300">Specs</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 3D Car Configurator. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">3D Model credits: [Model source]</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
