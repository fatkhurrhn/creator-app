import { Routes, Route } from 'react-router-dom';
import HomePageCreator from './Pages/HomePage';
import Storythur from './Pages/Storythur';
import Quotes from './Pages/Quotes';
import MentahanAudio from './Pages/Mentahan';
import MentahanVideo from './Pages/MentahanVideo';
import Store from './Pages/Store';
import StoreMl from './Pages/detailStore/DetailDiamondML';
import StoreNetflix from './Pages/detailStore/DetailNetflix';
import StoreCapcut from './Pages/detailStore/DetailCapcut';
import StoreCanva from './Pages/detailStore/DetailCanva';
import StoreViu from './Pages/detailStore/DetailViu';
import StoreYT from './Pages/detailStore/DetailYoutube';
import StoreAM from './Pages/detailStore/DetailAlightMotion';
import Other from './Pages/Other';

function App() {
  return (
    <Routes>
     {/* ── Creator Routes ────────────── */}
        <Route path="/" element={<HomePageCreator />} />
        <Route path="/storythur" element={<Storythur />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/mentahan" element={<MentahanAudio />} />
        <Route path="/mentahan-audio" element={<MentahanAudio />} />
        <Route path="/mentahan-video" element={<MentahanVideo />} />
        <Route path="/other" element={<Other />} />

        {/* ── Store ─────────────── */}
        <Route path="/store" element={<Store />} />
        <Route path="/store/diamond-ml" element={<StoreMl />} />
        <Route path="/store/netflix" element={<StoreNetflix />} />
        <Route path="/store/capcut" element={<StoreCapcut />} />
        <Route path="/store/canva" element={<StoreCanva />} />
        <Route path="/store/viu" element={<StoreViu />} />
        <Route path="/store/alight-motion" element={<StoreAM />} />
        <Route path="/store/youtube" element={<StoreYT />} />
    </Routes>
  );
}

export default App;