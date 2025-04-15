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

  const QuoteCard = ({ quote, author }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(`${quote} — ${author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    return (
      <div className="relative bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="flex-grow flex items-center">
          <p 
            className="text-gray-700 text-base sm:text-lg cursor-pointer"
            onClick={handleCopy}
          >
            "{quote}"
            <span className="block text-gray-600 font-medium mt-2">— {author}</span>
          </p>
        </div>
        

        {copied && (
          <div className="absolute bottom-4 right-9 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
            Disalin!
          </div>
        )}
        <button 
  onClick={handleCopy}
  className="absolute bottom-3 right-3 text-gray-400 hover:text-gray-700 text-lg"
  title="Salin kutipan"
>
  <i className="ri-clipboard-line"></i>
</button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-center py-10 text-black">
          Memuat quotes...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 pb-20 sm:pb-8">
      <NavbarBottom />
      <div className="text-center flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pt-10">yuk share quote terbaikmu</h1>
        <p className='pb-1'>ambil aja kalo kamu butuh 😉</p>
        <hr />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {quotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote.text}
            author={quote.author}
          />
        ))}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="sm:hidden fixed bottom-16 right-6 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:shadow-xl"
        aria-label="Tambah Quote"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

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