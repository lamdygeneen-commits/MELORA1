import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getProducts } from '../firebase/api';
import ProductCard from '../components/ui/ProductCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useSearch } from '../contexts/SearchContext';
import { Product, Category } from '../types';
import formatPrice from '../utils/formatPrice';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ShopPage: React.FC = () => {
  const { category: categoryParam } = useParams<{ category: Category }>();
  const query = useQuery();
  const { t, language } = useLanguage();
  const { searchTerm } = useSearch();

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('newest');
  const [priceRange, setPriceRange] = useState(200);
  const [showOnSale, setShowOnSale] = useState(query.get('discount') === 'on-sale');

  useEffect(() => {
    const fetchProductsData = async () => {
        setLoading(true);
        const products = await getProducts();
        setAllProducts(products);
        setLoading(false);
    }
    fetchProductsData();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (categoryParam) {
      filtered = filtered.filter(p => p.category === categoryParam);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.en.toLowerCase().includes(searchTerm.toLowerCase()) || 
            p.name.ar.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    filtered = filtered.filter(p => p.price <= priceRange);

    if (showOnSale) {
      filtered = filtered.filter(p => p.oldPrice);
    }

    return filtered;
  }, [categoryParam, priceRange, showOnSale, allProducts, searchTerm]);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    switch (sortOption) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        sorted.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
      default:
        // Simple sort by ID for newest, assuming higher ID is newer
        sorted.sort((a, b) => b.id.localeCompare(a.id));
        break;
    }
    return sorted;
  }, [filteredProducts, sortOption]);
  
  const pageTitle = categoryParam ? t(categoryParam) : t('allProducts');

  return (
    <div className="bg-[#FDF9F6] dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center py-8">
          <h1 className="text-4xl font-display font-bold capitalize text-gray-800 dark:text-white">{pageTitle}</h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <aside className="w-full md:w-1/4 lg:w-1/5">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">{t('filterBy')}</h2>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">{t('priceRange')}</h3>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>{formatPrice(0, language)}</span>
                  <span>{formatPrice(priceRange, language)}</span>
                </div>
              </div>

              {/* Discount Filter */}
              <div>
                <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">{t('discount')}</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="onSale"
                    checked={showOnSale}
                    onChange={(e) => setShowOnSale(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-[#D1A38A] focus:ring-[#D1A38A] bg-gray-100 dark:bg-gray-700"
                  />
                  <label htmlFor="onSale" className="ms-3 text-sm text-gray-600 dark:text-gray-300">
                    {t('onSale')}
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            <div className="flex justify-end items-center mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-200">{t('sortBy')}:</label>
                <select 
                  id="sort" 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:border-[#D1A38A] focus:ring focus:ring-[#D1A38A] focus:ring-opacity-50 text-sm"
                >
                  <option value="newest">{t('newest')}</option>
                  <option value="price-asc">{t('priceLowToHigh')}</option>
                  <option value="price-desc">{t('priceHighToLow')}</option>
                  <option value="best-selling">{t('bestSelling')}</option>
                </select>
              </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-4 w-3/4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-2 w-1/2"></div>
                        </div>
                    ))}
                </div>
            ) : sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            ) : searchTerm ? (
                <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <p className="text-gray-600 dark:text-gray-400">{t('searchNotFound')}</p>
                </div>
            ) : null}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;