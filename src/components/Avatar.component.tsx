import * as RadixAvatar from '@radix-ui/react-avatar';
import styled from 'styled-components';

import { UserModel } from '../models/User.model';
import profile from '../assets/images/profile.png';

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

const AvatarContainer = styled.div`
    margin-right: 12px;
`;

const AvatarRoot = styled(RadixAvatar.Root)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 48px;
    height: 48px;
    border-radius: 100%;
`;

const AvatarImage = styled(RadixAvatar.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const AvatarFallback = styled(RadixAvatar.Fallback)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 15;
    line-height: 1;
    font-weight: 500;
`;