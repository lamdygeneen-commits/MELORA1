import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCart } from '../../contexts/CartContext';
import formatPrice from '../../utils/formatPrice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const discountPercentage = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col h-full">
      {/* Image wrapper */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`} className="block">
          {/* Maintain a consistent aspect ratio for the image itself; this matches Shein-style vertical cards */}
          <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-700">
            <img
              src={product.images[0]}
              alt={product.name[language]}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
        {/* Discount badge in the top corner */}
        {product.oldPrice && (
          <div
            className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm`}
          >
            SALE -{discountPercentage}%
          </div>
        )}
        {/* Bottom overlay containing name, price, old price, discount and rating */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2">
          <div className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
            {/* Product name */}
            <Link
              to={`/product/${product.id}`}
              className="text-xs font-medium text-white hover:text-[#F5C6D6] line-clamp-2"
            >
              {product.name[language]}
            </Link>
            {/* Price row */}
              <div className={`flex items-baseline gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <span className="text-sm font-bold text-white">
                {formatPrice(product.price, language)}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-gray-200 line-through">
                  {formatPrice(product.oldPrice, language)}
                </span>
              )}
              {product.oldPrice && (
                <span className="text-xs text-red-300 font-bold">
                  -{discountPercentage}%
                </span>
              )}
            </div>
            {/* Rating row */}
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                />
              ))}
              <span className="text-[10px] text-gray-200 ms-1">({product.reviewCount})</span>
            </div>
          </div>
        </div>
        {/* Add to cart button appears on hover */}
        <button
          onClick={() => addToCart(product)}
          aria-label="Add to cart"
          className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center bg-white/80 dark:bg-gray-700/80 rounded-full text-gray-800 dark:text-gray-200 hover:bg-[#D1A38A] hover:text-white dark:hover:bg-[#D1A38A] transition-colors opacity-0 group-hover:opacity-100 duration-300"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;