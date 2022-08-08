import { UserModel } from "../../models/User.model";
import { Avatar } from "../Avatar/Avatar.component";

import { CTAContainer, NewTweetContainer, NewTweetContent, NewTweetForm } from "./NewTweet.styles";

const loggedUser: UserModel = {
    name: 'Brino',
    userName: 'brunocauans',
    profilePictureURL: '',
    id: '123'
};

export function NewTweet() {
    return (
        <NewTweetContainer>
            <NewTweetContent>
                <Avatar user={loggedUser}/>

                <NewTweetForm>
                    <textarea placeholder="What's Happening?"/>

                    <CTAContainer>
                        <button type="button">Tweet</button>
                    </CTAContainer>
                </NewTweetForm>
            </NewTweetContent>
        </NewTweetContainer>
    );
}