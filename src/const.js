import {getRandomArrayElement} from '../src/utils.js'


const TRIPS = 3
const TYPE = ["taxi", "bus", "train", "ship", "drive", "flight", "check-in", "sightseeing", "restaurant"]
const DESCRIPTION = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Cras aliquet varius magna, non porta ligula feugiat eget.",
    "Fusce tristique felis at fermentum pharetra.",
    "Aliquam id orci ut lectus varius viverra.",
    "Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante."
]

const OFFERS = [
    {
        offer: "Order Uber",
        cost: 20
    },
    {
        offer: "Add luggage",
        cost: 50
    },
    {
        offer: "Switch to comfort",
        cost: 80
    },
    {
        offer: "Rent a car",
        cost: 200
    }
]

const CITIES = ["Amsterdam", "Berlin", "Prague", "London"]

const DESTINATION = [
    {
        id: Math.floor(Math.random() * TRIPS),
        description: getRandomArrayElement(DESCRIPTION),
        name: getRandomArrayElement(CITIES),
        pictures: {
            src: "https://loremflickr.com/248/152?random=Math.random()",
            description: getRandomArrayElement(DESCRIPTION)
        }
    }
]

export {TYPE, CITIES, DESTINATION, TRIPS, OFFERS}