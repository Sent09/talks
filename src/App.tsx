import 'reflect-metadata'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { Home } from './core/pages/Home';
import { NotFound } from './core/pages/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
