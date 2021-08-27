import styled from 'styled-components';
import { Paragraph } from '../../Components/Paragraph/styled';

export const Text = styled(Paragraph)`
  text-align: center;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
`;

export const ButtonDelete = styled.button`
  background-color: #e76a24;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #b15019;
  }
`;

export const ButtonCancel = styled.button`
  background-color: #1c4595;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #2860cd;
  }
`;
