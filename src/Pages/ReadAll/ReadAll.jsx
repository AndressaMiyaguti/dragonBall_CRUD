import * as S from './styled';
import { useState, useEffect } from 'react';
import { Api } from '../../Api/Api';
import Card from '../../Components/Card/Card';

export default function ReadAll() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      let response = await Api.buildApiGetRequest(Api.readAllUrl()).catch(
        (e) => {
          console.error(
            'Erro ao tentar recuperar o item do banco de dados: ',
            e
          );
        }
      );
      response = await response.json();
      setData(response);
    }
    fetchApi();
  }, []);

  return (
    <>

      {data.length > 0 ? (
        <S.CardArea>
          {data.map((item) => (
            <S.Linked
              to={{ pathname: `view/${item._id}`, state: item }}
              key={item._id}
            >
              <Card url={item.url} name={item.name} />
            </S.Linked>
          ))}
        </S.CardArea>
      ) : (
        <S.CardArea>
          <S.Empty>Não há personagens cadastrados...</S.Empty>
        </S.CardArea>
      )}
     
    </>
  );
}
