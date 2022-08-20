import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
