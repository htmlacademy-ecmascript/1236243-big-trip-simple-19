import {TYPES, CITIES, TRIPS, TITLE_OFFERS} from '../const.js'
import {getRandomArrayElement, getRandomNumber} from '../utils.js'
import {mockOffers} from '../mock/offer.js'

const mockPoint = [
    {
        base_price: getRandomNumber(500, 1500),
        date_from: "2019-07-10T22:55:56.845Z",
        date_to: "2019-07-11T11:22:13.375Z",
        destination: getRandomArrayElement(CITIES),
        id: 1,
        type: getRandomArrayElement(TYPES),
        offers: getRandomArrayElement(TITLE_OFFERS).offer
        }
    ]


const getMockPoints = () => {
    const  points= []
    TRIPS.forEach((trip) => 
        points.push({
            base_price: getRandomNumber(500, 1500),
            date_from: "2019-07-10T22:55:56.845Z",
            date_to: "2019-07-11T11:22:13.375Z",
            destination: getRandomArrayElement(CITIES),
            id: trip,
            type: getRandomArrayElement(TYPES),
            offers: getRandomArrayElement(TITLE_OFFERS).offer
        })
    )

    return points
}

export {getMockPoints}
