import './App.css'
import Index from './Index';
import Article from './components/Article';
import { useMode } from './ModeProvider';
import Resume from './components/Resume';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MoreProjects from './components/MoreProjects';

function App() {
  const { mode } = useMode();
  return (
    <div className={`cursor-custom ${(mode == "light") ? ('bg-light-mode-primary text-dark-mode-primary ') : ('bg-dark-mode-primary text-light-mode-primary')}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-study/:ids" element={<Article />} />
          <Route path="/more-projects" element={<MoreProjects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
