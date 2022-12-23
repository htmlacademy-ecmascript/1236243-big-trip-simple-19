function getRandomArrayElement(items) {
    return items[Math.floor(Math.random() * items.length)]
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

export {getRandomArrayElement, getRandomNumber}