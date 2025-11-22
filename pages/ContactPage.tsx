import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, User, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-[#FDF9F6] dark:bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-gray-800 dark:text-white">{t('getInTouch')}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            {isRTL 
              ? 'نحن هنا لمساعدتك. إذا كان لديك أي سؤال أو استفسار، لا تترددي في التواصل معنا.' 
              : 'We are here to help. If you have any questions or inquiries, do not hesitate to contact us.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          {/* Contact Form */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{t('contactForm')}</h2>
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('name')}</label>
                  <input type="text" id="name" name="name" required className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-rose-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 focus:ring-[#D1A38A] focus:border-[#D1A38A] transition-colors text-gray-800 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('email')}</label>
                  <input type="email" id="email" name="email" required className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-rose-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 focus:ring-[#D1A38A] focus:border-[#D1A38A] transition-colors text-gray-800 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('message')}</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-rose-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 focus:ring-[#D1A38A] focus:border-[#D1A38A] transition-colors text-gray-800 dark:text-white"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                    {t('sendMessage')}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="order-1 md:order-2 space-y-8">
            <div className="p-6 bg-rose-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{isRTL ? 'معلومات التواصل' : 'Contact Information'}</h3>
                <p className="flex items-center gap-3 mt-4 text-gray-700 dark:text-gray-300">
                    <User size={20} className="text-[#D1A38A]" />
                    <span>{t('ownerOfTheSite')}: {t('ownerName')}</span>
                </p>
                <p className="flex items-center gap-3 mt-3 text-gray-700 dark:text-gray-300">
                    <a href="https://wa.me/0593297404" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#D1A38A] transition-colors">
                        <Phone size={20} className="text-[#D1A38A]" />
                        <span>{t('whatsapp')}: 0593297404</span>
                    </a>
                </p>
            </div>
            <div className="p-6 bg-rose-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{t('businessHours')}</h3>
                <p className="text-gray-700 dark:text-gray-300">{isRTL ? 'الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً' : 'Sun - Thu: 9:00 AM - 5:00 PM'}</p>
                <p className="text-gray-700 dark:text-gray-300">{isRTL ? 'الجمعة والسبت: مغلق' : 'Fri & Sat: Closed'}</p>
            </div>
            <div className="p-6 bg-rose-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{t('location')}</h3>
                <p className="flex items-center gap-3 mt-3 text-gray-700 dark:text-gray-300">
                    <MapPin size={20} className="text-[#D1A38A]" />
                    <span>فلسطين</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;