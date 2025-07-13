import { useState } from 'react';
import { quotesCollection } from '../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';

const AddQuoteModal = ({ onClose, onQuoteAdded }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(quotesCollection, {
        text: quote,
        author: author,
        createdAt: serverTimestamp()
      });
      onQuoteAdded(); // Notify parent that a new quote was added
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding quote: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
    <div className="p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className='text-center'>
          <h2 className="text-2xl font-bold text-gray-800">Tambah Quote Baru</h2>
          <p className="text-sm text-gray-500 mt-1">abadikan quotemu disini</p>
        </div>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Quote Field */}
        <div className="space-y-0">
          <div className="flex items-center">
          </div>
          <textarea
            placeholder="Tulis quotenya di sini..."
            id="quote"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            required
          />
        </div>
        
        {/* Author Field */}
        <div className="space-y-0">
          <div className="flex items-center">
          </div>
          <div className="flex rounded-lg shadow-sm">
            <input
              placeholder="uploader name"
              type="text"
              id="author"
              className="flex-1 min-w-0 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
        </div>
        
        {/* Actions - Full Width Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-center"
          >
            Batal
          </button>
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-black text-white rounded-lg flex items-center justify-center"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default AddQuoteModal;