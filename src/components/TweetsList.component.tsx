import styled from 'styled-components';

import { Tweet } from './Tweet.component';
import { TweetModel } from '../models/Tweet.model';
import { useFetch } from '../hooks/useFetch.hook';

export function TweetList() {  
    const { data } = useFetch<TweetModel[]>('tweets');
    
    return (
        <TweetListContent>
            { data?.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>) }
        </TweetListContent>
    );
}

const TweetListContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;