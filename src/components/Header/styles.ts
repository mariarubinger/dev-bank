import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue-light);
    height: 100px;
    width: 100%;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 50px; 
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    title {
        display: flex;
        font-size: 25px;
        font-weight: 700;
        color: var(--white);
    }
`;
