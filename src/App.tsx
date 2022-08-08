import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './pages/Login/Login.page';
import { Register } from './pages/Register/Register.page';
import { Nav } from './components/Nav/Nav.component';
import { Home } from './pages/Home/Home.page';
import { TweetDetail } from './pages/TweetDetail/TweetDetail.page';
import { Profile } from './pages/Profile/Profile.page';
import { Notifications } from './pages/Notifications/Notifications.page';
import { Messages } from './pages/Messages/Messages.page';

import { AppComponent, MainContainer } from './App.styles';

const isLoggedIn: boolean = true;

export function App() {
    return (
        <BrowserRouter>
            {getRoutes()}
        </BrowserRouter>
    );
}

function getRoutes() {
    if (isLoggedIn) {
        return AuthorizedRoutes();
    }
    
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Navigate to='login' />} />
        </Routes>
    )
}

function AuthorizedRoutes() {
    return (
        <AppComponent>
            <Nav />

            <MainContainer>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path=':userName/tweets/:tweetId' element={<TweetDetail />} />
                    <Route path=':userName' element={<Profile />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='*' element={<Navigate to='home' />} />
                </Routes>
            </MainContainer>
        </AppComponent>
    )
}
