/// <reference types="vite-plugin-svgr/client" />
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TweetModel } from '../models/Tweet.model';
import { Avatar } from './Avatar.component';

import { ReactComponent as Replies } from '../assets/images/replies.svg';
import { ReactComponent as Retweets } from '../assets/images/retweets.svg';
import { ReactComponent as Likes } from '../assets/images/likes.svg';

interface TweetProps {
    tweet: TweetModel;
}

export function Tweet({ tweet }: TweetProps) { 
    return (
        <TweetContainer>
            <StyledLink to={`/${tweet.author.userName}/tweets/${tweet.id}`}>
                <Avatar user={tweet.author}/>
                
                <TweetContent>
                    <TweetHeader>
                        <a href={`profile/${tweet.author.userName}`}>
                            {tweet.author.name}
                        </a>

                        <span className='heading-info'>
                            @{ tweet.author.userName } · { new Date(tweet.time).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }
                        </span>
                    </TweetHeader>
                    
                    <TweetText>{tweet.text}</TweetText>
                
                    <TweetFooter>
                        <TweetAction>
                            <Replies />

                            {tweet?.repliesCount > 0 && 
                                <span className='count'>{tweet.repliesCount}</span>                            
                            }
                        </TweetAction>
                        
                        <TweetAction>
                            <Retweets />

                            {tweet?.retweetsCount > 0 && 
                                <span className='count'>{tweet.retweetsCount}</span>                            
                            }
                        </TweetAction>
                        
                        <TweetAction>
                            <Likes />
                            
                            {tweet?.likesCount > 0 && 
                                <span className='count'>{tweet.likesCount}</span>                            
                            }
                        </TweetAction>
                    </TweetFooter>
                </TweetContent>
            </StyledLink>
        </TweetContainer>
    )
};

const TweetContainer = styled.article`
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #38444d;
`;

const StyledLink = styled(Link)`
    display: flex;
`;

const TweetContent = styled.div``;

const TweetHeader = styled.div`
    font-size: 15px;
    line-height: 20px;
    
    a {
        font-weight: 700;
        line-height: 20px;
    }

    .heading-info {
        color: #8b98a5;
        font-weight: 400;
        margin-left: 4px;
    }

`;

const TweetText = styled.p`
    margin: 0;
    font-size: 15px;
    line-height: 20px;
    margin-top: 4px;
`;

const TweetFooter = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    width: 60%;
`;

const TweetAction = styled.button`
    border-width: 0;
    outline-style: none;
    background: transparent;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    min-width: 52px;

    svg {
        width: 18px;
        height: 18px;
        fill: #8b98a5;
    }

    .count {
        font-size: 13px;
        line-height: 16px;
        padding-left: 12px;
        padding-right: 12px;
        color: #8b98a5;;
    }
`;