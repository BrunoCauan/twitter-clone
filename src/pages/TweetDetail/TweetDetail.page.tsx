/// <reference types="vite-plugin-svgr/client" />
import { useParams } from 'react-router-dom';

import { Tweet } from '../../components/Tweet/Tweet.component';
import { TweetModel } from '../../models/Tweet.model';
import { useFetch } from '../../hooks/useFetch.hook';
import { Loading } from '../../components/Loading/Loading.component';

import { ReactComponent as Back } from '../../assets/images/back.svg';
import { BackRoute, TweetDetailHeader } from './TweetDetail.styles';

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
                { data ? <Tweet tweet={data}/> : <Loading /> }
            </div>
        </>
    );
}


