import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import PageTransition from './components/ui/PageTransition';
import CursorFollower from './components/ui/CursorFollower';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PersonalInfo from './pages/PersonalInfo';

// Import styles
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <CursorFollower />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="personal-info" element={<PersonalInfo />} />
            </Route>
          </Routes>
        </PageTransition>
      </Router>
    </ThemeProvider>
  );
}

export default App;
