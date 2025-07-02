
import React from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SearchHistory from './SearchHistory';

interface SearchSuggestionsProps {
  searchQuery: string;
  onSelectSuggestion: (suggestion: string) => void;
  onClose: () => void;
  searchHistory: string[];
  onClearHistory: () => void;
  onRemoveHistoryItem: (query: string) => void;
}

const SearchSuggestions = ({ 
  searchQuery, 
  onSelectSuggestion, 
  onClose, 
  searchHistory, 
  onClearHistory, 
  onRemoveHistoryItem 
}: SearchSuggestionsProps) => {
  const popularSearches = [
    'Paracetamol', 'Vitamin D', 'Blood pressure', 'Diabetes care', 
    'Hand sanitizer', 'Face masks', 'Cough syrup', 'Antibiotics'
  ];

  const filteredSuggestions = popularSearches.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!searchQuery && searchHistory.length === 0 && popularSearches.length === 0) {
    return null;
  }

  return (
    <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardContent className="p-4 max-h-80 overflow-y-auto">
        {searchQuery && filteredSuggestions.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-700">Search Results</span>
            </div>
            <div className="space-y-2">
              {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => onSelectSuggestion(suggestion)}
                  className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                >
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!searchQuery && (
          <>
            <SearchHistory
              searchHistory={searchHistory}
              onSelectHistory={onSelectSuggestion}
              onClearHistory={onClearHistory}
              onRemoveHistoryItem={onRemoveHistoryItem}
            />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Popular Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.slice(0, 6).map((search, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    onClick={() => onSelectSuggestion(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchSuggestions;
