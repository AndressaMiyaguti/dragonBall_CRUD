import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10rem;

  @media(max-width :730px ){
  padding: 0;}
`;

export const Label = styled.label`
  font-size: 1.3em;
  color: #93360d;
`;

export const Input = styled.input`
height: 2rem;
border-radius: 8px;
outline: 0;
border:1.5px solid #9e3203;
color:#000000;
box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;

`;

export const Select = styled.select`
height: 2rem;
border-radius: 8px;
outline: 0;
border:1.5px solid #9e3203;
color:#000000;
box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;

`;

export const Button = styled.button`
  background-color: #e76a24;
  height: 2rem;
  color: #ffffff;
  font-size: 1.2em;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;
  margin-top: 2rem;

  &:hover {
    background-color: #b15019;
  }
`;
