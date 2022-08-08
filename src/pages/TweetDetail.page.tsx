/// <reference types="vite-plugin-svgr/client" />
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Tweet } from '../components/Tweet.component';
import { TweetModel } from '../models/Tweet.model';
import { useFetch } from '../hooks/useFetch.hook';

import { ReactComponent as Back } from '../assets/images/back.svg';

export function TweetDetail() {
    const params = useParams();
    const { data } = useFetch<TweetModel>(`tweets/${params.tweetId}`);
    
    return (
        <>
            <header>

                <BackRoute to='/home'>
                    <Back />
                </BackRoute>

                <TweetDetailHeader>Tweet</TweetDetailHeader>
            </header>
            
            <div>
                { data && <Tweet tweet={data}/> }
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
