import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import CaseStudy from './components/CaseStudy';
import About from './components/About';

export default function App() {
  const [page, setPage] = useState('home');
  const [project, setProject] = useState(null);

  function handleSetPage(p) {
    setPage(p);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Nav page={page} setPage={handleSetPage} />
      {page === 'home' && (
        <Home setPage={handleSetPage} setProject={setProject} />
      )}
      {page === 'case' && project && (
        <CaseStudy projectId={project} setPage={handleSetPage} />
      )}
      {page === 'about' && <About />}
    </div>
  );
}
