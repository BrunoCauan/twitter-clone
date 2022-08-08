
import { ChangeEvent, useRef, useState } from 'react';
import { UserModel } from '../../models/User.model';
import { Avatar } from '../Avatar/Avatar.component';

import { CTAContainer, NewTweetContainer, NewTweetContent, NewTweetForm } from './NewTweet.styles';

const loggedUser: UserModel = {
    name: 'Brino',
    userName: 'brunocauans',
    profilePictureURL: '',
    id: '123'
};

export function NewTweet() {
    const [tweet, setTweet] = useState('');
    const textarea = useRef<HTMLTextAreaElement>(null);

    const handleTweetChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (textarea.current) {
            textarea.current.style.height = '48px';
        }

        setTweet(event.target.value.trim().slice(0, 140));
        
        if (textarea.current) {
            textarea.current.style.height = `${textarea.current.scrollHeight}px`;
        }
    };

    const handleSendTweet = () => {
        setTweet('');
        
        if (textarea.current) {
            textarea.current.style.height = '48px';
        }

        console.log(tweet.trim());
    };
    
    return (
        <NewTweetContainer>
            <NewTweetContent>
                <Avatar user={loggedUser}/>

                <NewTweetForm>
                    <textarea ref={textarea} placeholder="What's Happening?" maxLength={140} value={tweet} onChange={handleTweetChange}/>

                    <CTAContainer>
                        <span>{tweet.trim().length} / 140</span>

                        <button type="button" disabled={!tweet.trim()} onClick={handleSendTweet}>Tweet</button>
                    </CTAContainer>
                </NewTweetForm>
            </NewTweetContent>
        </NewTweetContainer>
    );
}