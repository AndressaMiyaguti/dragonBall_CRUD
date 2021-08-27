import * as S from './styled';
import { Title } from '../../Components/Title/styled';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import { useState } from 'react';

export default function DeleteAll() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const goToHome = () => {
    history.push('/');
  };

  const clickHandler = async (event) => {
    setLoading(true);
    event.preventDefault();

    await Api.buildApiDeleteRequest(Api.deleteAllUrl()).catch((e) => {
      console.error('Erro ao tentar deletar todo os dados: ', e);
    });

    goToHome();
  };

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Title>Deletar tudo</Title>

          <S.Text>
            Você tem certeza que quer deletar os dados? Eles não poderão ser
            recuperados!
          </S.Text>

          <S.ButtonArea>
            <S.ButtonCancel onClick={goToHome}>Cancelar</S.ButtonCancel>
            <S.ButtonDelete onClick={clickHandler}>Deletar</S.ButtonDelete>
          </S.ButtonArea>
        </>
      )}
    </>
  );
}
