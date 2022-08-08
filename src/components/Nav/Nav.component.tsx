/// <reference types="vite-plugin-svgr/client" />
import { useContext } from 'react';
import { UserContext } from '../../contexts/User.context';

import { NavContainer, NavItem } from "./Nav.styles";

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications.svg';
import { ReactComponent as MessagesIcon } from '../../assets/icons/messages.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';

export function Nav() {
    const { user } = useContext(UserContext);

    return (
        <NavContainer>
            <NavItem to="/home" className="mobile-hidden">
                <LogoIcon />
            </NavItem>
            
            <NavItem to="/home">
                <HomeIcon />

                <span>Home</span>
            </NavItem>
            
            <NavItem to="/notifications">
                <NotificationsIcon />

                <span>Notifications</span>
            </NavItem>
            
            <NavItem to="/messages">
                <MessagesIcon />

                <span>Messages</span>
            </NavItem>
            
            <NavItem to={`/${user?.userName}`} className="mobile-hidden">
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

