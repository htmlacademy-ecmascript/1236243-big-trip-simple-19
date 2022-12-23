import {TYPE, CITIES, DESTINATION, TRIPS, OFFERS} from '../const.js'
import {getRandomArrayElement, getRandomNumber} from '../utils.js'

const mockPoint = [
    {
        base_price: getRandomNumber(500, 1500),
        date_from: "2019-07-10T22:55:56.845Z",
        date_to: "2019-07-11T11:22:13.375Z",
        destination: getRandomArrayElement(CITIES),
        id: Math.floor(Math.random() * TRIPS),
        offers: getRandomArrayElement(OFFERS).offer,
        type: getRandomArrayElement(TYPE)
        }
    ]

export {mockPoint}
