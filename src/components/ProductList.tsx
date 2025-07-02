
import { useMemo } from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';
import ProductCard from '@/components/ProductCard';
import ProductCardMobile from '@/components/ProductCardMobile';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (productId: string) => void;
  wishlist: Set<string>;
  viewMode: 'grid' | 'list';
  searchQuery: string;
  selectedCategory: string;
}

const ProductList = ({ 
  products, 
  onAddToCart, 
  onToggleWishlist, 
  wishlist, 
  viewMode,
  searchQuery,
  selectedCategory 
}: ProductListProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">No products found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your search or browse our categories
        </p>
        <Button onClick={() => window.location.reload()}>
          Show All Products
        </Button>
      </div>
    );
  }

  // Use mobile cards on mobile devices or when in list view on mobile
  if (isMobile || (isMobile && viewMode === 'list')) {
    return (
      <div className="space-y-3">
        {filteredProducts.map(product => (
          <ProductCardMobile
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            isInWishlist={wishlist.has(product.id)}
          />
        ))}
      </div>
    );
  }

  // Desktop view
  return (
    <div className={
      viewMode === 'grid'
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        : 'space-y-4'
    }>
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={wishlist.has(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
