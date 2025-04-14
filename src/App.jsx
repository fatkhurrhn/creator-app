import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddQuote from './Pages/AddQuote';
import Login from './Pages/Login';
import Admin from './Pages/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddQuote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;