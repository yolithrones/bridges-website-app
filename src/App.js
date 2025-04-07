import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/theme';
import GlobalStyles from './styles/GlobalStyles';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Ticker from './components/layout/Ticker';

// Page Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import FAQ from './components/pages/FAQ';
import SiteMap from './components/pages/SiteMap';
import Travel from './components/pages/Travel';
import BridgeList from './components/bridges/BridgeList';
import BridgeDetail from './components/bridges/BridgeDetail';
import FeedbackForm from './components/feedback/FeedbackForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/bridges" element={<BridgeList />} />
          <Route path="/bridges/:id" element={<BridgeDetail />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
        <Ticker />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
