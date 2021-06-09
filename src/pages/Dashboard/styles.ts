import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 10px auto;
    padding: 0 50px 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
    color: var(--gray-500);
    font-size: 30px;
    align-self: center;

        span{
        color: var(--violet);
        }
    }

    h4 {
    color: var(--gray-500);
    font-size: 14px;
    align-self: center;

    }
`;