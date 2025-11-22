import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getProducts } from '../firebase/api';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { Star, Plus, Minus } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import formatPrice from '../utils/formatPrice';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t, isRTL } = useLanguage();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) return;
      setLoading(true);
      const fetchedProduct = await getProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setMainImage(fetchedProduct.images[0]);
        // Fetch related products
        const allProducts = await getProducts();
        setRelatedProducts(
            allProducts.filter(p => p.category === fetchedProduct.category && p.id !== fetchedProduct.id).slice(0, 4)
        );
      }
      setLoading(false);
    };
    fetchProductData();
  }, [id]);
  
  if (loading) {
    return <div className="text-center py-20 text-gray-800 dark:text-white">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-gray-800 dark:text-white">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name[language]} ${index + 1}`}
                  className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer border-2 ${mainImage === img ? 'border-[#D1A38A]' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div className="flex-1">
              <img
                src={mainImage}
                alt={product.name[language]}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{t(product.category)}</p>
            <h1 className="text-3xl md:text-4xl font-bold font-display mt-2 text-gray-800 dark:text-white">{product.name[language]}</h1>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={` ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">({product.reviewCount} {isRTL ? 'مراجعات' : 'reviews'})</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{formatPrice(product.price, language)}</p>
              {product.oldPrice && (
                <p className="text-xl text-gray-500 dark:text-gray-400 line-through">{formatPrice(product.oldPrice, language)}</p>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">{t('quantity')}</h3>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md w-fit">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><Minus size={16} /></button>
                <span className="px-4 font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"><Plus size={16} /></button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={handleAddToCart} className="w-full bg-gray-800 dark:bg-gray-700 text-white py-3 px-6 rounded-md hover:bg-black dark:hover:bg-gray-600 transition-colors">{t('addToCart')}</button>
              <button onClick={handleBuyNow} className="w-full bg-[#D1A38A] text-white py-3 px-6 rounded-md hover:bg-[#c19277] transition-colors">{t('buyNow')}</button>
            </div>

            <div className="mt-12">
              <div className="border-b dark:border-gray-700">
                <h3 className="text-lg font-semibold py-3">{t('productDescription')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">{product.description[language]}</p>
            </div>
            
            <div className="mt-8">
              <div className="border-b dark:border-gray-700">
                <h3 className="text-lg font-semibold py-3">{t('productDetails')}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 whitespace-pre-line">{product.details[language]}</p>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">{t('youMayAlsoLike')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;