import Component from './Component.js';

class NationPicker extends Component {
  renderTemplate() {
    return /*html*/ `
    <section class="nation-picker">
      <button><img src="../../assets/air-nomads-emblem.png"></button>
    </section>
    `;
  }
}

export default NationPicker;