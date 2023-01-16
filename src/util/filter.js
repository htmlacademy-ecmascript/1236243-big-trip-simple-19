import { FilterType } from '../const.js';
import { isFutureTrip } from '../util/utils.js';

const filter = {
  [FilterType.ALL]: (points) => points.filter((point) => point),
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureTrip(point.date))
};

export {filter};
