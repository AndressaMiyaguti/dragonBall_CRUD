import styled from 'styled-components';

export const ThemeButton = styled.i`
  padding: 0.6rem;
  border-radius: 50%;
  background-color: #01080a;
  color: #ffffff;
  cursor: pointer;
  position: fixed;
  bottom: calc(100vh - 98vh);
  right: 2vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 200ms;

  &:hover {
    background-color: #041f26;
  }
`;
