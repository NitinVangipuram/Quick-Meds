
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import SearchSuggestions from './SearchSuggestions';
import NotificationDropdown from './NotificationDropdown';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
  categories: string[];
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  onCartClick,
  onSearch,
  onCategorySelect,
  categories
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([
    'Aspirin', 'Insulin', 'Thermometer', 'Vitamin C', 'Band Aid'
  ]);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add to search history if not already present
      if (!searchHistory.includes(searchQuery.trim())) {
        setSearchHistory(prev => [searchQuery.trim(), ...prev.slice(0, 9)]);
      }
      onSearch(searchQuery);
      setShowSuggestions(false);
    }
  };

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setSearchQuery(suggestion);
    // Add to search history if not already present
    if (!searchHistory.includes(suggestion)) {
      setSearchHistory(prev => [suggestion, ...prev.slice(0, 9)]);
    }
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    toast({
      title: "Search History Cleared",
      description: "Your search history has been cleared"
    });
  };

  const handleRemoveHistoryItem = (query: string) => {
    setSearchHistory(prev => prev.filter(item => item !== query));
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully"
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive"
      });
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    onCartClick();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      {/* Enhanced Top bar */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">📞 8767243352</span>
            </div>
            <span className="hidden sm:block">✉️ bugevedant@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30">
              🚚 Free Delivery on ₹500+
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30">
              ⏰ 24/7 Service
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-0 hover:bg-white/30">
              🏆 Trusted by 50k+ customers
            </Badge>
          </div>
        </div>
      </div>

      {/* Enhanced Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className="relative">
              <img 
                src="/lovable-uploads/6a5dd1e0-d6d7-47df-9365-8520e1a9bbaf.png" 
                alt="MediCare Pharmacy Logo" 
                className="w-14 h-14 rounded-full mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                MediCare
              </h1>
              <p className="text-sm text-gray-600 font-medium">Your Health Partner</p>
            </div>
          </div>

          {/* Enhanced Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-3xl mx-8 relative">
            <form onSubmit={handleSearch} className="flex w-full relative">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search for medicines, health products, or symptoms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="h-12 text-lg pl-4 pr-12 shadow-sm focus:shadow-md transition-shadow rounded-r-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                
                {showSuggestions && (
                  <SearchSuggestions
                    searchQuery={searchQuery}
                    onSelectSuggestion={handleSuggestionSelect}
                    onClose={() => setShowSuggestions(false)}
                    searchHistory={searchHistory}
                    onClearHistory={handleClearHistory}
                    onRemoveHistoryItem={handleRemoveHistoryItem}
                  />
                )}
              </div>
              
              <Button 
                type="submit" 
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-l-none"
              >
                <Search className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Enhanced Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            {user && <NotificationDropdown />}

            {/* Enhanced User Account */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium text-gray-900">Account</div>
                      <div className="text-xs text-gray-500">{user.email?.split('@')[0]}</div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border-0 shadow-xl">
                  <DropdownMenuItem onClick={handleProfileClick} className="p-3 cursor-pointer">
                    <User className="w-4 h-4 mr-3" />
                    <div>
                      <div className="font-medium">My Profile</div>
                      <div className="text-xs text-gray-500">Manage your account</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="p-3 text-red-600 cursor-pointer">
                    <LogOut className="w-4 h-4 mr-3" />
                    <div>
                      <div className="font-medium">Sign Out</div>
                      <div className="text-xs text-gray-500">Logout from your account</div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                onClick={() => navigate('/auth')}
                className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded-lg"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:block font-medium">Login</span>
              </Button>
            )}

            {/* Enhanced Cart */}
            <Button
              variant="ghost"
              className="relative p-3 hover:bg-gray-50 rounded-full"
              onClick={handleCartClick}
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Search */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-4 pb-4 border-t border-gray-100 pt-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="pr-12 h-12 text-lg"
                />
                <Button type="submit" className="absolute right-1 top-1 bottom-1 px-4 bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              
              {showSuggestions && (
                <SearchSuggestions
                  searchQuery={searchQuery}
                  onSelectSuggestion={handleSuggestionSelect}
                  onClose={() => setShowSuggestions(false)}
                  searchHistory={searchHistory}
                  onClearHistory={handleClearHistory}
                  onRemoveHistoryItem={handleRemoveHistoryItem}
                />
              )}
            </form>

            {/* Mobile Navigation Links */}
            <div className="space-y-2 pt-4">
              {user && (
                <Button 
                  variant="ghost" 
                  onClick={handleProfileClick}
                  className="w-full justify-start text-left"
                >
                  <User className="w-4 h-4 mr-3" />
                  My Profile
                </Button>
              )}
              <Button 
                variant="ghost" 
                onClick={handleCartClick}
                className="w-full justify-start text-left"
              >
                <ShoppingCart className="w-4 h-4 mr-3" />
                Cart ({cartCount})
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
