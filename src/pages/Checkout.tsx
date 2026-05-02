import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { CreditCard, QrCode, Handshake, Lock, Verified, ShieldCheck, Leaf } from 'lucide-react';

export default function Checkout() {
  const { cart, subtotal } = useCart();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <main className="pt-32 pb-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-10">
          {/* Shipping Form */}
          <section className="bg-white p-10 rounded-2xl border border-stone-100 shadow-sm">
            <h2 className="font-serif text-2xl text-primary mb-8">Shipping Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="Evelyn Thorne" className="border border-outline-variant/30 rounded-lg p-3 font-sans" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="border border-outline-variant/30 rounded-lg p-3 font-sans" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest">Street Address</label>
                <input type="text" placeholder="123 Botanical Lane" className="border border-outline-variant/30 rounded-lg p-3 font-sans" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest">City</label>
                <input type="text" placeholder="Portland" className="border border-outline-variant/30 rounded-lg p-3 font-sans" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest">State</label>
                <input type="text" placeholder="Oregon" className="border border-outline-variant/30 rounded-lg p-3 font-sans" />
              </div>
            </form>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-10 rounded-2xl border border-stone-100 shadow-sm">
            <h2 className="font-serif text-2xl text-primary mb-8">Payment Method</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <button className="flex flex-col items-center p-6 border-2 border-primary bg-primary/5 rounded-xl">
                <CreditCard className="text-primary mb-2" />
                <span className="text-[8px] font-bold uppercase text-center">Credit Card</span>
              </button>
              <button className="flex flex-col items-center p-6 border border-outline-variant/20 rounded-xl hover:bg-stone-50">
                <QrCode className="text-outline mb-2" />
                <span className="text-[8px] font-bold uppercase text-center">UPI Transfer</span>
              </button>
              <button className="flex flex-col items-center p-6 border border-outline-variant/20 rounded-xl hover:bg-stone-50">
                <Handshake className="text-outline mb-2" />
                <span className="text-[8px] font-bold uppercase text-center">Cash on Delivery</span>
              </button>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-outline-variant/10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest">Card Details</label>
                <div className="bg-stone-50 border border-outline-variant/30 rounded-lg p-4 flex justify-between items-center">
                  <span className="text-sm text-stone-400 italic">Secure encryption active...</span>
                  <Lock size={16} className="text-primary" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-5">
           <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/10">
              <h2 className="font-serif text-2xl text-on-surface mb-8">Order Summary</h2>
              <div className="space-y-6 mb-8">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} className="w-16 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-serif text-sm font-bold">{item.name}</h4>
                      <p className="text-[10px] text-on-surface-variant uppercase">{item.quantity} x {formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 pt-8 border-t border-outline-variant/20">
                <div className="flex justify-between text-sm text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-on-surface-variant">
                  <span>Taxes</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-4 border-t border-primary/20">
                  <span className="font-serif text-2xl text-primary">Total</span>
                  <span className="font-serif text-2xl text-primary">{formatPrice(total)}</span>
                </div>
              </div>
              
              <button className="w-full mt-12 bg-primary text-white py-5 rounded-full font-sans text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all shadow-xl">
                 Place Order
              </button>
           </div>
        </div>
      </div>
    </main>
  );
}
