import styled from 'styled-components';

import { Tweet } from './Tweet.component';
import { TweetModel } from '../models/Tweet.model';

const tweetsList: TweetModel[] = [
    {
        author: {
            name: 'Brino',
            userName: 'brunocauans',
            profilePictureURL: '',
            id: '123'
        },
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        time: new Date(),
        repliesCount: 0,
        retweetsCount: 2,
        likesCount: 10,
        id: '123'
    },
    {
        author: {
            name: 'Brino',
            userName: 'brunocauans',
            profilePictureURL: '',
            id: '123'
        },
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        time: new Date(),
        repliesCount: 0,
        retweetsCount: 2,
        likesCount: 10,
        id: '456'
    },
    {
        author: {
            name: 'Brino',
            userName: 'brunocauans',
            profilePictureURL: '',
            id: '123'
        },
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        time: new Date(),
        repliesCount: 0,
        retweetsCount: 2,
        likesCount: 10,
        id: '789'
    }
];

export function TweetList() {  
    return (
        <TweetListContainer>
            <TweetListContent>
                { tweetsList.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>) }
            </TweetListContent>
        </TweetListContainer>
    );
}

const TweetListContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: auto;
`;

const TweetListContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 600px;
    border-left: 1px solid #38444d;
    border-right: 1px solid #38444d;
`;