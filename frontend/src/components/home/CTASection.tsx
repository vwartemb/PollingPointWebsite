
// I needed to define props for this component because typescript couldn't deteremine them automatically
interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  variant?: "light" | "dark";
  onClick?: () => void;
  imageUrl?: string;
  showEmailInput?: boolean;
}

function CTASection({title, subtitle, buttonText, variant = "light", onClick, imageUrl, showEmailInput}: CTASectionProps) {
  const isDark = variant === "dark";
  
  return (
    <section 
      className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'} relative`}
      style={imageUrl ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Overlay to see the words better */}
      {imageUrl && <div className="absolute inset-0 bg-black opacity-40"></div>}
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90">{subtitle}</p>

        {/* email portion */}
        {showEmailInput ? (
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              onClick={onClick}
              className={`${isDark ? 'bg-white text-gray-800' : 'bg-white text-blue-600'} px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition text-lg whitespace-nowrap`}
            >
              {buttonText}
            </button>
          </div>
        ) : (
          <button 
            onClick={onClick}
            className={`${isDark ? 'bg-white text-gray-800' : 'bg-white text-blue-600'} px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition text-lg`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}
export default CTASection;