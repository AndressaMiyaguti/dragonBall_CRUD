export const Api = {
  baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

  authorization: 'karinemiyaguti@gmail.com',

  // GET para pegar dados
  // DELETE para deletar dados
  // POST para criar dados
  // PUT para alterar dados existente

  readAllUrl: () => Api.baseUrl + '/',
  readOneUrl: id => Api.baseUrl + '/' + id,

  createUrl: () => Api.baseUrl + '/',

  deleteAllUrl: () => Api.baseUrl + '/',
  deleteUrl: (id) => Api.baseUrl + '/' + id,

  updateUrl: (id) => Api.baseUrl + '/' + id,

  //https://blue-backend-modulo4front.herokuapp.com/226

  //FAZER UM GET ALL, PARA PEGAR TUDO
  buildApiGetRequest: (url) => {
    return fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },

  //FAZER UM POST PARA CADASTRAR DADOS
  buildApiPostRequest: (url, body) => {
    return fetch(url, {
      method: 'POST',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },

  //FAZER UM PUT PARA ALTERAR OS DADOS
  buildApiPutRequest: (url, body) => {
    return fetch(url, {
      method: 'PUT',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },

  //FAZER UM DELETE PARA APAGAR TODOS OS DADOS
  buildApiDeleteRequest: (url) => {
    return fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },
};
