import * as RadixAvatar from '@radix-ui/react-avatar';
import styled from 'styled-components';

export const AvatarContainer = styled.div`
    margin-right: 12px;
`;

export const AvatarRoot = styled(RadixAvatar.Root)`
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

export const AvatarImage = styled(RadixAvatar.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

export const AvatarFallback = styled(RadixAvatar.Fallback)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 15;
    line-height: 1;
    font-weight: 500;
    background-color: #38444d;
`;
