import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderComponent = styled.header`
    display: flex;
    align-items: center;
    max-height: 53px;
    min-height: 53px;
    background-color: #15202bbf;
    backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    left: 0;

    h2 {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        margin: 0;
    }
`;

export const BackRoute = styled(Link)`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 0;

    svg {
        width: 20px;
        height: 20px;
        fill: #eff3f4;
    }
`;