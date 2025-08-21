import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garment Theory - AI-Powered Virtual Try-On',
  description: 'Experience clothes before you buy them with our revolutionary AI-powered virtual try-on technology.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Virtual Try-On
            <span className="block text-3xl md:text-4xl font-normal mt-2">
              Reimagined
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience clothes before you buy them with our AI-powered virtual try-on technology. 
            See how garments look on your body in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tryon"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🎯 Start Trying On
            </Link>
            <Link
              href="/closet"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              👔 Browse Collection
            </Link>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">👕</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>👗</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>👔</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🧥</div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Virtual Try-On?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our technology combines AI, computer vision, and fashion expertise to deliver 
              the most realistic virtual try-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-3">Smart Body Scanning</h3>
              <p className="text-gray-600">
                Advanced pose detection and body measurement technology ensures accurate 
                garment fitting and realistic visualization.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Realistic Rendering</h3>
              <p className="text-gray-600">
                AI-powered image synthesis creates natural-looking composites with 
                proper lighting, shadows, and fabric draping.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Instant Results</h3>
              <p className="text-gray-600">
                Get your virtual try-on results in seconds. No waiting, no downloads - 
                just instant fashion visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to your perfect fit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Capture</h3>
              <p className="text-gray-600">
                Take a photo with your camera. We'll guide you to the perfect pose.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Measure</h3>
              <p className="text-gray-600">
                Input your measurements for the most accurate fit prediction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Select</h3>
              <p className="text-gray-600">
                Choose from our curated collection of high-quality garments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Visualize</h3>
              <p className="text-gray-600">
                See how the garment looks on you with realistic rendering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already using virtual try-on to make better fashion decisions.
          </p>
          <Link
            href="/tryon"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            🚀 Start Your Virtual Try-On Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Garment Theory</h3>
              <p className="text-gray-400">
                Revolutionizing fashion shopping with AI-powered virtual try-on technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Virtual Try-On</li>
                <li>Body Scanning</li>
                <li>Size Prediction</li>
                <li>Wishlist</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Garment Theory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
