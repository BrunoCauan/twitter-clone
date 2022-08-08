import styled from 'styled-components';

import { Nav } from '../components/Nav.component';
import { TweetList } from '../components/TweetsList.component';
import { NewTweet } from '../components/NewTweet.component';

export function Home() {
    return (
        <HomeComponent>
            <Nav />

            <MainContainer>
                <MainHeader>
                    <h2>Home</h2>
                </MainHeader>
                
                <NewTweet />
                <TweetList />
            </MainContainer>
        </HomeComponent>
    );
}

const HomeComponent = styled.div`
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

        & > * {
            padding-left: 16px;
            padding-right: 16px;
        }
    }
`;

const MainHeader = styled.header`
    display: flex;
    align-items: center;
    height: 53px;
    background-color: #15202bbf;
    backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    left: 0;

    h2 {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        margin: 0;
    }
`;