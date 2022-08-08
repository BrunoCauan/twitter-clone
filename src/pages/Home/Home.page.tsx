import { TweetList } from '../../components/TweetList/TweetsList.component';
import { NewTweet } from '../../components/NewTweet/NewTweet.component';

import { HomeHeader } from './Home.styles';

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