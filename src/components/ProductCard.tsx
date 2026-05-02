import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col items-center">
      <div className="w-full aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden mb-6 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.tags.includes('New Arrival') && (
          <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase text-primary rounded-full tracking-widest">
            New Arrival
          </span>
        )}
      </div>
      <span className="font-sans text-[10px] font-semibold text-outline uppercase tracking-[0.2em] mb-2">
        {product.category}
      </span>
      <h3 className="font-serif text-xl text-on-surface mb-2">{product.name}</h3>
      <p className="font-sans text-primary font-medium">{formatPrice(product.price)}</p>
    </Link>
  );
}
