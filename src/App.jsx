import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Speakers from './components/Speakers';
import MeetOurTeam from './components/MeetOurTeam';
import LastPage from './components/LastPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';
import Event from './components/Event';
import About from './components/About';
import SponsorForm from './components/SponsorForm';
import { Toaster } from "sonner"
import EventDetails from './components/EventDetails';
import AdminDashboard from './components/admin/AdminDashboard';
import CreateEvent from './components/admin/CreateEvent';
import EditEvent from './components/admin/EditEvent';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative pt-24 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/team" element={<MeetOurTeam />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/lastPage" element={<LastPage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/sponsor" element={<SponsorForm />} />
          
          {/* Admin Routes */}
          <Route path="/admin/" element={<AdminDashboard />} />
          <Route path="/admin/events/create" element={<CreateEvent />} />
          <Route path="/admin/events/edit/:eventId" element={<EditEvent />} />
        </Routes>
      </div>
      <Footer />
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  );
}

export default App;
