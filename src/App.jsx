import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Link from 'react-router-dom';
import DealPage from './pages/DealPage';
import CategoryPage from './pages/CategoryPage';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu/:categoryId" element={<CategoryPage />} />
            
                  
                <Route path="/deals/:dealId" element={<DealPage />} />
            </Routes>
        </Router>
    )
}

export default App;