import { createRoot } from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router";
import Challenge2 from "./routes/Challenge2";
import { Home } from "./routes/Home";
import { StrictMode } from "react";

import "./globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/challenge2" element={<Challenge2 />} />
            </Routes>
        </HashRouter>
    </StrictMode>
);
