import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BackgroundPage from './pages/BackgroundPage';
import SolutionPage from './pages/SolutionPage';
import AppDevicePage from './pages/AppDevicePage';
import BreakthroughsPage from './pages/BreakthroughsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/background" element={<BackgroundPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/app-device" element={<AppDevicePage />} />
            <Route path="/breakthroughs" element={<BreakthroughsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
