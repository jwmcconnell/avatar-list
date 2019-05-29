import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import Loading from './Loading.js';
import ResetFilter from './ResetFilter.js';

import api from '../services/api.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    const header = new Header();

    const characterList = new CharacterList({ characters: [] });

    const loading = new Loading({ loading: false });

    const resetFilter = new ResetFilter();

    const main = dom.querySelector('main');

    dom.prepend(header.render());
    main.appendChild(loading.render());
    main.appendChild(resetFilter.render());
    main.appendChild(characterList.render());

    function loadCharacters() {
      loading.update({ loading: true });

      const params = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(params);
      const character = searchParams.get('character');
      const type = searchParams.get('type');

      api.getCharacters(type, character)
        .then(characters => {
          characterList.update({ characters });
        })
        .finally(() => {
          loading.update({ loading: false });
        });
    }

    loadCharacters();

    window.addEventListener('hashchange', () => {
      loadCharacters();
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <div>
        <main></main>
      </div>
    `;
  }
}

export default App;