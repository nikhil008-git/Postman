import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Speakers from './components/Speakers';
import MeetOurTeam from './components/MeetOurTeam';
import LastPage from './components/LastPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<MeetOurTeam />} />
          <Route path="/lastPage" element={<LastPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
