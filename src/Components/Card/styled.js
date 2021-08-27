import styled from 'styled-components';


export const CardArea = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px #8904B1 solid;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: 200ms;
  width: 17rem;
  height: 23rem;
  overflow: hidden;
  transition: all 1s;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 18rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const Name =styled.h3`

  color: #ffffff;
  text-align: center;
  padding: 0.5rem;
  background-color: #4C0B5F;
  font-size: 1.3em;
  border-radius: 0.5rem;
`;
