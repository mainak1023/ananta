import React from 'react';
import { Youtube, Facebook, Instagram, Music, Volume2, Cloud } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/public/1000207211_1688217873610.jpg)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        {/* Social Media Icons */}
        <div className="flex space-x-8 mb-16">
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Music size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Volume2 size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Cloud size={24} />
          </a>
        </div>

        {/* Brand Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.3em] text-white mb-16 text-center drop-shadow-2xl">
          DOLINMAN
        </h1>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap justify-center gap-8 lg:gap-12">
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            HOME
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            DOLINMAN X
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            ORDER VINYL
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            RELEASES
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            COMMISSIONS
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            ABOUT
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            PRESS
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            CONCERTS
          </a>
        </nav>
      </div>

      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-10"></div>
    </div>
  );
}

export default App;