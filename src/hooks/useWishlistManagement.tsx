
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useWishlistManagement = () => {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const handleToggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
        toast({
          title: "Removed from Wishlist",
          description: "Item removed from your wishlist",
        });
      } else {
        newWishlist.add(productId);
        toast({
          title: "Added to Wishlist",
          description: "Item added to your wishlist",
        });
      }
      return newWishlist;
    });
  };

  return {
    wishlist,
    handleToggleWishlist
  };
};
