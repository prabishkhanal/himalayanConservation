import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// Main Components
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Programs from './components/Programs/Programs';
import About from './components/About/About';
import Initiatives from './components/Initiatives/Initiatives';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Legal Pages
import TermsOfUse from './components/Legal/TermsOfUse';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import CharitableDisclosures from './components/Legal/CharitableDisclosures';
import MobileTerms from './components/Legal/MobileTerms';
import Nondiscrimination from './components/Legal/Nondiscrimination';
import LEP from './components/Legal/LEP';
import DMCA from './components/Legal/DMCA';
import FAQ from './components/Legal/FAQ';

function App() {
  // Only use basename in production (GitHub Pages) and development
  const basename = '/himalayan-conservation';

  return (
    <Router basename={basename}>
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Programs />
              <About />
              <Initiatives />
              <Team />
              <Contact />
            </>
          } />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/charitable-disclosures" element={<CharitableDisclosures />} />
          <Route path="/mobile-terms" element={<MobileTerms />} />
          <Route path="/nondiscrimination" element={<Nondiscrimination />} />
          <Route path="/lep" element={<LEP />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
