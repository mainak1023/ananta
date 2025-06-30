import React from 'react';
import { Youtube, Facebook, Instagram, Music, Volume2, Cloud } from 'lucide-react';
import { SiSpotify } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/ananta.avif)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        {/* Social Media Icons */}
        <div className="flex space-x-8 mb-16">
          <a href="https://youtube.com/@wind_man_ananta?si=91l97dHGAF9VXg3a" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Youtube size={24} />
          </a>
          <a href="https://www.facebook.com/share/1BsDHQK9DG/" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/wind_man_ananta?igsh=azhpZmo1bGR0NWZs" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg">
            <Instagram size={24} />
          </a>
          <a href="https://open.spotify.com/artist/2Qd6hwMRyYB9H9n1tFoZT3" className="text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110 drop-shadow-lg" target="_blank" rel="noopener noreferrer">
            <SiSpotify size={24} />
          </a>
          <a
            href="https://wa.me/7478994307?text=Hello%20Ananta!%20I%20would%20like%20to%20book%20a%20show."
            className="text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110 drop-shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.868C2.073 7.555 6.659 3.012 12 3c2.652.006 5.146 1.037 7.019 2.916A9.823 9.823 0 0121.9 12.82c-.013 5.313-4.6 9.857-9.849 9.857zm8.413-18.273A11.815 11.815 0 0012.003 0C5.373 0 .066 5.373.001 12.002c-.032 2.123.552 4.197 1.7 6.032L0 24l6.084-1.594A11.933 11.933 0 0012.002 24h.005c6.627 0 12.034-5.373 12.099-12.002a11.93 11.93 0 00-3.221-8.272z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="mailto:anantaadhikary03@gmail.com" className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 drop-shadow-lg" aria-label="Email">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path
                d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.29a1 1 0 01-1.42 0L4 6.41V20h16V6.41z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* Brand Name */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.3em] text-white mb-16 text-center drop-shadow-2xl font-serif"
          style={{ fontFamily: "'Playfair Display', 'Merriweather', serif" }}
        >
          ANANTA
        </h1>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap justify-center gap-8 lg:gap-12">
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            HOME
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            PORTFOLIO
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            BOOK ME
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            RELEASES
          </a>
          {/* <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            COMMISSIONS
          </a> */}
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            ABOUT
          </a>
          {/* <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            PRESS
          </a> */}
          <a href="#" className="text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest drop-shadow-lg hover:drop-shadow-xl">
            CONTACTS
          </a>
        </nav>
      </div>

      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-10"></div>
    </div>
  );
}

export default App;