import Component from './Component.js';

class NationPicker extends Component {
  render() {
    const dom = this.renderDOM();

    const nations = dom.querySelectorAll('button');
    nations.forEach(nation => {
      nation.addEventListener('click', () => {
        const searchParams = new URLSearchParams();
        searchParams.set('type', 'nation');
        searchParams.set('nation', nation.value);
        window.location.hash = searchParams.toString();
      });
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/ `
    <section class="nation-picker">
      <button value="Air Nomads"><img src="../../assets/air-nomads-emblem.png"></button>
      <button value="Water Tribe"><img src="../../assets/water-tribe-emblem.png"></button>
      <button value="Earth Kingdom"><img src="../../assets/earth-kingdom-emblem.png"></button>
      <button value="Fire Nation"><img src="../../assets/fire-nation-emblem.png"></button>
    </section>
    `;
  }
}

export default NationPicker;