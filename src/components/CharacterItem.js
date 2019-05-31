import Component from './Component.js';

class CharacterItem extends Component {
  render() {
    const dom = this.renderDOM();

    const character = this.props.character;

    const enemiesButton = dom.querySelector('.enemies');
    const alliesButton = dom.querySelector('.allies');

    enemiesButton.addEventListener('click', () => {
      const searchParams = new URLSearchParams();
      searchParams.set('type', 'enemies');
      searchParams.set('character', character.name);
      window.location.hash = searchParams.toString();
    });

    alliesButton.addEventListener('click', () => {
      const searchParams = new URLSearchParams();
      searchParams.set('type', 'allies');
      searchParams.set('character', character.name);
      window.location.hash = searchParams.toString();
    });

    return dom;
  }

  renderTemplate() {
    const character = this.props.character;
    return /*html*/ `
      <li>
        <h2>${character.name}</h2>
        <img src="${character.photoUrl ? character.photoUrl : '../../assets/placeholder.gif'}" alt="${character.name}">
        <section>
          <button class="allies">Allies</button>
          <button class="enemies">Enemies</button>
        </section>
      </li>
    `;
  }
}

export default CharacterItem;