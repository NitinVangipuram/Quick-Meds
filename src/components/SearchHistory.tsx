
import React from 'react';
import { Clock, X, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchHistoryProps {
  searchHistory: string[];
  onSelectHistory: (query: string) => void;
  onClearHistory: () => void;
  onRemoveHistoryItem: (query: string) => void;
}

const SearchHistory = ({ searchHistory, onSelectHistory, onClearHistory, onRemoveHistoryItem }: SearchHistoryProps) => {
  if (searchHistory.length === 0) return null;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-semibold text-gray-700">Recent Searches</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearHistory}
          className="text-xs text-red-600 hover:text-red-700 p-1"
        >
          <Trash2 className="w-3 h-3 mr-1" />
          Clear All
        </Button>
      </div>
      <div className="space-y-2">
        {searchHistory.slice(0, 5).map((query, index) => (
          <div
            key={index}
            className="flex items-center justify-between group p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
            onClick={() => onSelectHistory(query)}
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-700">{query}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveHistoryItem(query);
              }}
              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded-full transition-opacity"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
