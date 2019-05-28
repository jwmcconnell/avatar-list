import Component from './Component.js';
import CharacterItem from './CharacterItem.js';

class CharacterList extends Component {
  render() {
    const dom = this.renderDOM();

    const characters = this.props.characters;

    characters.forEach(character => {
      if(character.photoUrl) {
        const characterItem = new CharacterItem({ character });
        dom.appendChild(characterItem.render());
      }
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <ul></ul>
    `;
  }
}

export default CharacterList;