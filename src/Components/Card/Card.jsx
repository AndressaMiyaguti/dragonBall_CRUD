import * as S from './styled';

export default function Card(props) {
  return (
    <S.CardArea>
      <S.CardImg src={props.url}></S.CardImg>
      <S.Name>{props.name}</S.Name>
    </S.CardArea>
  );
}
