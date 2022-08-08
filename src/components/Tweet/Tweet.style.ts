import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TweetContainer = styled.article`
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #38444d;
`;

export const StyledLink = styled(Link)`
    display: flex;
`;

export const TweetContent = styled.div``;

export const TweetHeader = styled.div`
    font-size: 15px;
    line-height: 20px;
    
    a {
        font-weight: 700;
        line-height: 20px;
    }

    .heading-info {
        color: #8b98a5;
        font-weight: 400;
        margin-left: 4px;
    }

`;

export const TweetText = styled.p`
    margin: 0;
    font-size: 15px;
    line-height: 20px;
    margin-top: 4px;
`;

export const TweetFooter = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    width: 60%;
`;

export const TweetAction = styled.button`
    border-width: 0;
    outline-style: none;
    background: transparent;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    min-width: 52px;

    svg {
        width: 18px;
        height: 18px;
        fill: #8b98a5;
    }

    .count {
        font-size: 13px;
        line-height: 16px;
        padding-left: 12px;
        padding-right: 12px;
        color: #8b98a5;;
    }
`;