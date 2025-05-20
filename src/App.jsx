import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Speakers from './components/Speakers';
import MeetOurTeam from './components/MeetOurTeam';
import LastPage from './components/LastPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';
import Event from './components/Event';

// ...existing code...
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div className="relative pt-24 min-h-screen"> */}
        <GridBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<MeetOurTeam />} />
          <Route path="/event" element={<Event />} />
          <Route path="/lastPage" element={<LastPage />} />
        </Routes>
      {/* </div> */}
      <Footer />
    </BrowserRouter>
  );
}
// ...existing code...




export default App;
