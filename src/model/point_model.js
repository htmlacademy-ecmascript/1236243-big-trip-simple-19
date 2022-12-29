import {getMockPoints} from '../mock/point.js'

export default class PointsModel {
    #points = getMockPoints()

    #offers = this.#points.map(el => el.offer.offers)

    getPoints() {
        return this.#points
    }

    getOffers() {
        return this.#offers
    }
}
