import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;