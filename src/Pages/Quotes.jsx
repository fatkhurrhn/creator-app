import { useState, useEffect } from 'react';
import { quotesCollection } from '../firebase';
import { getDocs, query, orderBy } from 'firebase/firestore';
import AddQuoteModal from '../components/AddQuoteModal';
import NavbarBottom from '../components/BottomNavbar';

const Quotes = () => {
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
      <div className="relative bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-b-0">
        <p className="text-gray-700 text-base mb-3 cursor-pointer text-justify" onClick={handleCopy}>
          "{quote}"
        </p>
        <div className="flex justify-between items-end">
          <p className="text-gray-600 text-sm font-medium">— {author}</p>
          <div className="flex items-center">
            {copied && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">
                Disalin!
              </span>
            )}
            <button
              onClick={handleCopy}
              className="text-gray-400 hover:text-gray-700"
              title="Salin kutipan"
            >
              <i className="ri-clipboard-line"></i>
            </button>
          </div>
        </div>
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
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="container max-w-4xl mx-auto px-4 pb-20">
        <NavbarBottom />
        <div className="text-center flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pt-10">yuk share quote terbaikmu</h1>
          <p className='pb-1'>ambil aja kalo kamu butuh 😉</p>
          <hr />
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
    </div>
  );
};

export default Quotes;