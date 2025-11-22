import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getProducts } from '../firebase/api';
import { Product } from '../types';
import ProductCard from '../components/ui/ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Use the eight custom hero images supplied by the user. These files live in
// the public/hero directory and will be served statically at /hero/hero-N.jpg.
const heroImages = [
    '/hero/hero-1.jpg',
    '/hero/hero-2.jpg',
    '/hero/hero-3.jpg',
    '/hero/hero-4.jpg',
    '/hero/hero-5.jpg',
    '/hero/hero-6.jpg',
    '/hero/hero-7.jpg',
    '/hero/hero-8.jpg'
];

const HeroSlideshow = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0">
            {heroImages.map((src, index) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
}


const HomePage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsData = async () => {
      setLoading(true);
      const allProducts = await getProducts();
      setNewArrivals(allProducts.filter(p => p.tags.includes('new-arrival')));
      setBestSellers(allProducts.filter(p => p.tags.includes('best-seller')));
      setLoading(false);
    };
    fetchProductsData();
  }, []);

  const CategoryCard = ({ to, img, name }: { to: string; img: string; name: string; }) => (
    <Link to={to} className="group relative block overflow-hidden rounded-lg">
      <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-2xl md:text-3xl font-bold font-display">{name}</h3>
      </div>
    </Link>
  );

  const ProductCarousel = ({ title, items }: { title: string; items: Product[] }) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({ 
                left: (direction === 'left' ? -1 : 1) * ((isRTL ? -1 : 1) * scrollAmount), 
                behavior: 'smooth' 
            });
        }
    }
    return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h2>
            <div className="flex items-center gap-2">
                <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{scrollSnapType: 'x mandatory'}}>
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex-shrink-0 w-64 md:w-72 animate-pulse">
                    <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-4 w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-2 w-1/2"></div>
                </div>
            ))
          ) : (
            items.map(product => (
                <div key={product.id} className="flex-shrink-0 w-64 md:w-72" style={{scrollSnapAlign: 'start'}}>
                <ProductCard product={product} />
                </div>
            ))
          )}
        </div>
      </div>
    </section>
  )};

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-black text-white overflow-hidden">
        {/* Full-bleed slideshow in the background */}
        <HeroSlideshow />
        {/* Semi-transparent dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Foreground content: brand name, tagline, and call to action */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6">
          <h1 className="text-5xl md:text-7xl font-display">MELORA</h1>
          {/* Hero tagline */}
          <p className="text-lg md:text-xl max-w-2xl font-body">
            {t('heroTagline')}
          </p>
          <Link
            to="/shop"
            className="bg-[#d1a38a] hover:bg-[#c19277] text-white font-bold py-3 px-10 rounded-full transition-colors duration-300"
          >
            {t('shopNow')}
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">{t('shopByCategory')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard to="/category/perfumes" img="/hero/hero-4.jpg" name={t('perfumes')} />
            <CategoryCard to="/category/makeup" img="/hero/hero-3.jpg" name={t('makeup')} />
            <CategoryCard to="/category/clothing" img="/hero/hero-8.jpg" name={t('clothing')} />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <ProductCarousel title={t('newArrivals')} items={newArrivals} />
      
      {/* Big Sale Banner */}
      <section className="container mx-auto px-6 my-12">
        <div className="relative bg-cover bg-center rounded-lg overflow-hidden text-white min-h-[300px] flex items-center" style={{ backgroundImage: `url('/hero/hero-5.jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 p-8 md:p-16">
            <h3 className="text-4xl md:text-5xl font-display font-bold">{t('bigSale')}</h3>
            <p className="mt-2 text-lg">{t('bigSaleSub')}</p>
            <Link to="/shop?discount=on-sale" className="mt-6 inline-block bg-white text-gray-800 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
              {t('shopNow')}
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <ProductCarousel title={t('bestSellers')} items={bestSellers} />
    </div>
  );
};

export default HomePage;