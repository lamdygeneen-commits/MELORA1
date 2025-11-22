import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { createOrder } from '../firebase/api';
import formatPrice from '../utils/formatPrice';

const CheckoutPage: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  // FIX: Destructure language from useLanguage to make it available in the component scope.
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shippingCost = 10; // Example shipping cost

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const customerData = {
      fullName: formData.get('fullName') as string,
      phoneNumber: formData.get('phone') as string,
      country: formData.get('country') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
    };
    
    const orderDetails = {
        customer: customerData,
        items: cartItems,
        total: cartTotal + shippingCost,
    };

    // This now calls the simulated API function
    const result = await createOrder(orderDetails);

    if (result.success) {
        clearCart();
        navigate('/confirmation', { state: { order: orderDetails } });
    } else {
        // Handle error case
        alert("There was an issue placing your order. Please try again.");
        setIsSubmitting(false);
    }
  };
  
  const InputField = ({ label, id, type = 'text', required = true }: {label: string, id: string, type?: string, required?: boolean}) => (
      <div>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
          <input 
            type={type} 
            id={id} 
            name={id} 
            required={required} 
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#D1A38A] focus:border-[#D1A38A] bg-white dark:bg-gray-700 text-gray-800 dark:text-white" 
          />
      </div>
  );

  return (
    <div className="bg-[#FDF9F6] dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">{t('checkout')}</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">{t('shippingAddress')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <InputField label={t('fullName')} id="fullName" />
              </div>
              <InputField label={t('phoneNumber')} id="phone" type="tel" />
              <InputField label={t('country')} id="country" />
              <div className="sm:col-span-2">
                <InputField label={t('address')} id="address" />
              </div>
              <InputField label={t('city')} id="city" />
            </div>
            
            <h2 className="text-xl font-bold mt-10 mb-6">{t('paymentMethod')}</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 border dark:border-gray-700 rounded-md">
                <input id="cod" name="payment" type="radio" defaultChecked className="h-4 w-4 text-[#D1A38A] border-gray-300 focus:ring-[#D1A38A]" />
                <label htmlFor="cod" className="ms-3 block text-sm font-medium text-gray-700 dark:text-gray-300">{t('cashOnDelivery')}</label>
              </div>
              <div className="flex items-center p-4 border dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-400">
                <input id="online" name="payment" type="radio" disabled className="h-4 w-4 border-gray-300" />
                <label htmlFor="online" className="ms-3 block text-sm font-medium">{t('onlinePayment')}</label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold border-b dark:border-gray-700 pb-4 mb-4">{t('orderSummary')}</h2>
              <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <div className="relative">
                      <img src={product.images[0]} alt={product.name[language]} className="w-16 h-16 object-cover rounded-md" />
                      <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{quantity}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{product.name[language]}</p>
                    </div>
                      <p className="font-semibold text-sm">{formatPrice(product.price * quantity, language)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 mt-6 pt-4 border-t dark:border-gray-700">
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
              <button type="submit" disabled={isSubmitting} className="mt-6 w-full bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-black transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600">
                {isSubmitting ? 'Processing...' : t('placeOrder')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;