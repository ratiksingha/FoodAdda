const Shimmer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Shimmer for search/filter bar */}
      <div className="h-12 w-full md:w-1/2 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
      {/* Shimmer cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 animate-pulse"
          >
            <div className="h-36 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;