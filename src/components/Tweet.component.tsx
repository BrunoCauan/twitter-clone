import styled from 'styled-components';

import { TweetModel } from '../models/Tweet.model';
import { Avatar } from './Avatar.component';

interface TweetProps {
    tweet: TweetModel;
}

export function Tweet({ tweet }: TweetProps) { 
    return (
        <TweetContainer>
            <Avatar user={tweet.author}/>
            
            <TweetContent>
                <TweetHeader>
                    <a href={`profile/${tweet.author.userName}`}>
                        {tweet.author.name}
                    </a>

                    <span className='heading-info'>
                        { tweet.author.userName } · { tweet.time.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }
                    </span>
                </TweetHeader>
                
                <TweetText>{tweet.text}</TweetText>
            
                <TweetFooter>
                    <TweetAction>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                        
                        {tweet?.repliesCount > 0 && 
                            <span className='count'>{tweet.repliesCount}</span>                            
                        }
                    </TweetAction>
                    
                    <TweetAction>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                        
                        {tweet?.retweetsCount > 0 && 
                            <span className='count'>{tweet.retweetsCount}</span>                            
                        }
                    </TweetAction>
                    
                    <TweetAction>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                        
                        {tweet?.likesCount > 0 && 
                            <span className='count'>{tweet.likesCount}</span>                            
                        }
                    </TweetAction>
                </TweetFooter>
            </TweetContent>
        </TweetContainer>
    )
};

const TweetContainer = styled.article`
    display: flex;
    padding: 12px 16px;
    border-bottom: 1px solid #38444d;
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

const TweetAction = styled.div`
    display: flex;
    align-items: center;
    min-width: 52px;

    svg {
        width: 1.25em;
        height: 1.25em;
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