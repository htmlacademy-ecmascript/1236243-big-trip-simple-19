import {getRandomArrayElement, getRandomNumber} from '../utils.js';
import {TYPES, TITLE_OFFERS} from '../const.js';


const getRandomOffers = (randomNumber) => {
  const randomOffers = [];
  for (let i = 0; i < randomNumber; i++) {
    const offerTemplate = {
      id: i + 1,
      title: getRandomArrayElement(TITLE_OFFERS),
      price: getRandomNumber(10, 200)
    };
    randomOffers.push(offerTemplate);
  }
  return randomOffers;
};

const getMockOffers = function () {
  const offers = [];

  TYPES.forEach((type) =>
    offers.push({
      type: type,
      offers: getRandomOffers(getRandomNumber(2,5)),
    })
  );
  return offers;
};
const mockOffers = getMockOffers();

const findOfferByType = function (type) {
  return mockOffers.find((el) => el.type === type);
};

export { mockOffers, findOfferByType };
