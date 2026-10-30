import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { siteConfig } from '../config';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'الرئيسية' },
    { to: '/guide', label: 'دليل التاجر' },
    { to: '/support', label: 'الدعم' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gold/20 bg-ivory/90 dark:bg-navy-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* الشعار */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <span className="text-navy-dark font-bold text-lg">ن</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-navy dark:text-ivory group-hover:text-gold transition-colors">
                {siteConfig.name}
              </h1>
              <p className="text-xs text-navy/60 dark:text-ivory/60 -mt-1">{siteConfig.tagline}</p>
            </div>
          </Link>

          {/* روابط الحاسوب */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? 'bg-gold/10 text-gold'
                    : 'text-navy/70 dark:text-ivory/70 hover:text-gold hover:bg-gold/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* أزرار */}
          <div className="flex items-center gap-2">
            {/* زر تبديل الموضوع */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-navy/70 dark:text-ivory/70 hover:text-gold hover:bg-gold/5 transition-all"
              aria-label="تبديل الوضع"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* زر قائمة الجوال */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-navy/70 dark:text-ivory/70 hover:text-gold transition-all"
              aria-label="القائمة"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الجوال */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gold/10 bg-ivory dark:bg-navy-dark animate-fade-in">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? 'bg-gold/10 text-gold'
                    : 'text-navy/70 dark:text-ivory/70 hover:text-gold hover:bg-gold/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
