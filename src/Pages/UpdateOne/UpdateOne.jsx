import * as S from '../Create/styled';
import Loading from '../../Components/Loading/Loading';
import { Title } from '../../Components/Title/styled';
import { useState } from 'react';
import { Api } from '../../Api/Api';
import { useHistory } from 'react-router-dom';

export default function UpdateOne(props) {

  
  const state = props.location.state;

  const [name, setName] = useState(state.name);
  const [url, setUrl] = useState(state.url);
  const [raca, setRaca] = useState(state.raca);
  const [saga, setSaga] = useState(state.saga);
  const [poder, setPoder] = useState(state.poder);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const item = {
    name: name,
    url: url,
    raca: raca,
    saga: saga,
    poder: poder,
  };

  const submitHandler = async event => {

    setLoading(true);
    event.preventDefault();

    const request = await Api.buildApiPutRequest(
      Api.updateUrl(state._id),
      item
    ).catch(e => {
      console.error('Erro ao tentar modificar o item no banco: ', e);
    })

    const result = await request.json();
    const id = result._id;
    history.push(`/view/${id}`, item);
  }

  return (
    <>
      {loading === true ? <Loading /> :
        <>
          <Title>Atualizar</Title>

          <S.Form onSubmit={submitHandler}>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              value={name}
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            ></S.Input>

            <S.Label htmlFor="url">URL da Imagem</S.Label>
            <S.Input
              value={url}
              id="url"
              type="text"
              onChange={e => setUrl(e.target.value)}
              required
            ></S.Input>

            <S.Label htmlFor="raca">Raça</S.Label>
            <S.Select value={raca} id="raca" onChange={(e) => setRaca(e.target.value)} required>
              <option value="" hidden>
                -
              </option>
              <option value="Androide">Androide</option>
              <option value="Animal">Animal</option>
              <option value="Dragão">Dragão</option>
              <option value="Humano">Humano</option>
              <option value="Shin-Jin">Shin-Jin</option>
              <option value="Majin">Majin</option>
              <option value="Namekuseijin">Namekuseijin</option>
              <option value="Ogro">Ogro</option>
              <option value="Changeller">Changeller</option>
              <option value="Namekuseijin">Namekuseijin</option>
              <option value="Saiyajin">Saiyajin</option>
              <option value="Tsufurujin">Tsufurujin</option>
            </S.Select>

            <S.Label htmlFor="saga">Saga</S.Label>
            <S.Select value={saga} id="saga" onChange={(e) => setSaga(e.target.value)} required>
              <option value="" hidden>
                -
              </option>
              <option value="Pilaf">Pilaf</option>
              <option value="21º Torneio">21º Torneio</option>
              <option value="Red Ribbon">Red Ribbon</option>
              <option value="General Blue">General Blue</option>
              <option value="Comandante Red">Comandante Red</option>
              <option value="Vovó Uranai">Vovó Uranai</option>
              <option value="Tenshinhan">Tenshinhan</option>
              <option value="Piccolo Daimaoh">Piccolo Daimaoh</option>
              <option value="Piccolo Jr.">Piccolo Jr.</option>
              <option value="Saiyajins">Saiyajins</option>
              <option value="Freeza">Freeza</option>
              <option value="Garlic Jr">Garlic Jr</option>
              <option value="Cell">Cell</option>
              <option value="Torneio do Outro Mundo">Torneio do Outro Mundo</option>
              <option value="Majin Boo">Majin Boo</option>
            </S.Select>

            <S.Label htmlFor="poder">Poder de Luta</S.Label>
            <S.Input
              value={poder}
              id="poder"
              type="number"
              min="0"
              max="100"
              onChange={(e) => setPoder(e.target.value)}
              required
            ></S.Input>

            <S.Button>Alterar</S.Button>
          </S.Form>
        </>
      }
    </>
  );
}
