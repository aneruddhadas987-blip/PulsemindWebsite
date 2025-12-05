import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Background from './components/Background';
import Solution from './components/Solution';
import AppDevice from './components/AppDevice';
import Breakthroughs from './components/Breakthroughs';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Statistics />
      <Background />
      <Solution />
      <AppDevice />
      <Breakthroughs />
      <Footer />
    </div>
  );
}

export default App;
