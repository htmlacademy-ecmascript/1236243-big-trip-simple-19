import { DESCRIPTION, CITIES, TRIPS } from '../const.js'
import { getRandomArrayElement } from '../utils.js'


const getDestination = function () {
    const destination = []
    for (let i = 0; i < TRIPS; i++) {
        const mockDestination = {
            id: [i],
            description: getRandomArrayElement(DESCRIPTION),
            name: getRandomArrayElement(CITIES),
            pictures: [
              {
                src: `http://picsum.photos/300/200?r=Math.random()`,
                description: getRandomArrayElement(DESCRIPTION)
              }
            ]
          }
        
        destination.push(mockDestination)
    }
    return destination
}

const mockDestination = getDestination()

export {mockDestination}
