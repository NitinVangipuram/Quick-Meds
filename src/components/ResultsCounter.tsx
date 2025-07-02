
interface ResultsCounterProps {
  count: number;
  searchQuery: string;
  selectedCategory: string;
}

const ResultsCounter = ({ count, searchQuery, selectedCategory }: ResultsCounterProps) => {
  return (
    <div className="mb-6">
      <p className="text-gray-600 text-sm md:text-base">
        Showing {count} products
        {searchQuery && ` for "${searchQuery}"`}
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </p>
    </div>
  );
};

export default ResultsCounter;
