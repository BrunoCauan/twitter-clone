import styled from 'styled-components';

export const LoadingComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-top: 24px;
    padding-bottom: 24px;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 0.75s;
    animation-name: spin;

    svg {
        height: 26px;
        width: 26px;
    }
`;