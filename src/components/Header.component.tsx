import styled from 'styled-components';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                Header
            </HeaderContent>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const HeaderContent = styled.div`
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