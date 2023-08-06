import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { Navbar, Hero, Main, Footer, Carousel } from "./components";
import { Home, Games } from "./pages";


const App = () => 
    (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/games" element={<Games/>} />
            </Routes>
        </BrowserRouter>
    )

export default App;