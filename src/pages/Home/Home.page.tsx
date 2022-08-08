import { TweetList } from '../../components/TweetList/TweetsList.component';
import { NewTweet } from '../../components/NewTweet/NewTweet.component';
import { Header } from '../../components/Header/Header.component';

export function Home() {
    return (
        <>
            <Header title="Home" />
            <NewTweet />
            <TweetList />
        </>
    );
}