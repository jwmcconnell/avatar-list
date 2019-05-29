const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {
  getCharacters(type, character) {
    let url = URL;
    if(type && character) {
      const searchParams = new URLSearchParams();
      searchParams.set(type, character);
      const query = searchParams.toString();
      url += `?${query}`;
    }
    console.log(`${url}`);
    return fetch(`${URL}?${type}=${character}`)
      .then(res => res.json());
  }
};

export default api;