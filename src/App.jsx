import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DealPage from './pages/DealPage';
import CategoryPage from './pages/CategoryPage';
import Reservation from './pages/Reservation';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu/:categoryId" element={<CategoryPage />} />


                <Route path="/deals/:dealId" element={<DealPage />} />
                <Route path="/reservation" element={<Reservation />} />
            </Routes>
        </Router>
    )
}

export default App;