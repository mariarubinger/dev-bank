import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--gray-700);
        font-size: 40px;
        align-self: center;

        span{
            color: var(--violet);
        }
    }
`;

export const Card = styled.div`
    height: 350px;
    width: 500px;
    padding: 16px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #CCCCCC;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-items: center;

    h3 {
        color: var(--gray-500);
        font-size: 16px;
    }

    input {
        margin-top: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 14px;
        font-size: 16px;
    }

    button {
        font-size: 16px;
        color: #FFFF;
        background: var(--violet);
        border: 0;
        padding: 0 20px;
        border-radius: 6px;
        height: 40px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
