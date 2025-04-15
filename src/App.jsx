import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Quote from './Pages/Quotes';
import AddQuote from './Pages/AddQuote';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Video from './Pages/MentahanVideo';
import Tes from './Pages/Tes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quote />} />
      <Route path="/add" element={<AddQuote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/videos" element={<Video />} />
      <Route path="/tes" element={<Tes />} />
    </Routes>
  );
}

export default App;