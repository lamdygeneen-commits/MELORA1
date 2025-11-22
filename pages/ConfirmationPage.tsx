
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';
import formatPrice from '../utils/formatPrice';

const ConfirmationPage: React.FC = () => {
  const { state } = useLocation();
  const { t, language } = useLanguage();
  const order = state?.order;

  return (
    <div className="bg-[#FDF9F6] dark:bg-gray-900">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="text-3xl font-bold font-display mt-6 text-gray-800 dark:text-white">{t('orderConfirmed')}</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">{t('thankYou')}</p>
          
          {order && (
            <div className="mt-8 text-left border-t dark:border-gray-700 pt-6">
              <h2 className="text-lg font-bold mb-4">{t('yourOrderDetails')}</h2>
              <div className="space-y-4">
                {order.items.map(({ product, quantity }: { product: any, quantity: number }) => (
                  <div key={product.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <img src={product.images[0]} alt={product.name[language]} className="w-12 h-12 object-cover rounded-md" />
                       <div>
                         <p className="font-semibold text-sm">{product.name[language]}</p>
                         <p className="text-xs text-gray-500 dark:text-gray-400">{t('quantity')}: {quantity}</p>
                       </div>
                    </div>
                    <p className="font-semibold text-sm">{formatPrice(product.price * quantity, language)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t dark:border-gray-700 flex justify-between font-bold">
                <span>{t('total')}</span>
                <span>{formatPrice(order.total, language)}</span>
              </div>
            </div>
          )}

          <Link to="/" className="mt-8 inline-block bg-[#D1A38A] text-white font-bold py-3 px-8 rounded-md hover:bg-[#c19277] transition-colors">
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;