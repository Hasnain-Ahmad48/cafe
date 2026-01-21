import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DealPage from './pages/DealPage';
import CategoryPage from './pages/CategoryPage';
import Reservation from './pages/Reservation';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu/:categoryId" element={<CategoryPage />} />


                <Route path="/deals/:dealId" element={<DealPage />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default App;