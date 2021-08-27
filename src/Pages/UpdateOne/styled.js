import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.3em;
`;

export const Input = styled.input`
  padding: 0.2rem;
  font-size: 1.2em;
  margin-bottom: 1rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Select = styled.select`
  padding: 0.2rem;
  font-size: 1.2em;
  margin-bottom: 0.8rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  background-color: #e76a24;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #b15019;
  }
`;
