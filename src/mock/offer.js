import {getRandomArrayElement, getRandomNumber} from '../utils.js'
import {TYPES, TITLE_OFFERS} from '../const.js'


const getMockOffers = function () {
    const offers = [] 
    TYPES.forEach((type) => 
        offers.push({
            type: type,
            offers: [
                {
                    id: 1,
                    title: getRandomArrayElement(TITLE_OFFERS),
                    price: getRandomNumber(10, 200)
                    }
            ]      
        })
    )
    return offers
}

const mockOffers = getMockOffers()

export { mockOffers }