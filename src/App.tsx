import styled from 'styled-components';

import { Header } from './components/Header.component';
import { TweetList } from './components/TweetsList.component';

export function App() {
    return (
        <Home>
            <Header />
            <TweetList />
        </Home>
    );
}

const Home = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
`;