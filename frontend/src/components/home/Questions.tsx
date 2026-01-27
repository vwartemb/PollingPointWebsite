

function Questions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4">
          Questions
        </h2>
        <p className="text-gray-600 text mb-12">
          Find answers about voting, our platform, and ways to get involved.
        </p>

        <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">How do I register?</h3>
            <p className="mt-2 text-gray-600">
              Registration requirements vary by location and election type. Enter your address on our Elections page to find your specific registration deadline and process. Most states allow online registration through our platform.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I compare candidates?</h3>
            <p className="mt-2 text-gray-600">
              Yes. Our comparison tool lets you view multiple candidates side by side, including their positions on key issues, endorsements, and background information. Select the candidates you want to compare and review their profiles instantly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Is this platform biased?</h3>
            <p className="mt-2 text-gray-600">
              No. We present factual information from official sources without editorial commentary. Our goal is to give you the information you need to make your own decisions about candidates and issues.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How often is information updated?</h3>
            <p className="mt-2 text-gray-600">
              We update candidate information and election details regularly as campaigns progress. You'll see notifications when new information becomes available for candidates you're tracking.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Can I volunteer through this?</h3>
            <p className="mt-2 text-gray-600">
              Yes. Our Get Involved section connects you with volunteer opportunities in your community. You can find campaigns, causes, and civic organizations that match your interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;