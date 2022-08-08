import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Nav } from './components/Nav/Nav.component';
import { Home } from './pages/Home/Home.page';
import { TweetDetail } from './pages/TweetDetail/TweetDetail.page';
import { Profile } from './pages/Profile/Profile.page';
import { Notifications } from './pages/Notifications/Notifications.page';
import { Messages } from './pages/Messages/Messages.page';

import { AppComponent, MainContainer } from './App.styles';

export function App() {
    return (
        <BrowserRouter>
            <AppComponent>
                <Nav />

                <MainContainer>
                    <Routes>
                        <Route path='*' element={<Navigate to='home' />} />
                        <Route path='/home' element={<Home />} />
                        <Route path=':userName/tweets/:tweetId' element={<TweetDetail />} />
                        <Route path=':userName' element={<Profile />} />
                        <Route path='/notifications' element={<Notifications />} />
                        <Route path='/messages' element={<Messages />} />
                    </Routes>
                </MainContainer>
            </AppComponent>
        </BrowserRouter>
    );
}
