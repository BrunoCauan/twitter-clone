import styled from 'styled-components';

export function Nav() {
    return (
        <NavContainer>
            <NavItem>X <span>Home</span></NavItem>
            <NavItem>Y <span>Profile</span></NavItem>
            <NavItem>Z <span>Logout</span></NavItem>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    background: #15202B;
    width: 100%;
    border-top: 1px solid #38444d;
  
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-height: 16vh;
    height: 3.5rem;

    @media (min-width: 600px) {
        position: sticky;
        z-index: 0;
        
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        
        border-top: 0;
        padding-left: 12px;
        padding-right: 12px;
        width: auto;
    }
`;

const NavItem = styled.div`
    > span {
        display: none;
    }

    @media (min-width: 1200px) {
        > span {
            display: inline;
        }
    }
`;