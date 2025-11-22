
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: "url('/hero/hero-2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('aboutMelora')}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {isRTL ? 'قصتنا: فن الأناقة الفلسطينية' : 'Our Story: The Art of Palestinian Elegance'}
          </h2>
          <div className="w-24 h-1 bg-[#D1A38A] mx-auto mb-8"></div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
          {isRTL ? (
            <>
              <p>
                وُلدت ميلورا من شغف عميق بالجمال ورغبة في تقديم الأناقة والجودة للمرأة العصرية في فلسطين وحول العالم. نحن نؤمن بأن كل امرأة تستحق أن تشعر بالثقة والجمال في كل لحظة من حياتها.
              </p>
              <p>
                في ميلورا، نصنع أكثر من مجرد منتجات؛ نحن نصنع تجارب. كل عطر، كل قطعة مكياج، وكل تصميم ملابس يتم اختياره بعناية فائقة ليعكس رؤيتنا للجودة العالية والذوق الرفيع. نحن نستلهم من تراثنا الغني ونمزجه بلمسات عصرية لنقدم لكِ قطعاً فريدة تعبر عن شخصيتك.
              </p>
              <p>
                مهمتنا هي تمكينكِ من خلال الجمال والأناقة. ندعوكِ لاستكشاف عالم ميلورا، حيث كل قطعة تروي قصة، وكل اختيار هو احتفال بذاتكِ. انضمي إلينا في هذه الرحلة الملهمة.
              </p>
            </>
          ) : (
            <>
              <p>
                Melora was born from a deep passion for beauty and a desire to bring elegance and quality to the modern woman in Palestine and around the world. We believe that every woman deserves to feel confident and beautiful in every moment of her life.
              </p>
              <p>
                At Melora, we create more than just products; we create experiences. Every perfume, every piece of makeup, and every clothing design is meticulously selected to reflect our vision of high quality and refined taste. We draw inspiration from our rich heritage and blend it with modern touches to offer you unique pieces that express your personality.
              </p>
              <p>
                Our mission is to empower you through beauty and style. We invite you to explore the world of Melora, where every piece tells a story, and every choice is a celebration of yourself. Join us on this inspiring journey.
              </p>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{isRTL ? 'الجودة' : 'Quality'}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{isRTL ? 'نلتزم بأعلى معايير الجودة في كل ما نقدمه.' : 'We are committed to the highest standards of quality in everything we offer.'}</p>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{isRTL ? 'الأناقة' : 'Elegance'}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{isRTL ? 'تصاميمنا تجمع بين البساطة والرقي لتعكس ذوقك الفريد.' : 'Our designs combine simplicity and sophistication to reflect your unique taste.'}</p>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{isRTL ? 'الثقة' : 'Confidence'}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{isRTL ? 'منتجاتنا مصممة لتعزز ثقتك بنفسك وتبرز جمالك الطبيعي.' : 'Our products are designed to boost your self-confidence and highlight your natural beauty.'}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;