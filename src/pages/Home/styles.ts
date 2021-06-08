import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 50px;
    display: flex;
    align-items: center;

    h1 {
        color: var(--gray-700);
        font-size: 40px;
        align-self: center;
        padding-right: 20px;

        span{
        color: var(--violet);
        }
    }
   
    h2 {
        color: var(--gray-500);
        font-size: 20px;
        padding-top: 25px;
    }
`;

