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
            className="text-primary hover:opacity-70 transition-opacity md:hidden"
          >
            <Menu size={24} />
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
          Aetheria Botanical
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 md:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-primary"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl text-on-surface hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
