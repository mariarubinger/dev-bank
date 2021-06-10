import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 10px auto;
    padding: 0 50px 0 50px;
    display: flex;
    justify-content: space-between;

    h2 {
        color: var(--gray-500);
        font-size: 30px;
        align-self: center;

        span{
            color: var(--violet);
        }
    }

    p {
        color: var(--gray-500);
        font-size: 14px;
        align-self: center;
    }

`;

export const CardBalance = styled.div`
    height: 120px;
    width: 220px;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #CCCCCC;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-items: center;

    h2 {
        color: var(--violet);
        font-size: 20px;
        align-items: center;

        span{
            color: var(--violet);
        }
    }

    h3 {
        color: var(--gray-500);
        font-size: 16px;
        text-align: left;
    }
`;

export const Sidebar = styled.div`
    height: 100px;
    width: 200px;
    padding: 15px;
    margin-right: 15px;
    margin-top: 20px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #CCCCCC;
    
    h3 {
        color: var(--gray-500);
        font-size: 16px;
        text-align: left;
        padding-bottom: 15px;
    }

    button {
        color: var(--gray-500);
        font-size: 16px;
        padding: 10px;
        height: 35px;
        cursor: pointer;
        border: none;
        background-color: #FFFFFF;

        &:hover{
            background-color: rgb(240, 240, 240, 0.8);
        }
    }
`;

export const CardTransactions = styled.div`
    height: 300px;
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #CCCCCC;
    display: flex;
    flex-direction: column;

    h3 {
        color: var(--gray-500);
        font-size: 16px;
        text-align: left;
        padding-bottom: 20px;
    }

    table tr th {
        color: var(--violet);
        font-size: 16px;
        align-items: center;
        background-color: rgb(240, 240, 240, 0.8);
        padding: 10px;
    }

    td {
        color: var(--gray-700);
        font-size: 16px;
        padding: 6px;
    }

`;
