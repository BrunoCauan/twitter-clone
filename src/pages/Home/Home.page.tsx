import { TweetList } from '../../components/TweetList/TweetsList.component';
import { NewTweet } from '../../components/NewTweet/NewTweet.component';

export function Home() {
    return (
        <>
            <header>
                <h2>Home</h2>
            </header>
            
            <NewTweet />
            <TweetList />
        </>
    );
}