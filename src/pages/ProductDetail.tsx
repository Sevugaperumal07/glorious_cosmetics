import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products, getProductById } from '../services/productService';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatPrice, cn } from '../lib/utils';
import { Minus, Plus, ChevronRight, MessageCircle, Star, ShieldCheck, Leaf, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('ingredients');
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      getProductById(id).then(data => data && setProduct(data));
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return null;

  const suggestedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-24 pb-20 md:pb-8">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 mb-8">
        <ul className="flex items-center gap-2 text-outline text-[10px] font-bold uppercase tracking-widest">
          <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
          <li><ChevronRight size={12} /></li>
          <li><span className="text-primary">{product.name}</span></li>
        </ul>
      </nav>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
        {/* Gallery */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="col-span-2 aspect-[4/5] bg-surface-container-low overflow-hidden rounded-2xl">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-surface-container-low overflow-hidden rounded-2xl">
            <img src={product.image} alt="Detail 1" className="w-full h-full object-cover grayscale-[0.3]" />
          </div>
          <div className="aspect-square bg-surface-container-low overflow-hidden rounded-2xl flex items-center justify-center p-8 text-center bg-stone-100">
             <div className="space-y-4">
                <Leaf className="text-primary mx-auto" size={32} strokeWidth={1} />
                <p className="font-serif text-sm italic text-stone-500">Harvested at peak potency</p>
             </div>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-tertiary-container text-tertiary-container" />)}
              <span className="text-[10px] font-bold text-outline uppercase tracking-widest">(48 Reviews)</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-on-surface mb-2">{product.name}</h1>
            <p className="text-primary font-serif text-3xl">{formatPrice(product.price)}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span key={tag} className="bg-secondary-container text-on-secondary-container px-5 py-2 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-on-surface-variant font-sans leading-relaxed leading-[1.8]">
            {product.description}
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-outline-variant/30 rounded-full px-6 py-3 bg-white">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-on-surface hover:text-primary transition-colors">
                  <Minus size={16} />
                </button>
                <span className="px-8 font-sans text-sm font-bold min-w-[60px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-on-surface hover:text-primary transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <Button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 shadow-xl"
              >
                Add to Cart
              </Button>
            </div>
            <Button 
              variant="outline" 
              className="w-full text-emerald-800 border-emerald-800 hover:bg-emerald-50"
              leftIcon={<MessageCircle size={20} />}
            >
              Buy via WhatsApp
            </Button>
          </div>

          {/* Accordions */}
          <div className="mt-8 border-t border-outline-variant/20 divide-y divide-outline-variant/20">
            {[
              { id: 'ingredients', label: 'Ingredients', content: product.ingredients || 'Saponified Oils of Olive, Coconut, and Shea Butter. Pure Essential Extracts, Natural Clays.' },
              { id: 'benefits', label: 'Benefits', content: product.benefits?.join(', ') || 'Calming, moisturizing, and deeply cleansing without stripping natural oils.' },
              { id: 'usage', label: 'Usage Instructions', content: product.usage || 'Apply to wet skin, massage gently, and rinse with pure water.' }
            ].map(item => (
              <div key={item.id} className="py-6">
                <button 
                  onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface">{item.label}</span>
                  <ChevronDown className={cn("transition-transform duration-300", openAccordion === item.id ? "rotate-180" : "")} size={18} />
                </button>
                <AnimatePresence>
                  {openAccordion === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-on-surface-variant font-sans leading-relaxed italic">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-center mb-16">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {suggestedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
