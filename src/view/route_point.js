import {createElement} from '../render.js';

const createOffers = (offer, type) => {
  const newOfferArray = Array.from(offer)
  const findOffer = newOfferArray.map(el => el.newOfferArray)
  const offerByType = findOffer.find(el => el.type === type).offers // массив офферов по типу
  for (let i = 0; i < offerByType.length; i++) {
    return `<li class="event__offer">
              <span class="event__offer-title">${offerByType[i].title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${offerByType[i].price}</span>
            </li>`
  }

}

function createRoutePoint (point) {
// Извлекаем из объекта c описанием точки данные тех ключей, которыми мы можем воспользоваться
  const {type, destination, basePrice, offer} = point
  console.log(offer)
  return (`<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffers(offer, type)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`);
}

export default class RoutePoint {
  constructor({point}) {
    this.point = point // получаем данные точки и сохраняем во внутрь вьюхи
  }

  getTemplate () {
    return createRoutePoint(this.point);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
