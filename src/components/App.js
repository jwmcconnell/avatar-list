import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';

import api from '../services/api.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    const header = new Header();

    const characterList = new CharacterList({ characters: [] });

    api.getCharacters()
      .then(characters => {
        characterList.update({ characters });
      });

    const main = dom.querySelector('main');

    dom.prepend(header.render());
    main.appendChild(characterList.render());

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