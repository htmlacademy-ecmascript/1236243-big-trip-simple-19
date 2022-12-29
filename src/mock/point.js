import {TYPES, CITIES, TRIPS} from '../const.js';
import {getRandomArrayElement, getRandomNumber} from '../utils.js';
import {findOfferByType} from './offer.js';


const getMockPoints = () => {
  const points = [];
  TRIPS.forEach((trip) => {
    const randomType = getRandomArrayElement(TYPES);
    const point = {
      basePrice: getRandomNumber(500, 1500),
      dateFrom: '2019-07-10T22:55:56.845Z',
      dateTo: '2019-07-11T11:22:13.375Z',
      destination: getRandomArrayElement(CITIES),
      id: trip,
      type: randomType,
      offer: findOfferByType(randomType)
    };
    points.push(point);
  }
  );
  console.log(points)
  return points;
};


export {getMockPoints};
