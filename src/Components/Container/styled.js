import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 1rem;

  @media (max-width: 580px) {
    max-width: 80%;
  }

  @media (max-width: 430px) {
    max-width: 90%;
  }
`;
