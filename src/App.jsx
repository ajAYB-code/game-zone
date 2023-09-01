import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import { Navbar, Hero, Main, Footer, Carousel } from "./components";
import { Home, Games } from "./pages";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const App = () => 
    (
        <SkeletonTheme baseColor="#919191" highlightColor="#444">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/games" element={<Games/>} />
                </Routes>
            </BrowserRouter>
        </SkeletonTheme>
    )

export default App;