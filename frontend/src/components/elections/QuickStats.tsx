function QuickStats() {
  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">3</div>
            <div className="text-gray-600 mt-2">Upcoming Elections</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">12</div>
            <div className="text-gray-600 mt-2">Candidates to Review</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">45</div>
            <div className="text-gray-600 mt-2">Days Until Next Election</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickStats;
