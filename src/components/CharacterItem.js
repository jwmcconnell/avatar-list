import Component from './Component.js';

class CharacterItem extends Component {
  renderTemplate() {
    const character = this.props.character;
    return /*html*/ `
      <li>
        <h2>${character.name}</h2>
        <img src="${character.photoUrl ? character.photoUrl : '../../assets/placeholder.gif'}" alt="${character.name}">
      </li>
    `;
  }
}

export default CharacterItem;