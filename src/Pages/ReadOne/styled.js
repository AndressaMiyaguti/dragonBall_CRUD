import styled from 'styled-components';

export const Card = styled.div`
   width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ImgBlock = styled.div`
  width: 22rem;
  height: 21rem;
  margin: 0  auto;
  margin-bottom: 2.5rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 21rem;
  object-fit: cover;
  border-radius: 0.5rem;
  border: solid 3px wheat ;
  box-shadow:#A901DB -1px 1px 3px,#A901DB 1.5px 1px 2px 1px;
`;

export const Text = styled.p`
  font-size: 1.2em;
  padding: 0.5rem 0;
  
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
  margin: 0 0.4rem 0 0.4rem;

  &:hover {
    background-color: #b15019;
  }
`;

export const ButtonEdit = styled.button`
  background-color: #1c4595;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;
  margin: 0 0.4rem 0 0.4rem;

  &:hover {
    background-color: #183c80;
  }
`;

export const PowerArea = styled.div`
  display: flex;
  align-items: center;
`;
