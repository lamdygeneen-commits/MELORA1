
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Using Twitter for TikTok placeholder
import VisitorStats from '../ui/VisitorStats';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const ownerName = 'جنين مجدي أبو لمضي';
  const whatsappNumber = '0593297404';

  return (
    <footer className="bg-neutral-100 dark:bg-gray-800 text-neutral-800 dark:text-neutral-200 border-t border-neutral-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-display text-gray-800 dark:text-white mb-4">MELORA</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              {isRTL 
                ? 'علامة تجارية فلسطينية تحتفي بالجمال والأناقة. نقدم لكِ مجموعة مختارة من العطور، الميكب، والملابس لتعزيز ثقتكِ وتألقكِ.'
                : 'A Palestinian brand celebrating beauty and elegance. We offer a curated selection of perfumes, makeup, and clothing to enhance your confidence and glow.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-neutral-700 dark:text-neutral-200">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><Link to="/shop" className="hover:text-[#D1A38A] transition-colors">{t('shop')}</Link></li>
              <li><Link to="/about" className="hover:text-[#D1A38A] transition-colors">{t('about')}</Link></li>
              <li><Link to="/contact" className="hover:text-[#D1A38A] transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-neutral-700 dark:text-neutral-200">{t('contact')}</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>{ownerName}</li>
              <li>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#D1A38A] transition-colors">
                  {t('whatsapp')}: +{whatsappNumber}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4 text-neutral-700 dark:text-neutral-200">{isRTL ? 'تابعينا' : 'Follow Us'}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-[#D1A38A] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-[#D1A38A] transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-[#D1A38A] transition-colors"><Facebook size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-gray-700 text-center text-sm text-neutral-500 dark:text-neutral-400">
          {/* Display a visitor and active user counter above the copyright notice */}
          <div className="mb-4 flex justify-center">
            <VisitorStats />
          </div>
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;