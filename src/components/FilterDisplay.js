import Component from './Component.js';

class FilterDisplay extends Component {
  render() {
    const dom = this.renderDOM();

    const display = dom.querySelector('.search-display');

    const type = this.props.type;
    const character = this.props.character;
    const nation = this.props.nation;

    if(!type) {
      display.textContent = 'All Characters';
    } else if(type === 'enemies') {
      display.textContent = `Enemies of ${character}`;
    } else if(type === 'allies') {
      display.textContent = `Allies of ${character}`;
    } else if(type === 'nation') {
      display.textContent = nation;
    }

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <section>
        <span class="search-display"></span>
      </section>
    `;
  }
}

export default FilterDisplay;