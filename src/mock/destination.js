import { DESCRIPTION, CITIES} from '../const.js';
import { getRandomArrayElement } from '../utils.js';


const getDestination = function () {
  const destination = [];

  CITIES.forEach((el, i) => {
    const mockDestination = {
      id: i + 1,
      description: getRandomArrayElement(DESCRIPTION),
      name: el,
      pictures:
            {
              src: 'http://picsum.photos/300/200?r=Math.random()',
              description: getRandomArrayElement(DESCRIPTION)
            }
    };
    destination.push(mockDestination);
  });
  return destination;
};

const mockDestinations = getDestination();

export {mockDestinations};
