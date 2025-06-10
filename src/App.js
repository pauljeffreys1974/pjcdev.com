import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SiteHeader from './Components/HeaderFooter/SiteHeader';
import Home from './Components/Home';
import SiteFooter from './Components/HeaderFooter/SiteFooter';

import About from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* SiteHeader will appear on all pages because it's outside <Routes> */}
        <SiteHeader />

        {/* Routes defines the areas where content changes based on the URL */}
        <Routes>
          {/* Home page route - exact path for '/' */}
          <Route path="/" element={<Home />} />

          {/* About Me page route */}
          <Route path="/about" element={<About />} />

          {/* Portfolio page route */}
          <Route path="/resume" element={<Resume />} />

          {/* Projects page route */}
          <Route path="/projects" element={<Projects />} />

          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />

          {/* Optional: Add a catch-all route for 404 Not Found pages */}
          {/* <Route path="*" element={<div>404 - Not Found</div>} /> */}

        </Routes>

        {/* SiteFooter will appear on all pages because it's outside <Routes> */}
        <SiteFooter />
      </Router>
    </div>
  );
}

export default App;
