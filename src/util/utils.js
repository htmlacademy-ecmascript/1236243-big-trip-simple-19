import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:MM';
const EDIT_FORMAT = 'D/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomNumber = function (min, max) {
  if (min === max || min > max) {
    return NaN;
  } else {
    if (typeof min === 'number' && typeof max === 'number') {
      if(min >= 0 && max > 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
      } else {
        return NaN;
      }
    } else {
      return NaN;
    }
  }
};

function humanizeTripDay (date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function humanizeTripTime (date) {
  return date ? dayjs(date).format(TIME_FORMAT) : '';
}

function humanizeTripTimeEdit (date) {
  return date ? dayjs(date).format(EDIT_FORMAT) : '';
}

function isFutureTrip (date) {
  return date && dayjs().isBefore(date);
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}


export {getRandomArrayElement, getRandomNumber, humanizeTripDay, humanizeTripTime, humanizeTripTimeEdit, isFutureTrip, updateItem};
