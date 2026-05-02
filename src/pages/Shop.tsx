import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products } from '../services/productService';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import Button from '../components/Button';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', 'Soaps', 'Oils', 'Kits', 'Rituals'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Header & Filters */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <h1 className="font-serif text-5xl text-on-surface tracking-tight">Our Collection</h1>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-outline" size={18} />
            <input 
              type="text" 
              placeholder="Search our botanical collection..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border border-outline-variant/20 rounded-full focus:outline-none focus:border-primary font-sans outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex gap-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? 'shadow-md scale-105' : 'text-stone-500'}
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em]">Sort By</span>
            <select className="bg-transparent font-sans text-[12px] font-semibold text-on-surface focus:outline-none cursor-pointer">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-stone-400 italic">No botanical treasures found matching your search.</p>
          </div>
        )}
      </section>

      {/* Floating Filter (Mobile) */}
      <Button 
        size="icon" 
        className="md:hidden fixed bottom-24 right-6 shadow-2xl z-40 p-5"
      >
        <SlidersHorizontal size={24} />
      </Button>
    </div>
  );
}
