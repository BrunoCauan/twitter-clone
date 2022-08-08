import styled from 'styled-components';

export const AppComponent = styled.div`
    min-height: 100vh;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: min(600px, 100%);

    & > * {
        border-left: 1px solid #38444d;
        border-right: 1px solid #38444d;
        width: 100%;
        height: 100%;

        & > * {
            padding-left: 16px;
            padding-right: 16px;
        }
    }
`;