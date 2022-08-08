
import { UserModel } from '../../models/User.model';

import profile from '../../assets/images/user-profile.jpg';
import { AvatarContainer, AvatarRoot, AvatarImage, AvatarFallback } from './Avatar.styles';

interface AvatarProps {
    user: UserModel;
}

export function Avatar({ user }: AvatarProps) {
    return (
        <AvatarContainer>
            <AvatarRoot>
                <AvatarImage src={profile} alt='Profile Picture' />
                <AvatarFallback delayMs={600}>{user.name[0].toUpperCase()}</AvatarFallback>
            </AvatarRoot>
        </AvatarContainer>
    );
}

