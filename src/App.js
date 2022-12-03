import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/categories';
import Navigation from './components/Navigate';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
