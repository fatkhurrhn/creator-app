import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Quotes';
import AddQuote from './Pages/AddQuote';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Video from './Pages/MentahanVideo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddQuote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/videos" element={<Video />} />
    </Routes>
  );
}

export default App;