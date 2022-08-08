/// <reference types="vite-plugin-svgr/client" />
import { useLocation, useParams } from 'react-router-dom';

import { Tweet } from '../../components/Tweet/Tweet.component';
import { TweetModel } from '../../models/Tweet.model';
import { useFetch } from '../../hooks/useFetch.hook';
import { Loading } from '../../components/Loading/Loading.component';

import { ReactComponent as Back } from '../../assets/icons/back.svg';
import { BackRoute } from './TweetDetail.styles';

export function TweetDetail() {
    const params = useParams();
    const { state: prefetchedData } = useLocation();
    const { data } = useFetch<TweetModel>(`tweets/${params.tweetId}`, prefetchedData);

    return (
        <>
            <header>
                <BackRoute to='/home'>
                    <Back />
                </BackRoute>

                <h2>Tweet</h2>
            </header>
            
            <div>
                { data ? <Tweet tweet={data}/> : <Loading /> }
            </div>
        </>
    );
}


