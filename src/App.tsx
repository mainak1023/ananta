import React, { useState, useEffect } from 'react';
import { Youtube, Facebook, Instagram, Music, Volume2, Cloud, ArrowLeft, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
import { SiSpotify } from 'react-icons/si';

type Page = 'home' | 'portfolio' | 'book' | 'releases' | 'about' | 'contacts';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getBackgroundImage = (page: Page) => {
    const backgrounds = {
      home: '/ananta.avif',
      portfolio: '/one.avif',
      book: '/two.avif',
      releases: '/three.avif',
      about: '/one.avif',
      contacts: '/ananta.avif',
    };
    return backgrounds[page];
  };

  const navigateToPage = (page: Page) => {
    if (page === currentPage) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SocialIcons = () => (
    <div className="flex justify-center space-x-6 mb-8">
      <a href="https://youtube.com/@wind_man_ananta?si=91l97dHGAF9VXg3a" className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110">
        <Youtube size={20} />
      </a>
      <a href="https://www.facebook.com/share/1BsDHQK9DG/" className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110">
        <Facebook size={20} />
      </a>
      <a href="https://www.instagram.com/wind_man_ananta?igsh=azhpZmo1bGR0NWZs" className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110">
        <Instagram size={20} />
      </a>
      <a href="https://open.spotify.com/artist/2Qd6hwMRyYB9H9n1tFoZT3" className="text-white/80 hover:text-green-400 transition-all duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
        <SiSpotify size={20} />
      </a>
      <a
        href="https://wa.me/7478994307?text=Hello%20Ananta!%20I%20would%20like%20to%20book%20a%20show."
        className="text-white/80 hover:text-green-400 transition-all duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.868C2.073 7.555 6.659 3.012 12 3c2.652.006 5.146 1.037 7.019 2.916A9.823 9.823 0 0121.9 12.82c-.013 5.313-4.6 9.857-9.849 9.857zm8.413-18.273A11.815 11.815 0 0012.003 0C5.373 0 .066 5.373.001 12.002c-.032 2.123.552 4.197 1.7 6.032L0 24l6.084-1.594A11.933 11.933 0 0012.002 24h.005c6.627 0 12.034-5.373 12.099-12.002a11.93 11.93 0 00-3.221-8.272z"
            fill="currentColor"
          />
        </svg>
      </a>
      {/* <a href="mailto:anantaadhikary03@gmail.com" className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Email">
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          <path
            d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.29a1 1 0 01-1.42 0L4 6.41V20h16V6.41z"
            fill="currentColor"
          />
        </svg>
      </a> */}
    </div>
  );

  const Navigation = () => (
    <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-4">
      <button onClick={() => navigateToPage('home')} className={`text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest ${currentPage === 'home' ? 'text-gray-300 border-b border-white/50' : ''} pb-1`}>
        HOME
      </button>
      <button onClick={() => navigateToPage('portfolio')} className={`text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest ${currentPage === 'portfolio' ? 'text-gray-300 border-b border-white/50' : ''} pb-1`}>
        PORTFOLIO
      </button>
      <button onClick={() => navigateToPage('book')} className={`text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest ${currentPage === 'book' ? 'text-gray-300 border-b border-white/50' : ''} pb-1`}>
        BOOK ME
      </button>
      <button onClick={() => navigateToPage('releases')} className={`text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest ${currentPage === 'releases' ? 'text-gray-300 border-b border-white/50' : ''} pb-1`}>
        RELEASES
      </button>
      <button onClick={() => navigateToPage('about')} className={`text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest ${currentPage === 'about' ? 'text-gray-300 border-b border-white/50' : ''} pb-1`}>
        ABOUT
      </button>
      <button onClick={() => navigateToPage('contacts')} className={`text-white hover:text-gray-300 transition-all duration-300 text-sm lg:text-base font-light tracking-widest ${currentPage === 'contacts' ? 'text-gray-300 border-b border-white/50' : ''} pb-1`}>
        CONTACTS
      </button>
    </nav>
  );

  const BackToHomeButton = () => (
    <button
      onClick={() => navigateToPage('home')}
      className="fixed top-6 left-6 z-50 bg-black/20 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-black/30 transition-all duration-300 transform hover:scale-105"
      aria-label="Back to Home"
    >
      <ArrowLeft size={20} />
    </button>
  );

  const ScrollToTopButton = () => (
    showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-black/20 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-black/30 transition-all duration-300 transform hover:scale-105"
        aria-label="Scroll to Top"
      >
        <ChevronUp size={20} />
      </button>
    )
  );

  const HomePage = () => (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-white">
      <SocialIcons />
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.3em] text-white mb-12 text-center font-serif animate-fade-in"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        ANANTA
      </h1>
      <Navigation />
    </div>
  );

  const PortfolioPage = () => (
    <div className="relative z-20 min-h-screen px-4 py-20 text-white">
      <BackToHomeButton />

      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white mb-12 text-center font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          PORTFOLIO
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <Music className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-light mb-3 tracking-wide">Classical Performances</h3>
            <p className="text-white/80 text-sm leading-relaxed">Traditional Indian classical music performances showcasing the depth and beauty of Bansuri melodies.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <Volume2 className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-light mb-3 tracking-wide">Studio Recordings</h3>
            <p className="text-white/80 text-sm leading-relaxed">Professional studio recordings featuring original compositions and traditional ragas.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <Cloud className="w-8 h-8 mb-4 text-white" />
            <h3 className="text-xl font-light mb-3 tracking-wide">Live Sessions</h3>
            <p className="text-white/80 text-sm leading-relaxed">Intimate live sessions capturing the spontaneous beauty of Indian classical music.</p>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );

  const BookMePage = () => (
    <div className="relative z-20 min-h-screen px-4 py-20 text-white">
      <BackToHomeButton />

      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white mb-8 text-center font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          BOOK ME
        </h1>

        <div className="text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90 font-light max-w-3xl mx-auto">
            Experience the enchanting melodies of Indian classical Bansuri music. Available for concerts, private events, meditation sessions, and cultural celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-light mb-3 tracking-wide">Concert Performances</h3>
            <p className="text-white/80 text-sm leading-relaxed">Full-length classical music concerts for auditoriums and cultural venues.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-light mb-3 tracking-wide">Private Events</h3>
            <p className="text-white/80 text-sm leading-relaxed">Intimate performances for weddings, celebrations, and special occasions.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-light mb-3 tracking-wide">Meditation Sessions</h3>
            <p className="text-white/80 text-sm leading-relaxed">Peaceful Bansuri music for yoga studios and wellness centers.</p>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <h3 className="text-xl font-light mb-3 tracking-wide">Cultural Events</h3>
            <p className="text-white/80 text-sm leading-relaxed">Traditional performances for festivals and cultural celebrations.</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/7478994307?text=Hello%20Ananta!%20I%20would%20like%20to%20book%20a%20show."
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-light tracking-wide transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK NOW
          </a>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );

  const ReleasesPage = () => (
    <div className="relative z-20 min-h-screen px-4 py-20 text-white">
      <BackToHomeButton />

      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white mb-8 text-center font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          RELEASES
        </h1>

        <div className="text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light max-w-3xl mx-auto">
            Discover my musical journey through these carefully crafted releases, each telling a unique story through the voice of the Bansuri.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-light mb-2 tracking-wide">Latest Releases</h3>
                <p className="text-white/80">Available on Spotify and other major streaming platforms</p>
              </div>
              <a href="https://open.spotify.com/artist/2Qd6hwMRyYB9H9n1tFoZT3" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors transform hover:scale-110">
                <SiSpotify size={40} />
              </a>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-light mb-2 tracking-wide">YouTube Performances</h3>
                <p className="text-white/80">Live performances and studio sessions</p>
              </div>
              <a href="https://youtube.com/@wind_man_ananta?si=91l97dHGAF9VXg3a" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors transform hover:scale-110">
                <Youtube size={40} />
              </a>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-light mb-2 tracking-wide text-center">Upcoming Releases</h3>
            <p className="text-white/80 text-center">New compositions and collaborations coming soon. Stay tuned for updates.</p>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );

  const AboutPage = () => (
    <div className="relative z-20 min-h-screen px-4 py-20 text-white">
      <BackToHomeButton />

      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white mb-12 text-center font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ABOUT
        </h1>

        <div className="bg-black/20 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/10 mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light text-center mb-8" style={{ lineHeight: '1.8' }}>
            As an Indian classical musician, I've dedicated the past five years of my life to mastering the enchanting art of playing the Indian Bansuri. With every breath, I weave melodies that resonate with the soul, drawing inspiration from centuries-old traditions and infusing them with my own unique expression.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light text-center" style={{ lineHeight: '1.8' }}>
            Through this timeless instrument, I strive to transport listeners to a realm of tranquility and bliss, where the music speaks the language of the heart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/15 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center hover:bg-black/25 transition-all duration-300">
            <h3 className="text-3xl font-light mb-2 text-white">5+</h3>
            <p className="text-white/80 text-sm tracking-wide">Years of Dedication</p>
          </div>

          <div className="bg-black/15 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center hover:bg-black/25 transition-all duration-300">
            <h3 className="text-3xl font-light mb-2 text-white">∞</h3>
            <p className="text-white/80 text-sm tracking-wide">Melodies Created</p>
          </div>

          <div className="bg-black/15 backdrop-blur-md rounded-xl p-8 border border-white/10 text-center hover:bg-black/25 transition-all duration-300">
            <h3 className="text-3xl font-light mb-2 text-white">♪</h3>
            <p className="text-white/80 text-sm tracking-wide">Hearts Touched</p>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );

  const ContactsPage = () => (
    <div className="relative z-20 min-h-screen px-4 py-20 text-white">
      <BackToHomeButton />

      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white mb-12 text-center font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          CONTACTS
        </h1>

        <div className="space-y-6 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <h3 className="text-lg font-light mb-1 tracking-wide">Phone</h3>
                <a href="tel:+917478994307" className="text-white/80 hover:text-white transition-colors">+91-7478994307</a>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <h3 className="text-lg font-light mb-1 tracking-wide">Email</h3>
                <a href="mailto:anantaadhikary03@gmail.com" className="text-white/80 hover:text-white transition-colors break-all">anantaadhikary03@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-black/30 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light mb-1 tracking-wide">Location</h3>
                <p className="text-white/80 leading-relaxed">
                  Panagarh<br />
                  Paschim Bardhaman<br />
                  West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/80 mb-8 font-light text-lg">Let's create beautiful music together</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/7478994307?text=Hello%20Ananta!%20I%20would%20like%20to%20get%20in%20touch."
              className="bg-green-600/20 backdrop-blur-md border border-green-400/30 text-white px-8 py-3 rounded-xl hover:bg-green-600/30 transition-all duration-300 font-light tracking-wide transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="mailto:anantaadhikary03@gmail.com"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 font-light tracking-wide transform hover:scale-105"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <PortfolioPage />;
      case 'book':
        return <BookMePage />;
      case 'releases':
        return <ReleasesPage />;
      case 'about':
        return <AboutPage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Flip Effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ${isTransitioning ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
        style={{
          backgroundImage: `url(${getBackgroundImage(currentPage)})`,
          transform: isTransitioning ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </div>

      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-10"></div>
    </div>
  );
}

export default App;