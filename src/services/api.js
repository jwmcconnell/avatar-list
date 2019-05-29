const URL = 'https://last-airbender-api.herokuapp.com/api/v1/characters';

const api = {
  getCharacters(type, character, nation) {
    let url = URL;

    if(type && character) {
      const searchParams = new URLSearchParams();
      searchParams.set(type, character);
      const query = searchParams.toString();
      url += `?${query}`;
    } else if(type === 'nation' && nation) {
      const searchParams = new URLSearchParams();
      searchParams.set('nation', nation);
      const query = searchParams.toString();
      url += `?${query}`;
    }

    return fetch(`${url}`)
      .then(res => res.json());
  }
};

export default api;