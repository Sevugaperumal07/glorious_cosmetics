import { Link } from 'react-router-dom';
import { Eye, EyeOff, Github, Chrome } from 'lucide-react';
import { useState } from 'react';

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="min-h-screen flex">
      {/* Visual Panel */}
      <div className="hidden lg:block w-[40%] relative overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo418gfbJsk5CYjUjo4ZeOl2Gwr07tViBO62j2PTrqXUYi4mtRQanLS7YsKnBzZHWuluWe4gcAs9HmQy-wgtyPF-ER_Pd594AjS7hX5UpVw_WGZxFAg12CE7T87PJn0ROQAUG-2KEFexkDcFP96fFGTOMp7Duv63hiyfjX8eVs6yrRruG-AXGCpbd3zBO4z18y2TB84nP8Kwwwn5h30Nc493C3OWPiFgy_HGhNwG2MQQSy6q70A6NJYnjNaMIsZlrcOkUMotkw8iM" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 backdrop-sepia-[0.2]"></div>
      </div>

      {/* Form Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 text-primary/5 select-none pointer-events-none">
          <Leaf size={400} strokeWidth={1} />
        </div>
        
        <div className="w-full max-w-md bg-white p-12 rounded-3xl shadow-xl border border-stone-100 z-10">
          <div className="text-center mb-12">
            <Link to="/" className="inline-block font-serif tracking-[0.3em] uppercase text-emerald-900 mb-8 border-b border-primary/20 pb-2">Aetheria Botanical</Link>
            <h1 className="font-serif text-4xl text-primary mb-4">Welcome Back</h1>
            <p className="font-sans text-token text-stone-500 italic">Continue your journey with nature's purest essence.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Email Address</label>
              <input type="email" placeholder="hello@aetheria.com" className="w-full px-6 py-4 border border-outline-variant/30 rounded-xl focus:outline-none focus:border-primary transition-all font-sans" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-outline uppercase tracking-widest block">Password</label>
                <Link to="#" className="text-[10px] font-bold text-primary uppercase hover:opacity-70">Forgot?</Link>
              </div>
              <div className="relative">
                <input 
                  type={showPass ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full px-6 py-4 border border-outline-variant/30 rounded-xl focus:outline-none focus:border-primary transition-all font-sans" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-outline"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-5 font-sans text-[12px] font-bold uppercase tracking-widest rounded-xl hover:bg-stone-800 transition-all shadow-xl shadow-primary/10 mt-4">
              Sign In
            </button>
          </form>

          <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-100"></div></div>
            <span className="relative bg-white px-4 text-[10px] font-bold text-outline uppercase tracking-tight">or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-outline-variant/30 rounded-xl hover:bg-stone-50 transition-colors font-sans text-xs">
              <Chrome size={16} />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-outline-variant/30 rounded-xl hover:bg-stone-50 transition-colors font-sans text-xs">
              <Github size={16} />
              GitHub
            </button>
          </div>

          <div className="text-center mt-12">
            <p className="font-sans text-sm text-stone-500">
              Don't have an account? 
              <Link to="/signup" className="text-primary font-bold uppercase tracking-tight ml-2 border-b border-primary/20 pb-0.5 hover:border-primary">Create</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Leaf({ className, size }: { className?: string, size?: number }) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a13 13 0 0 1-13 13"></path>
      <path d="M9 21c0-4.5 4-4.5 4-9"></path>
    </svg>
  );
}
