import Component from './Component.js';

class NationPicker extends Component {
  renderTemplate() {
    return /*html*/ `
    <section class="nation-picker">
      <button class="air"><img src="../../assets/air-nomads-emblem.png"></button>
      <button calss="water"><img src="../../assets/water-tribe-emblem.png"></button>
      <button class="earth"><img src="../../assets/earth-kingdom-emblem.png"></button>
      <button class="fire"><img src="../../assets/fire-nation-emblem.png"></button>
    </section>
    `;
  }
}

export default NationPicker;