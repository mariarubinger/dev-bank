import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 50px 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Card = styled.div`
    height: 300px;
    width: 350px;
    padding: 15px;
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
        font-size: 1rem;
        color: #FFFF;
        background: var(--violet);
        border: 0;
        padding: 0 30px;
        border-radius: 6px;
        height: 40px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
