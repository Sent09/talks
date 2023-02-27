import 'reflect-metadata'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Home } from './core/pages/Home'
import { NotFound } from './core/pages/NotFound'
import { Header } from './core/components/Header/Header'

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
