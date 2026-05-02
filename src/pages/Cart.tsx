import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ArrowLeft, Leaf } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { motion } from 'motion/react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const shipping = 8.50;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="font-serif text-5xl mb-6">Your basket is empty.</h1>
        <p className="font-sans text-on-surface-variant mb-12 max-w-md italic">
          It seems you haven't selected any botanical intentions yet. Explore our laboratory to begin your ritual.
        </p>
        <Link 
          to="/shop" 
          className="bg-primary text-white px-12 py-5 rounded-full font-sans text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all shadow-xl"
        >
          Return to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-32 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="font-serif text-6xl text-on-surface mb-2 tracking-tight">Your Basket</h1>
        <p className="font-serif text-lg text-on-surface-variant italic">A collection of botanical intentions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-8 space-y-12">
          {cart.map(item => (
            <motion.div 
              layout
              key={item.id} 
              className="flex flex-col md:flex-row gap-10 pb-12 border-b border-outline-variant/20"
            >
              <div className="w-full md:w-48 aspect-square overflow-hidden rounded-2xl bg-surface-container-low shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-3xl text-on-surface mb-1">{item.name}</h3>
                    <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-outline hover:text-error transition-colors p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                
                <div className="flex justify-between items-end mt-12">
                  <div className="flex items-center border border-outline-variant/30 rounded-full px-6 py-2 gap-8 bg-white">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="hover:text-primary transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-sans text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="hover:text-primary transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="font-serif text-3xl text-on-surface">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="pt-4">
            <Link to="/shop" className="inline-flex items-center gap-3 font-sans text-[12px] font-bold text-primary uppercase tracking-[0.2em] hover:translate-x-[-8px] transition-transform">
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white p-12 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)] border border-stone-100 sticky top-32">
            <h3 className="font-serif text-3xl text-on-surface mb-10">Order Summary</h3>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center text-on-surface-variant font-sans">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant font-sans">
                <span>Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex justify-between items-center text-on-surface">
                <span className="font-serif text-2xl">Total</span>
                <span className="font-serif text-2xl">{formatPrice(total)}</span>
              </div>
            </div>

            <Link 
              to="/checkout"
              className="w-full bg-primary text-white py-5 rounded-full font-sans text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              Proceed to Checkout
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
