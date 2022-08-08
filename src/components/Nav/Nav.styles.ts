import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const NavContainer = styled.nav`
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
        top: 0;
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

export const NavItem = styled(Link)`
    display: flex;
    color: #f7f9f9;
    padding: 12px;
    width: 100%;
    border-radius: 9999px;
    margin-bottom: 8px;
    align-items: center;
    justify-content: center;

    &.mobile-hidden {
        display: none;
    }

    svg {
        width: 26.5px;
        height: 26.5px;
        fill: #f7f9f9;
    }
    
    span {
        display: none;
        font-size: 20px;
        line-height: 24px;
        margin-left: 20px;
        margin-right: 16px;
    }

    @media (min-width: 600px) {
        &.mobile-hidden {
            display: flex;
        }
    }

    @media (min-width: 1200px) {
        justify-content: flex-start;

        span {
            display: inline;
        }
    }
`;