import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import Loading from './Loading.js';

import api from '../services/api.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    const header = new Header();

    const characterList = new CharacterList({ characters: [] });

    const loading = new Loading({ loading: false });

    const main = dom.querySelector('main');

    dom.prepend(header.render());
    main.appendChild(loading.render());
    main.appendChild(characterList.render());

    function loadCharacters() {
      loading.update({ loading: true });
      api.getCharacters()
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