
// I needed to define props for this component because typescript couldn't deteremine them automatically
interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: "light" | "dark";  // Optional (has default value)
  onClick?: () => void;
}

function CTASection({title, subtitle, buttonText, buttonLink, variant = "light", onClick}: CTASectionProps) {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 opacity-90">{subtitle}</p>
        <button 
          onClick={onClick}
          className={`${isDark ? 'bg-white text-gray-800' : 'bg-white text-blue-600'} px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition text-lg`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default CTASection;