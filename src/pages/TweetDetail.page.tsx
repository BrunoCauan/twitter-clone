/// <reference types="vite-plugin-svgr/client" />
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Tweet } from '../components/Tweet.component';
import { TweetModel } from '../models/Tweet.model';

import { ReactComponent as Back } from '../assets/images/back.svg';

const tweet: TweetModel = {
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
};

export function TweetDetail() {
    return (
        <>
            <header>

                <BackRoute to='/home'>
                    <Back />
                </BackRoute>

                <TweetDetailHeader>Tweet</TweetDetailHeader>
            </header>
            
            <div>
                <Tweet tweet={tweet}/>
            </div>
        </>
    );
}

const BackRoute = styled(Link)`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;

    svg {
        width: 20px;
        height: 20px;
        fill: #eff3f4;
    }
`;

const TweetDetailHeader = styled.h2`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0;
`;
