import styled from "styled-components";

export const NewTweetContainer = styled.div`
    padding-top: 4px;
    padding-bottom: 12px;
    border-bottom: 1px solid #38444d;
    height: auto !important;
`;

export const NewTweetContent = styled.div`
    display: flex;
`;

export const NewTweetForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    textarea {
        border: none;
        overflow: auto;
        outline: none;
        box-shadow: none;
        resize: none;
        background: transparent;
        font-family: inherit;
        min-height: 48px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        color: #f7f9f9;
        margin-top: 12px;
        
        &::placeholder {
            color: #8b98a5;
        }
    }
`;

export const CTAContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
        margin-right: 8px;
        font-size: 14px;
        color: #8b98a5;
    }

    button {
        background-color: #1d9bf0;
        color: #f7f9f9;
        font-size: 15px;
        line-height: 20px;
        font-weight: 700;
        min-width: 36px;
        min-height: 36px;
        padding-left: 16px;
        padding-right: 16px;
        border-radius: 9999px;
        border-width: 0;
        outline-style: none;
        transition-property: background-color, box-shadow;
        transition-duration: 0.2s;
        cursor: pointer;

        &:disabled {
            opacity: 0.5;
        }
    }
`;
