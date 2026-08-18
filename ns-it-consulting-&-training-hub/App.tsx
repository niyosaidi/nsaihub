
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from './context/LocalizationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TrainingPage } from './pages/TrainingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AIChatbot } from './components/AIChatbot';


const App: React.FC = () => {
  return (
    <LocalizationProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <AIChatbot />
        </div>
      </HashRouter>
    </LocalizationProvider>
  );
};

export default App;
