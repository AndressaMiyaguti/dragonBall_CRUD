import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import De from './FotoD.jpg'
import Mar from './Mar.jpg'

export default function About() {
  return (
    <>
      <Title>Sobre</Title>
      <S.ImgCard>
        <S.Img src={De}></S.Img>
      
      <Paragraph>
        Para quem está chegando agora, muito obrigada por estar aqui.
        Permita me  apresentar... 
        Meu nome é Andressa, sou aluna no quarto módulo de Front-end na BlueEdtech. Esse projeto foi 
        desenvolvido em aula com React.js,  afim de adquirir habilidade prática em 
        operações de CRUD, tendo como base os conhecimentos transmitidos pela professora (prof Top)
        Isabella Nunes.
      </Paragraph>

      <S.Img src={Mar}></S.Img>
      </S.ImgCard>


      <S.SocialBlock>
        <a
          href="https://github.com/AndressaMiyaguti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-github"></i>
        </a>
  
        <a
          href="https://www.linkedin.com/in/karine-miyaguti-042a07212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-linkedin"></i>
        </a>
       
        <a
          href="https://www.instagram.com/andressamiya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-instagram"></i>
        </a>
   
      </S.SocialBlock>
    </>
  );
}
