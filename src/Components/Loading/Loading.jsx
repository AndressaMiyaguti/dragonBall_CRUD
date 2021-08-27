import animation from './animation.svg';
import * as S from './styled';

export default function Loading() {
  return (
    <S.Spinner>
      <S.Img src={animation}></S.Img>
    </S.Spinner>
  );
}
