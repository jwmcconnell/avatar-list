import Component from './Component.js';

class Header extends Component {
  render() {
    const dom = this.renderDOM();

    const button = dom.querySelector('button');

    button.addEventListener('click', () => {
      window.location.hash = '';
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
      <section>
        <button>Show All</button>
      </section>
    `;
  }
}

export default Header;