import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        {/* Navigation Bar */}
        <NavBar/>

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;