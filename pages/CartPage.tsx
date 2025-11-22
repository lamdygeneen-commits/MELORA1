
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Plus, Minus, Trash2 } from 'lucide-react';
import formatPrice from '../utils/formatPrice';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const { t, language } = useLanguage();
  const shippingCost = 10; // Example shipping cost

  if (cartCount === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{t('shoppingCart')}</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">{t('emptyCart')}</p>
        <Link to="/shop" className="mt-6 inline-block bg-[#D1A38A] text-white font-bold py-3 px-8 rounded-md hover:bg-[#c19277] transition-colors">
          {t('shopNow')}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FDF9F6] dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">{t('shoppingCart')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex flex-col sm:flex-row items-center gap-4 border-b dark:border-gray-700 pb-6 last:border-b-0">
                  <img src={product.images[0]} alt={product.name[language]} className="w-24 h-24 object-cover rounded-md" />
                    <div className="flex-1 text-center sm:text-start">
                    <Link to={`/product/${product.id}`} className="font-semibold text-gray-800 dark:text-white hover:text-[#D1A38A]">{product.name[language]}</Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatPrice(product.price, language)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"><Minus size={16} /></button>
                      <span className="px-3 font-bold">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"><Plus size={16} /></button>
                    </div>
                    <p className="font-bold w-20 text-center">{formatPrice(product.price * quantity, language)}</p>
                    <button onClick={() => removeFromCart(product.id)} className="text-gray-500 dark:text-gray-400 hover:text-red-500">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold border-b dark:border-gray-700 pb-4 mb-4">{t('cartSummary')}</h2>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                  <span>{t('subtotal')}</span>
                  <span className="font-semibold">{formatPrice(cartTotal, language)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('shipping')}</span>
                  <span className="font-semibold">{formatPrice(shippingCost, language)}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg mt-6 pt-4 border-t dark:border-gray-700">
                <span>{t('total')}</span>
                <span>{formatPrice(cartTotal + shippingCost, language)}</span>
              </div>
              <Link to="/checkout" className="mt-6 w-full block text-center bg-gray-800 dark:bg-gray-700 text-white py-3 px-6 rounded-md hover:bg-black dark:hover:bg-gray-600 transition-colors">
                {t('confirmOrder')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;