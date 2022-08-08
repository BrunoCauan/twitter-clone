
import { UserModel } from '../../models/User.model';

import profile from '../../assets/images/bruno-profile.jpg';
import { AvatarContainer, AvatarRoot, AvatarImage, AvatarFallback } from './Avatar.styles';
import { Link } from 'react-router-dom';

interface AvatarProps {
    user: UserModel | null;
}

export function Avatar({ user }: AvatarProps) {
    return (
        <Link to={`/${user?.userName}`}>
            <AvatarContainer>
                <AvatarRoot>
                    <AvatarImage src={profile} alt='Profile Picture' />
                    <AvatarFallback delayMs={600}>{user?.name[0].toUpperCase()}</AvatarFallback>
                </AvatarRoot>
            </AvatarContainer>
        </Link>
    );
}

