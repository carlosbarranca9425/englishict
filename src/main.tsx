import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Challenge2 from "./routes/Challenge2";
import { Home } from "./routes/Home";
import { StrictMode } from "react";

import "./globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/englishict" element={<Home />} />
                <Route path="/englishict/challenge2" element={<Challenge2 />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
