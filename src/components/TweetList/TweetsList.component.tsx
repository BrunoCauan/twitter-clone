import { Tweet } from '../Tweet/Tweet.component';
import { TweetModel } from '../../models/Tweet.model';
import { useFetch } from '../../hooks/useFetch.hook';
import { Loading } from '../Loading/Loading.component';

import { TweetListContent } from './TweetList.style';

export function TweetList() {  
    const { data } = useFetch<TweetModel[]>('tweets');
    
    return (
        <TweetListContent>
            { data ? data.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>) : <Loading /> }
        </TweetListContent>
    );
}

