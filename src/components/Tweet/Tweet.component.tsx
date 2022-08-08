/// <reference types="vite-plugin-svgr/client" />

import { TweetModel } from '../../models/Tweet.model';
import { Avatar } from '../Avatar/Avatar.component';

import { ReactComponent as Replies } from '../../assets/images/replies.svg';
import { ReactComponent as Retweets } from '../../assets/images/retweets.svg';
import { ReactComponent as Likes } from '../../assets/images/likes.svg';
import { StyledLink, TweetAction, TweetContainer, TweetContent, TweetFooter, TweetHeader, TweetText } from './Tweet.style';

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

