import {TYPES, CITIES, TRIPS} from '../const.js';
import {getRandomArrayElement, getRandomNumber} from '../util/utils.js';
import {findOfferByType} from './offer.js';


function getRandomDate () {
  const year = getRandomNumber(2021, 2023);
  const month = getRandomNumber(10, 12);
  const day = getRandomNumber(10, 31);
  const hour = getRandomNumber(10, 23);
  const minute = getRandomNumber(10, 60);
  const second = getRandomNumber(10, 60);
  const milisec = getRandomNumber(100, 999);
  return `${year}-${month}-${day}T${hour}:${minute}:${second}.${milisec}Z`;
}

const getMockPoints = () => {
  const points = [];
  TRIPS.forEach((trip) => {
    const randomType = getRandomArrayElement(TYPES);
    const point = {
      basePrice: getRandomNumber(500, 1500),
      dateFrom: getRandomDate(),
      dateTo: getRandomDate(),
      destination: getRandomArrayElement(CITIES),
      id: trip,
      type: randomType,
      offer: findOfferByType(randomType)
    };
    points.push(point);
  }
  );

  return points;
};


export {getMockPoints};
