import type { Metadata } from "next";
import Link from "next/link";
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
                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="/configurator" className="hover:text-gray-300">Configurator</Link></li>
                <li><Link href="/gallery" className="hover:text-gray-300">Gallery</Link></li>
                <li><Link href="/specs" className="hover:text-gray-300">Specs</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">3D Car Configurator</h3>
                <p className="text-gray-400 text-sm">
                  An interactive 3D car customization demo built with Next.js and Three.js.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Next.js 15 (App Router)</li>
                  <li>React Three Fiber</li>
                  <li>Three.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Credits</h3>
                <p className="text-gray-400 text-sm mb-2">
                  3D Model: Demo placeholder geometry
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  3D Engine: Three.js by Mr.doob
                </p>
                <p className="text-gray-400 text-sm">
                  React Integration: React Three Fiber
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
              <p className="text-gray-400 text-sm">
                © 2026 3D Car Configurator. Built for demonstration purposes.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
