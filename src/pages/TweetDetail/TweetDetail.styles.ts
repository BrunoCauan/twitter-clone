import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackRoute = styled(Link)`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;

    svg {
        width: 20px;
        height: 20px;
        fill: #eff3f4;
    }
`;