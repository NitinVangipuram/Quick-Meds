
import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Heart, Star, Shield, Clock, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (productId: string) => void;
  isInWishlist: boolean;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isInWishlist }: ProductCardProps) => {
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
    <Card className="group h-full flex flex-col card-enhanced border-0 hover:shadow-elegant transition-all duration-700 hover:scale-[1.02] bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      <div className="relative overflow-hidden rounded-t-2xl">
        {/* Enhanced Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        
        <img
          src={imageError ? fallbackImage : product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
          onError={handleImageError}
        />
        
        {/* Enhanced Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {product.prescription && (
            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-lg backdrop-blur-sm animate-fade-in-up">
              <Shield className="w-3 h-3 mr-1" />
              Rx Required
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border-0 shadow-lg backdrop-blur-sm">
              <Clock className="w-3 h-3 mr-1" />
              Out of Stock
            </Badge>
          )}
          <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-lg backdrop-blur-sm">
            <Award className="w-3 h-3 mr-1" />
            Trusted
          </Badge>
        </div>

        {/* Enhanced Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md border-0 shadow-lg transition-all duration-300 z-20 ${
            isInWishlist 
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 scale-110' 
              : 'bg-white/90 text-gray-700 hover:bg-white hover:text-red-500 hover:scale-110'
          }`}
        >
          <Heart className={`w-5 h-5 transition-all duration-300 ${isInWishlist ? 'fill-current animate-bounce' : ''}`} />
        </Button>

        {/* Enhanced Discount Badge */}
        <div className="absolute bottom-4 left-4 z-20">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg backdrop-blur-sm animate-pulse-glow">
            <Zap className="w-3 h-3 mr-1" />
            Save 17%
          </Badge>
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-15">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className="btn-glass text-white font-bold py-3 px-6 rounded-xl transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      <CardContent className="flex-grow p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="font-bold text-xl text-gray-900 line-clamp-2 group-hover:text-gradient transition-all duration-300 leading-tight">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs font-medium border-blue-200 text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 hover:scale-105 transition-transform">
            {product.manufacturer}
          </Badge>
          {product.dosage && (
            <Badge variant="outline" className="text-xs font-medium border-purple-200 text-purple-700 bg-gradient-to-r from-purple-50 to-purple-100 hover:scale-105 transition-transform">
              {product.dosage}
            </Badge>
          )}
        </div>

        {/* Enhanced Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-all duration-300 ${
                  i < 4 ? 'text-yellow-400 fill-current hover:scale-125' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2 font-medium">(4.2)</span>
          </div>
          <div className="flex items-center space-x-1">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-emerald-600 font-semibold">Fast Delivery</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-y-6">
        {/* Enhanced Pricing */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  ₹{product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{Math.floor(product.price * 1.2)}
                </span>
              </div>
              <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full inline-block">
                Inclusive of all taxes
              </div>
            </div>
          </div>

          {product.inStock ? (
            <div className="space-y-4">
              {/* Enhanced Quantity Selector */}
              <div className="flex items-center justify-center space-x-4 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="w-10 h-10 p-0 rounded-full border-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="font-bold text-2xl min-w-[3rem] text-center text-gray-900">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={incrementQuantity}
                  className="w-10 h-10 p-0 rounded-full border-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Enhanced Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-full btn-gradient-primary py-4 rounded-xl font-bold text-lg shadow-elegant border-0 ${
                  isAdding ? 'scale-95 opacity-80' : 'hover:scale-105'
                } transition-all duration-300`}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {isAdding ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Adding...
                  </div>
                ) : (
                  'Add to Cart'
                )}
              </Button>
            </div>
          ) : (
            <Button disabled className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 cursor-not-allowed font-bold py-4 rounded-xl">
              <Clock className="w-5 h-5 mr-2" />
              Currently Unavailable
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
