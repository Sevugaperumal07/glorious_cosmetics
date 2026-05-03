import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Signup() {
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-surface">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual Panel */}
        <div className="hidden lg:block relative h-[800px] rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiQGKep2MprAbO64Gg2jEYf0FbEfXfPs2ZqBLClKeWx6Xem97UXh3v7KaZnQ-a6BAAIOHmOF524igJ17vGl5DCr3f1P2i6OzP86ATCDZQFvATZpZYdd0pdqNNy-GhRM1tk3b7SHaAW7mDd7sP9s780LwzjONjNFd9qF-MOXBlmc1ysYWFMbw8oftZ0AH38RzEKJdBD8pXXtGHhHDMpb8t4AFL8mByfwyxL6i0H2EdJ6Qjzo7-q8u_oDu0Ux00oh0bJ09UcD4mURC4" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/10 flex flex-col justify-end p-12">
            <p className="text-white font-serif bg-gradient-to-b from-stone-900 to-stone-800 italic opacity-90 max-w-sm">"Nature does not hurry, yet everything is accomplished."</p>
          </div>
        </div>

        {/* Signup Form */}
        <div className="flex flex-col space-y-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block font-serif tracking-[0.3em] uppercase text-emerald-900 mb-4 border-b border-primary/20 pb-2">Glorious Cosmetics</Link>
            <h1 className="font-serif text-6xl text-primary tracking-tight">Join the Ritual</h1>
            <p className="font-serif text-xl italic text-on-surface-variant max-w-md">Begin your journey towards botanical purity and slow, intentional living.</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Full Name</label>
                <input type="text" placeholder="Evelyn Thorne" className="w-full bg-white border border-outline-variant/30 rounded-none px-6 py-4 focus:outline-none focus:border-primary transition-all font-sans text-on-surface" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Email Address</label>
                <input type="email" placeholder="evelyn@aetheria.com" className="w-full bg-white border border-outline-variant/30 rounded-none px-6 py-4 focus:outline-none focus:border-primary transition-all font-sans text-on-surface" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Password</label>
                <div className="relative">
                  <input 
                    type={showPass ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="w-full bg-white border border-outline-variant/30 rounded-none px-6 py-4 focus:outline-none focus:border-primary transition-all font-sans text-on-surface" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-outline"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="newsletter" className="mt-1 accent-primary" />
                <label htmlFor="newsletter" className="font-serif text-sm text-on-surface-variant italic leading-relaxed">
                  Join the botanical journal for seasonal rituals and early access to artisanal releases.
                </label>
              </div>

              <button className="w-full bg-primary text-white font-sans text-[12px] font-bold uppercase tracking-[0.3em] py-5 hover:bg-stone-800 transition-all shadow-2xl shadow-primary/20">
                Create Account
              </button>
            </form>

            <div className="text-center">
              <p className="font-sans text-sm text-stone-500">
                Already have an account? 
                <Link to="/login" className="text-primary font-bold uppercase tracking-tight ml-2 border-b border-primary/20 pb-0.5 hover:border-primary">Sign In</Link>
              </p>
            </div>
            
            <div className="flex justify-center gap-10 opacity-30 pt-8 grayscale">
              <img src="https://www.flaticon.com/free-icon/leaf_2615077" alt="Eco" className="h-8" />
              <img src="https://www.flaticon.com/free-icon/plant_2615077" alt="Plant" className="h-8" />
              <img src="https://www.flaticon.com/free-icon/eco-friendly_2615077" alt="Purity" className="h-8" />
            </div>
        </div>
      </div>
    </main>
  );
}
