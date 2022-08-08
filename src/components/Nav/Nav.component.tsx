/// <reference types="vite-plugin-svgr/client" />
import { useContext } from 'react';
import { UserContext } from '../../contexts/User.context';

import { NavContainer, NavItem } from "./Nav.styles";

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home/home.svg';
import { ReactComponent as ActiveHomeIcon } from '../../assets/icons/home/home.active.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications/notifications.svg';
import { ReactComponent as ActiveNotificationsIcon } from '../../assets/icons/notifications/notifications.active.svg';
import { ReactComponent as MessagesIcon } from '../../assets/icons/messages/messages.svg';
import { ReactComponent as ActiveMessagesIcon } from '../../assets/icons/messages/messages.active.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile/profile.svg';
import { ReactComponent as ActiveProfileIcon } from '../../assets/icons/profile/profile.active.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';

export function Nav() {
    const { user } = useContext(UserContext);

    return (
        <NavContainer>
            <NavItem to="/home" className="mobile-hidden">
                <LogoIcon />
            </NavItem>
            
            <NavItem to="/home">
                <ActiveHomeIcon className='active' />
                <HomeIcon />

                <span>Home</span>
            </NavItem>
            
            <NavItem to="/notifications">
                <ActiveNotificationsIcon className='active' />
                <NotificationsIcon />

                <span>Notifications</span>
            </NavItem>
            
            <NavItem to="/messages">
                <ActiveMessagesIcon className='active' />
                <MessagesIcon />

                <span>Messages</span>
            </NavItem>
            
            <NavItem to={`/${user?.userName}`} className="mobile-hidden">
                <ActiveProfileIcon className='active' />
                <ProfileIcon />

                <span>Profile</span>
            </NavItem>
            
            <NavItem to="/more" className="mobile-hidden">
                <MoreIcon />

                <span>More</span>
            </NavItem>
        </NavContainer>
    );
}

