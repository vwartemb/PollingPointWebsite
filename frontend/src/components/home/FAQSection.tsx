interface FAQSectionProps {
  question: string;
  answer: string;
  isOpen: string;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span className="text-blue-600 text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;