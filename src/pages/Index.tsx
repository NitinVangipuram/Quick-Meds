
import { useState, useMemo, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickCategories from '@/components/QuickCategories';
import TrustIndicators from '@/components/TrustIndicators';
import FiltersAndControls from '@/components/FiltersAndControls';
import ResultsCounter from '@/components/ResultsCounter';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { products, categories } from '@/data/products';
import { useAuth } from '@/contexts/AuthContext';
import { useMediaQuery } from '@/hooks/use-mobile';
import { useCartManagement } from '@/hooks/useCartManagement';
import { useWishlistManagement } from '@/hooks/useWishlistManagement';

const Index = () => {
  const { user, loading } = useAuth();
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(isMobile ? 'list' : 'grid');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const {
    cartItems,
    cartCount,
    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
    handleClearCart
  } = useCartManagement();

  const {
    wishlist,
    handleToggleWishlist
  } = useWishlistManagement();

  // Update view mode based on screen size
  useEffect(() => {
    if (isMobile && viewMode === 'grid') {
      setViewMode('list');
    }
  }, [isMobile, viewMode]);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    sorted.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    return sorted;
  }, [sortBy]);

  const filteredProducts = useMemo(() => {
    return sortedProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [sortedProducts, searchQuery, selectedCategory]);

  // Enhanced loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="relative">
            <div className="animate-spin rounded-full h-32 w-32 border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-white absolute inset-0"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl animate-bounce">💊</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="shimmer h-4 w-48 bg-white/20 rounded-full mx-auto"></div>
            <p className="text-2xl font-bold text-white">Loading MediCare...</p>
            <p className="text-blue-200 font-medium">Preparing your medicines with care</p>
            <div className="flex justify-center space-x-2 mt-6">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Redirect to auth if not logged in
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
        onCategorySelect={setSelectedCategory}
        categories={categories}
      />

      <main className="container mx-auto px-4 py-6 md:py-10 space-y-16">
        <div className="animate-fade-in-up">
          <HeroSection />
        </div>

        <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          <QuickCategories onCategorySelect={setSelectedCategory} />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <TrustIndicators />
        </div>

        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }} data-products-section>
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of quality medicines and health products
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
          </div>

          <FiltersAndControls
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            categories={categories}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            isMobile={isMobile}
          />

          <ResultsCounter
            count={filteredProducts.length}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />

          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            viewMode={viewMode}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ScrollToTopButton showScrollTop={showScrollTop} />

      <Footer 
        onCategorySelect={setSelectedCategory}
        categories={categories}
      />
    </div>
  );
};

export default Index;
