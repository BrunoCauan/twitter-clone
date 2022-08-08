import styled from 'styled-components';

export function Nav() {
    return (
        <NavContainer>
            <NavContent>
                Nav
            </NavContent>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 1;
`;

const NavContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 12px;
    height: 100%;
    width: 88px;

    @media only screen and (min-width: 1025px) {
        width: 275px;
    }
`;