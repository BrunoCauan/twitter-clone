import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { Home } from './pages/Home.page';
import { TweetDetail } from './pages/TweetDetail.page';
import { Nav } from './components/Nav.component';

export function App() {
    return (
        <AppComponent>
            <Nav />

            <MainContainer>
                <BrowserRouter>
                
                <Routes>
                    <Route path='/' element={<Navigate to='home' />} />
                    <Route path='home' element={<Home />} />
                    <Route path=':userName/tweets/:tweetId' element={<TweetDetail />} />
                </Routes>
            </BrowserRouter>
            </MainContainer>
        </AppComponent>
    );
}

const AppComponent = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: auto;
    flex-grow: 2;

    & > * {
        border-left: 1px solid #38444d;
        border-right: 1px solid #38444d;
        width: 100%;
        max-width: 600px;
        height: 100%;

        & > * {
            padding-left: 16px;
            padding-right: 16px;
        }
    }

    header {
        display: flex;
        align-items: center;
        max-height: 53px;
        min-height: 53px;
        background-color: #15202bbf;
        backdrop-filter: blur(12px);
        position: sticky;
        top: 0;
        left: 0;
    }
`;
