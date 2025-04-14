import { useState, useEffect } from 'react';
import { quotesCollection } from '../firebase';
import { getDocs } from 'firebase/firestore';
import QuoteCard from '../components/QuoteCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const querySnapshot = await getDocs(quotesCollection);
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

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Kumpulan Quote</h1>
        <Link 
          to="/add" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Tambah Quote
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <QuoteCard 
            key={quote.id}
            quote={quote.text}
            author={quote.author}
            date={quote.createdAt?.toDate() || new Date()}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;