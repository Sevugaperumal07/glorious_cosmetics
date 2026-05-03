import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, Search, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import Button from './Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-primary hover:opacity-70 transition-opacity md:hidden p-2"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
          
          <nav className="hidden md:flex gap-8">
            {navLinks.slice(0, 2).map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className="font-serif uppercase tracking-widest text-[10px] text-stone-500 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <Link to="/" className="text-lg font-medium tracking-[0.2em] uppercase text-emerald-900 font-serif">
          Glorious Cosmetics
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-8">
            {navLinks.slice(2).map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className="font-serif uppercase tracking-widest text-[10px] text-stone-500 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center gap-2 border-l border-stone-100 pl-6 ml-2">
            <Button to="/login" variant="ghost" size="sm" className="text-stone-500">
              Login
            </Button>
            <Button to="/signup" variant="primary" size="sm">
              Sign Up
            </Button>
          </div>
          
          <button className="text-primary hover:opacity-70 transition-opacity hidden md:block">
            <Search size={20} />
          </button>
          
          <Link to="/cart" className="relative text-primary hover:opacity-70 transition-opacity">
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[55] md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 w-full bg-black max-w-[300px] z-[60] p-8 md:hidden shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            id="mobile-menu"
            aria-labelledby="menu-title"
          >
           <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-lg font-semibold tracking-widest">
             Glorious Cosmetics
            </h2>

            <button onClick={() => setIsMenuOpen(false)}>
            <X className="text-white" />
            </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-xl font-medium tracking-wide text-white hover:text-emerald-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <span className="w-8 h-[1px] bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">              
              <p className="mt-12 text-[10px] text-stone-500 uppercase tracking-widest leading-relaxed">
                Glorious Cosmetics <br />
                Artisan Skincare & Rituals
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
