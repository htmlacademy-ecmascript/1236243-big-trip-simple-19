import { filter } from '../util/filter.js';

function generateFilters (points) {
  return Object.entries(filter).map(
    ([filterName, filterPoints]) => ({
      name: filterName,
      count: filterPoints(points).length,
    })
  );
}

export {generateFilters};
