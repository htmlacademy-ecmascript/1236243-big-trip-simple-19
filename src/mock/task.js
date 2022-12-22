import {TYPE, CITIES, DESTINATION, TRIPS, OFFERS} from '../const.js'
import {getRandomArrayElement} from '../utils.js'

const mockTrip = [
    {
        base_price: 800,
        date_from: "2019-07-10T22:55:56.845Z",
        date_to: "2019-07-11T11:22:13.375Z",
        destination: getRandomArrayElement(CITIES),
        id: Math.floor(Math.random() * TRIPS),
        offers: getRandomArrayElement(OFFERS).offer,
        type: getRandomArrayElement(TYPE)
        },
    {
        base_price: 1100,
        date_from: "2019-07-11T22:55:56.845Z",
        date_to: "2019-07-12T11:22:13.375Z",
        destination: getRandomArrayElement(CITIES),
        id: Math.floor(Math.random() * TRIPS),
        offers: getRandomArrayElement(OFFERS).offer,
        type: getRandomArrayElement(TYPE)
        },
    {
        base_price: 650,
        date_from: "2019-07-12T22:55:56.845Z",
        date_to: "2019-07-13T11:22:13.375Z",
        destination: getRandomArrayElement(CITIES),
        id: Math.floor(Math.random() * TRIPS),
        offers: getRandomArrayElement(OFFERS).offer,
        type: getRandomArrayElement(TYPE)
        }
]

export {mockTrip}
