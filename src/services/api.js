const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {
  getCharacters() {
    return fetch(`${URL}`)
      .then(res => res.json());
  }
};

export default api;