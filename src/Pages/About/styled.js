import styled from 'styled-components';

export const ImgCard = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
 /*  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    
    @media(max-width :1050px ){
  padding: 0;
  display:flex;
  flex-direction:column;
  align-items: center;
  }
`;

export const Img = styled.img`
  width: 21rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 2rem;
/*   filter: brightness(1.1) contrast(1.2) saturate(1);
  border-radius: 50%; */
`;

export const SocialBlock = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  & a {
    color: #e76a24;

    & i {
      padding: 0 0.5rem;
      font-size: 2.5em;
      transition: 200ms;

      &:hover {
        color: #b15019;
      }
    }
  }
`;
