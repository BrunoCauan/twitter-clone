import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import { Login } from './pages/Login/Login.page';
import { Register } from './pages/Register/Register.page';
import { Nav } from './components/Nav/Nav.component';
import { Home } from './pages/Home/Home.page';
import { TweetDetail } from './pages/TweetDetail/TweetDetail.page';
import { Profile } from './pages/Profile/Profile.page';
import { Notifications } from './pages/Notifications/Notifications.page';
import { Messages } from './pages/Messages/Messages.page';

import { AppComponent, MainContainer } from './App.styles';
import { UserContext } from './contexts/User.context';
import { UserModel } from './models/User.model';

export function App() {
    const [user, setUser] = useState<UserModel | null>(null);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                { Routes(user) }
            </UserContext.Provider>
        </BrowserRouter>
    );
}

function Routes(user: UserModel | null) {
    if (user) {
        return AuthorizedRoutes();
    }
    
    return (
        <Switch>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Navigate to='login' />} />
        </Switch>
    );
}

function AuthorizedRoutes() {
    return (
        <AppComponent>
            <Nav />

            <MainContainer>
                <Switch>
                    <Route path='/home' element={<Home />} />
                    <Route path=':userName/tweets/:tweetId' element={<TweetDetail />} />
                    <Route path=':userName' element={<Profile />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='*' element={<Navigate to='home' />} />
                </Switch>
            </MainContainer>
        </AppComponent>
    );
}
