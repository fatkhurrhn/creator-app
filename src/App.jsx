import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Quote from './Pages/Quotes';
import AddQuote from './Pages/AddQuote';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Tes from './Pages/Tes';
import Photo from './Pages/Photos';
import Video from './Pages/Videos';
import More from './Pages/More';
import PaidPromote from './Pages/PaidPromote';

import Store from './Pages/Store/index';
import Netflix from './Pages/Store/DetailNetflix';
import Dm from './Pages/Store/DetailDiamondML';
import Data from './Pages/Store/DataCustomer';
import Am from './Pages/Store/DetailAlightMotion';
import Bs from './Pages/Store/DetailBstation';
import Canva from './Pages/Store/DetailCanva';
import CC from './Pages/Store/DetailCapcut';
import Pulsa from './Pages/Store/DetailPulsa';
import Viu from './Pages/Store/DetailViu';
import Yt from './Pages/Store/DetailYoutube';

function App() {
  return (
    <Routes>
      <Route path="/store" element={<Store />} />
      <Route path="/store/netflix" element={<Netflix />} />
      <Route path="/store/diamond-ml" element={<Dm />} />
      <Route path="/store/customer" element={<Data />} />
      <Route path="/store/alight-motion" element={<Am />} />
      <Route path="/store/bstation" element={<Bs />} />
      <Route path="/store/canva" element={<Canva />} />
      <Route path="/store/capcut" element={<CC />} />
      <Route path="/store/pulsa" element={<Pulsa />} />
      <Route path="/store/viu" element={<Viu />} />
      <Route path="/store/youtube" element={<Yt />} />

      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quote />} />
      <Route path="/add" element={<AddQuote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/videos" element={<Video />} />
      <Route path="/tes" element={<Tes />} />
      <Route path="/photos" element={<Photo />} />
      <Route path="/more" element={<More />} />
      <Route path="/paid-promote" element={<PaidPromote />} />
    </Routes>
  );
}

export default App;