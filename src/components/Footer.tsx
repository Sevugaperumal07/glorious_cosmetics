import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { name: 'Privacy', path: '#' },
    { name: 'Terms', path: '#' },
    { name: 'Shipping', path: '#' },
    { name: 'Sustainability', path: '#' },
  ];

  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
        <Link to="/" className="font-serif italic text-2xl text-stone-800">
          Aetheria Botanical
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.path}
              className="font-serif text-xs tracking-wide text-stone-500 hover:text-primary transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="space-y-2">
          <p className="font-serif text-xs tracking-wide text-stone-400">
            © 2024 Aetheria Botanical. Handcrafted with intention.
          </p>
          <p className="font-serif text-[10px] tracking-[0.2em] uppercase text-stone-300">
            Artisanal Beauty • Ethical Sourcing • Slow Living
          </p>
        </div>
      </div>
    </footer>
  );
}
