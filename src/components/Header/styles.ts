import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue-light);
    height: 100px;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;

  title {
    display: block;
    font-size: 25px;
    font-weight: 700;
    color: var(--white);
  }

  button {
    font-size: 1rem;
    color: #FFFF;
    background: var(--blue);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

