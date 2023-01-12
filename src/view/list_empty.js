import {createElement} from '../render.js';

function createListEmpty () {
  return (`<div class="page-body__container">
    <section class="trip-events">
      <h2 class="visually-hidden">Trip events</h2>

      <p class="trip-events__msg">Click New Event to create your first point</p>

    </section>
  </div>`);
}

export default class ListEmpty {
  #element = null;

  get template () {
    return createListEmpty();
  }

  get element () {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement () {
    this.#element = null;
  }
}
