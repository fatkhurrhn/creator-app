const QuoteCard = ({ quote, author, date }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <p className="text-gray-700 text-lg italic">"{quote}"</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-600 font-medium">— {author}</span>
          <span className="text-gray-500 text-sm">{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    );
  };
  
  export default QuoteCard;