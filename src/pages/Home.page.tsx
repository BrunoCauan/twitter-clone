import styled from 'styled-components';

import { Nav } from '../components/Nav.component';
import { TweetList } from '../components/TweetsList.component';
import { NewTweet } from '../components/NewTweet.component';

export function Home() {
    return (
        <>
            <header>
                <HomeHeader>Home</HomeHeader>
            </header>
            
            <NewTweet />
            <TweetList />
        </>
    );
}

const HomeHeader = styled.h2`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0;
`;