import { useState, useEffect } from 'react';
import { quotesCollection } from '../firebase';
import { getDocs, query, orderBy } from 'firebase/firestore';
import AddQuoteModal from '../components/AddQuoteModal';
import NavbarBottom from '../components/BottomNavbar';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const q = query(quotesCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const quotesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuotes(quotesData);
      } catch (error) {
        console.error("Error fetching quotes: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  const handleQuoteAdded = () => {
    // Refresh quotes after adding a new one
    const fetchQuotes = async () => {
      const q = query(quotesCollection, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const quotesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setQuotes(quotesData);
    };
    fetchQuotes();
  };

  const QuoteCard = ({ quote, author, date }) => {
    return (
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
        <p className="text-gray-700 text-base sm:text-lg italic flex-grow">"{quote}"</p>
        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <span className="text-gray-600 font-medium text-sm sm:text-base">— {author}</span>
          <span className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-0">
            {new Date(date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-center py-10 text-gray-600">
          Memuat quotes...
        </div>
      </div>
    );
  }

  return (
    
    <div className="container mx-auto px-4 py-6 sm:py-8 pb-20 sm:pb-8">
        <NavbarBottom/>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">yuk share quote terbaikmu</h1>
        {/* Desktop Button (hidden on mobile) */}
        <button
          onClick={() => setShowModal(true)}
          className="hidden sm:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Tambah Quote
        </button>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {quotes.map((quote) => (
            <QuoteCard 
              key={quote.id}
              quote={quote.text}
              author={quote.author}
              date={quote.createdAt?.toDate() || new Date()}
            />
          ))}
        </div>

     {/* Floating Action Button for Mobile */}
<button
  onClick={() => setShowModal(true)}
  className="sm:hidden fixed bottom-16 right-6 bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
  aria-label="Tambah Quote"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
</button>

      {/* Modal */}
      {showModal && (
        <AddQuoteModal 
          onClose={() => setShowModal(false)} 
          onQuoteAdded={handleQuoteAdded}
        />
      )}
    </div>
  );
};

export default Home;