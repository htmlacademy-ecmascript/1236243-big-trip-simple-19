import {TYPES, CITIES, TRIPS} from '../const.js'
import {getRandomArrayElement, getRandomNumber} from '../utils.js'
import {mockOffers} from '../mock/offer.js'

const mockPoint = [
    {
        base_price: getRandomNumber(500, 1500),
        date_from: "2019-07-10T22:55:56.845Z",
        date_to: "2019-07-11T11:22:13.375Z",
        destination: getRandomArrayElement(CITIES),
        id: [i],
        type: getRandomArrayElement(TYPES),
        offers: getRandomArrayElement(OFFERS).offer
        }
    ]


const getMockPoints = () => {
    const  points= []
    for (let i = 0; i < TRIPS; i++) {
        points.push()
    }

    return points
}

export {mockPoint}
