import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import ChallengePage from "./routes/ChallengePage";

import "./globals.css";

function createChallengeSlides(challengeNumber: number) {
    return new Array(6)
    .fill("/englishict/challenge" + challengeNumber)
    .map((e, i) => `${e}/${i + 1}.png`);
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/challenge2" element={<ChallengePage slides={createChallengeSlides(2)} />} />
                <Route path="/challenge6" element={<ChallengePage slides={createChallengeSlides(6)} />} />
            </Routes>
        </HashRouter>
    </StrictMode>
);
