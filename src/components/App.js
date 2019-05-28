import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';

class App extends Component {
  render() {
    const dom = this.renderDOM();

    const header = new Header();

    const characterList = new CharacterList();

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