/// <reference types="vite-plugin-svgr/client" />

import { NavContainer, NavItem } from "./Nav.styles";

import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import { ReactComponent as HomeIcon } from '../../assets/images/home.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/images/notifications.svg';
import { ReactComponent as MessagesIcon } from '../../assets/images/messages.svg';
import { ReactComponent as ProfileIcon } from '../../assets/images/profile.svg';
import { ReactComponent as MoreIcon } from '../../assets/images/more.svg';

export function Nav() {
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
            
            <NavItem to="/profile" className="mobile-hidden">
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

