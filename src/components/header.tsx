import { useSeason, Season, seasonEmoji } from '@/context/season-context';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/poems', label: 'Poems' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter'];

const Header = () => {
  const { season, setSeason } = useSeason();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading text-lg md:text-xl text-cream tracking-wide hover:opacity-80 transition-opacity">
          somehow everything is poetic
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-100 ${
                location.pathname === link.to
                  ? 'text-cream opacity-100'
                  : 'text-cream/70 opacity-70'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Season selector */}
          <div className="flex items-center gap-0.5 ml-4 bg-cream/10 backdrop-blur-sm rounded-full px-1.5 py-1">
            {seasons.map(s => (
              <button
                key={s}
                onClick={() => setSeason(s)}
                className={`text-lg leading-none px-1.5 py-1 rounded-full transition-all duration-300 ${
                  season === s
                    ? 'bg-[#F7F4D5]/25 scale-105 opacity-100'
                    : 'opacity-70 hover:opacity-90'
                }`}
                aria-label={`Switch to ${s}`}
              >
                {seasonEmoji[s]}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-forest/95 backdrop-blur-md border-t border-cream/10 animate-fade-in">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-lg tracking-widest uppercase ${
                  location.pathname === link.to ? 'text-cream' : 'text-cream/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-2">
              {seasons.map(s => (
                <button
                  key={s}
                  onClick={() => { setSeason(s); setMobileOpen(false); }}
                  className={`text-[32px] leading-none px-2 py-1 rounded-full transition-all ${
                    season === s ? 'bg-[#F7F4D5]/25 scale-110 opacity-100' : 'opacity-70'
                  }`}
                >
                  {seasonEmoji[s]}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
