import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home.page";
import { TweetDetail } from "./pages/TweetDetail.page";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path=":userName/tweet/:tweetId" element={<TweetDetail />} />
            </Routes>
        </BrowserRouter>
    );
}
