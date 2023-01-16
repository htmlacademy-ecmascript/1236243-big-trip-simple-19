import AbstractView from '../framework/view/abstract-view.js';
import {humanizeTripDay, humanizeTripTime} from '../utils.js';

const createOffers = (offer) => {

  const offerByType = offer.offers; // массив офферов по типу

  const offersArray = [];
  for (let i = 0; i < offerByType.length; i++) {
    offersArray.push (`<li class="event__offer">
              <span class="event__offer-title">${offerByType[i].title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${offerByType[i].price}</span>
            </li>`);
  }

  return offersArray.join('');

};

function createRoutePoint (point) {
// Извлекаем из объекта c описанием точки данные тех ключей, которыми мы можем воспользоваться
  const {type, destination, basePrice, offer, dateFrom, dateTo} = point;

  return (`<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${dateFrom}>${humanizeTripDay(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime=${dateFrom}>${humanizeTripTime(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime=${dateTo}>${humanizeTripTime(dateTo)}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffers(offer)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`);
}

export default class RoutePoint extends AbstractView{
  #point = null;
  #handleEditClick = null;

  constructor({point, onEditClick}) {
    super();
    this.#point = point; // получаем данные точки и сохраняем во внутрь вьюхи
    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template () {
    return createRoutePoint(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
