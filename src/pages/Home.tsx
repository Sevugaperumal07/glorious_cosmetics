import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../services/productService';
import ProductCard from '../components/ProductCard';
import { Droplets, Sprout, History, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const bentoItems = [
    { icon: Droplets, title: 'Pure Elements', text: 'Cold-pressed oils and wild-harvested botanicals with no synthetic fillers.' },
    { icon: Sprout, title: 'Earth First', text: 'Plastic-free packaging and ethically sourced ingredients from small farms.' },
    { icon: History, title: 'Artisan Led', text: 'Each batch is hand-poured and cured for 6 weeks to ensure premium quality.' },
    { icon: Sparkles, title: 'Intentional', text: 'Skincare rituals designed to ground your morning and soothe your night.' },
  ];

  return (
    <div className="pt-16 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDncyeinwTexm5UWzaPHiPqAH2hVe9-2J-U2fU7UsT564YravTn8Mn5w6kQMztOvq26U27O_MHzzLO1SEk0YNviQn9woTviTPloHSV_fbr5ix2hV6gwZsbU8jfRiXPLy9ErtBwuMIjgoV-pZl0JEOJma8z-JcleAPMow2Og9Y529TGGb-pgIy307VOf_jRRa-XAjAOor54EsI-U2XaFKkDmbNrf2E6CBZuo5xpLaMAzSoWwzA8EeQN_Ji__Ymnzwy36H8-_AGGuqEc" 
            alt="Hero" 
            className="w-full h-full object-cover scale-105"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <span className="font-sans text-[12px] font-semibold text-white uppercase tracking-[0.3em] mb-4 block">
            Handcrafted in Small Batches
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight">
            Nature's Essence, <br className="hidden md:block" /> Preserved.
          </h1>
          <p className="font-serif text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto italic">
            Discover artisan soaps and herbal oils steeped with intention and pure botanical ingredients.
          </p>
          <Button to="/shop" size="lg" className="shadow-2xl">
              Shop Now
            </Button>
        </motion.div>
      </section>

      {/* Offers Banner */}
      <section className="bg-secondary-container py-3 text-center">
        <p className="font-sans text-[10px] font-bold text-on-secondary-container uppercase tracking-[0.4em]">
          The Solstice Collection — Use code AETHERIA15 for 15% off
        </p>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl text-on-surface mb-2">Artisan Curations</h2>
            <p className="font-sans text-on-surface-variant italic">Selected favorites from our botanical laboratory.</p>
          </div>
          <Button to="/shop" variant="outline" size="sm">
            View All Products
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Philosophy Bento */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif bg-gradient-to-b from-stone-900 to-stone-800 text-center mb-16">The Philosophy of Slow Beauty</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {bentoItems.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl flex flex-col items-center text-center border border-outline-variant/10 hover:shadow-lg transition-shadow">
                <item.icon className="text-primary mb-6" size={40} strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-on-surface mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-sans text-[12px] font-semibold text-primary uppercase tracking-[0.3em] mb-6 block">
            Shared Experiences
          </span>
          <h2 className="font-serif bg-gradient-to-b from-stone-900 to-stone-800 md:text-4xl mb-20 italic">"A transformation for my skin and soul."</h2>
          
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x no-scrollbar">
            {[
              { text: "The Wild Lavender soap is unlike anything I've ever used. The texture is so creamy and the scent stays with you like a soft memory of a garden.", author: "Elena M., Vermont" },
              { text: "I've switched entirely to Aetheria for my evening ritual. The oils are lightweight yet incredibly nourishing. My skin has never felt more vibrant.", author: "James L., London" },
              { text: "Beautifully packaged and even more beautiful to use. You can tell that every piece is made with genuine care and botanical knowledge.", author: "Sarah K., Tokyo" }
            ].map((t, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[450px] snap-center bg-background p-12 rounded-3xl border border-outline-variant/10 text-left flex flex-col justify-between">
                <p className="font-serif text-lg md:text-xl text-on-surface mb-10 leading-relaxed leading-[2]">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-outline-variant"></div>
                  <p className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em]">{t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="font-serif text-4xl text-on-surface mb-4">Join the Botanical Journal</h2>
            <p className="font-sans text-on-surface-variant">Receive seasonal recipes, skincare rituals, and early access to new batch releases.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-white border border-outline-variant/30 rounded-full px-8 py-4 focus:outline-none focus:border-primary font-sans transition-all"
            />
            <Button type="submit" className="shadow-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
