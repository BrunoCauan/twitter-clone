import { NavContainer, NavItem } from "./Nav.styles";

export function Nav() {
    return (
        <NavContainer>
            <NavItem>X <span>Home</span></NavItem>
            <NavItem>Y <span>Profile</span></NavItem>
            <NavItem>Z <span>Logout</span></NavItem>
        </NavContainer>
    );
}

