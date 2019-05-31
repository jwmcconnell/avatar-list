import CharacterItem from '../src/components/CharacterItem.js';

const test = QUnit.test;

QUnit.module('CharacterItem');

test('Makes character item from template', assert => {
  const character = {
    '_id': '5cdf0769b6e02a467e3e766b',
    'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
    'name': '46th Earth King'
  };

  const characterItem = new CharacterItem({ character });
  const rendered = characterItem.renderTemplate();

  assert.htmlEqual(rendered, /*html*/`
  <li>
    <h2>46th Earth King</h2>
    <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
    <section>
          <button class="allies">Allies</button>
          <button class="enemies">Enemies</button>
        </section>
  </li>
  `);
}); 