import { Link } from 'react-router-dom';
import { Home, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export default function MobileNav() {
  const location = useLocation();
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Shop', path: '/shop', icon: ShoppingBag },
    { name: 'Cart', path: '/cart', icon: ShoppingCart, count: cartCount },
    { name: 'Profile', path: '/login', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-stone-100 flex justify-around items-center px-4 pb-safe pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] z-50">
      {navItems.map(item => (
        <Link 
          key={item.path}
          to={item.path}
          className={cn(
            "flex flex-col items-center justify-center gap-1 transition-all",
            location.pathname === item.path 
              ? "text-primary scale-105" 
              : "text-stone-400"
          )}
        >
          <div className="relative">
            <item.icon size={20} strokeWidth={location.pathname === item.path ? 2.5 : 2} />
            {item.count !== undefined && item.count > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {item.count}
              </span>
            )}
          </div>
          <span className="font-serif text-[10px] uppercase tracking-widest">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
