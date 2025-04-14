import { useState, useEffect } from 'react';
import { db, quotesCollection } from '../firebase';
import { getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Admin = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  const navigate = useNavigate();

  // Cek apakah user sudah login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
    return unsubscribe;
  }, [navigate]);

  // Fetch quotes
  useEffect(() => {
    const fetchQuotes = async () => {
      const querySnapshot = await getDocs(quotesCollection);
      const quotesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setQuotes(quotesData);
      setLoading(false);
    };
    fetchQuotes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Yakin hapus quote ini?')) {
      await deleteDoc(doc(db, 'quotes', id));
      setQuotes(quotes.filter(quote => quote.id !== id));
    }
  };

  const handleEdit = (quote) => {
    setEditingId(quote.id);
    setEditText(quote.text);
    setEditAuthor(quote.author);
  };

  const handleUpdate = async () => {
    await updateDoc(doc(db, 'quotes', editingId), {
      text: editText,
      author: editAuthor
    });
    setQuotes(quotes.map(q => 
      q.id === editingId ? { ...q, text: editText, author: editAuthor } : q
    ));
    setEditingId(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Quote</th>
              <th className="px-6 py-3 text-left">Author</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {quotes.map((quote) => (
              <tr key={quote.id}>
                <td className="px-6 py-4">
                  {editingId === quote.id ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    quote.text
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingId === quote.id ? (
                    <input
                      type="text"
                      value={editAuthor}
                      onChange={(e) => setEditAuthor(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    quote.author
                  )}
                </td>
                <td className="px-6 py-4 space-x-2">
                  {editingId === quote.id ? (
                    <button
                      onClick={handleUpdate}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(quote)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(quote.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;