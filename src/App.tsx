import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home/Home.page';
import { TweetDetail } from './pages/TweetDetail/TweetDetail.page';
import { Nav } from './components/Nav/Nav.component';

import { AppComponent, MainContainer } from './App.styles';

export function App() {
    return (
        <AppComponent>
            <Nav />

            <MainContainer>
                <BrowserRouter>
                    <Routes>
                        <Route path='*' element={<Navigate to='home' />} />
                        <Route path='home' element={<Home />} />
                        <Route path=':userName/tweets/:tweetId' element={<TweetDetail />} />
                    </Routes>
                </BrowserRouter>
            </MainContainer>
        </AppComponent>
    );
}
