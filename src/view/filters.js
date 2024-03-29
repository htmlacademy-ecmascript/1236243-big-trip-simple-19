import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate (filter, isChecked) {
  const {name, count} = filter;

  return `<div class="trip-filters__filter">
          <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" ${isChecked ? 'checked' : ''} ${count === 0 ? 'disabled' : ''}>
          <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
          </div>`;
}


function createFiltersTemplate (filterItems) {
  const filtersItemsTemplate = filterItems
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join('');

  return (`<div class="trip-main__trip-controls  trip-controls">
    <div class="trip-controls__filters">
      <h2 class="visually-hidden">Filter events</h2>
      <form class="trip-filters" action="#" method="get">
        ${filtersItemsTemplate}

        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    </div>
  </div>`);
}

export default class FiltersView extends AbstractView {

  #filters = null;

  constructor ({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
