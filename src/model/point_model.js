import {getMockPoints} from '../mock/point.js';

export default class PointsModel {
  #points = getMockPoints();

  #offers = this.#points.map((el) => el.offer.offers);

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }
}
