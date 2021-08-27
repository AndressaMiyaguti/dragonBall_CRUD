import styled from 'styled-components';
import { Link } from 'react-router-dom';




export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: #e76a24;
  box-shadow:rgb(255,195,77) 0px 0px 15px -8px,
  rgb(0.75,0.00,0.90) 0px 8px 16px -8px;
  padding: 0 2rem;

  @media (max-width: 560px){   
    flex-direction: column;
    align-items: center;}
  
`;

export const Img = styled.img`
  width: 8rem;
  height: 3rem;
  padding: 0.2rem 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

/*   @media (max-width: 560px) {
    flex-flow: wrap;
    background-color: #e76a24;
    opacity:0;
    position: fixed;    
    top: 0;
    right: 0;
    width: 280px; 
    font-size: 1em;
    font-weight: 700; 
    border-radius:3rem ;

    &:hover {
      opacity:1;
    }} */
    @media (max-width: 560px){
      flex-direction: column;
    }
  
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem 1rem;
  transition: 200ms;


  &:hover {
    background-color: #b15019;
  }
`;

export const LinkedPage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
/* 
  @media (max-width :560px){
    color: #0D2538;
    margin-bottom:-2rem;
  
  }
    */
`;
