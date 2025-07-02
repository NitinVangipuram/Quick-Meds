
import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Heart, Star, Shield, Clock, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';

interface ProductCardMobileProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (productId: string) => void;
  isInWishlist: boolean;
}

const ProductCardMobile = ({ product, onAddToCart, onToggleWishlist, isInWishlist }: ProductCardMobileProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    onAddToCart(product, quantity);
    setIsAdding(false);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleImageError = () => {
    setImageError(true);
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop';

  return (
    <Card className="w-full bg-gradient-to-br from-white via-blue-50/20 to-purple-50/10 shadow-soft hover:shadow-elegant transition-all duration-500 rounded-2xl border-0 overflow-hidden hover:scale-[1.02] group">
      <div className="flex">
        {/* Enhanced Image Section */}
        <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-l-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110"
            onError={handleImageError}
          />
          
          {/* Status Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
            {product.prescription && (
              <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 border-0 shadow-lg">
                <Shield className="w-2 h-2 mr-0.5" />
                Rx
              </Badge>
            )}
            {!product.inStock && (
              <Badge className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xs px-2 py-1 border-0 shadow-lg">
                <Clock className="w-2 h-2 mr-0.5" />
                Out
              </Badge>
            )}
          </div>

          {/* Discount Badge */}
          <div className="absolute bottom-2 left-2 z-20">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-1 border-0 shadow-lg">
              <Zap className="w-2 h-2 mr-0.5" />
              17% OFF
            </Badge>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="flex-1 flex flex-col justify-between p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-sm text-gray-900 line-clamp-2 flex-1 mr-2 leading-tight group-hover:text-gradient transition-colors duration-300">
                {product.name}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggleWishlist(product.id)}
                className={`p-2 h-8 w-8 rounded-full transition-all duration-300 ${
                  isInWishlist 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 scale-110' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-red-500 hover:scale-110'
                }`}
              >
                <Heart className={`w-3 h-3 ${isInWishlist ? 'fill-current' : ''}`} />
              </Button>
            </div>
            
            <p className="text-xs text-gray-600 line-clamp-1 leading-relaxed">
              {product.description}
            </p>

            {/* Enhanced Pricing */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-2">
                <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  ₹{product.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{Math.floor(product.price * 1.2)}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs border-blue-200 text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 px-2 py-0.5">
                  {product.manufacturer}
                </Badge>
                {product.dosage && (
                  <Badge variant="outline" className="text-xs border-purple-200 text-purple-700 bg-gradient-to-r from-purple-50 to-purple-100 px-2 py-0.5">
                    {product.dosage}
                  </Badge>
                )}
              </div>
            </div>

            {/* Enhanced Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-600 ml-1 font-medium">(4.2)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-3 h-3 text-emerald-500" />
                <span className="text-xs text-emerald-600 font-semibold">Fast</span>
              </div>
            </div>
          </div>

          {/* Enhanced Action Section */}
          {product.inStock ? (
            <div className="flex items-center justify-between mt-4 space-x-3">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-1 border border-gray-200">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="w-7 h-7 p-0 rounded border-0 hover:bg-blue-100 hover:scale-110 transition-all duration-300"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="font-bold text-sm min-w-[1.5rem] text-center text-gray-900">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={incrementQuantity}
                  className="w-7 h-7 p-0 rounded border-0 hover:bg-blue-100 hover:scale-110 transition-all duration-300"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={isAdding}
                size="sm"
                className={`btn-gradient-primary text-xs px-4 py-2 rounded-lg font-semibold border-0 shadow-lg ${
                  isAdding ? 'scale-95 opacity-80' : 'hover:scale-105 hover:shadow-xl'
                } transition-all duration-300`}
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                {isAdding ? (
                  <div className="flex items-center">
                    <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                    Adding...
                  </div>
                ) : (
                  'Add'
                )}
              </Button>
            </div>
          ) : (
            <Button disabled size="sm" className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 text-xs mt-4 rounded-lg font-semibold">
              <Clock className="w-3 h-3 mr-1" />
              Unavailable
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCardMobile;
