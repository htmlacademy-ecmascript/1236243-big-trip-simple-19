import FiltersView from './view/filters.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip_presenter.js';
import {mockTacks} from '../src/mock/task.js'


const siteElementTripFilters = document.querySelector('.trip-controls__filters');
const siteElementTripsEvents = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({tripContainer: siteElementTripsEvents});

render(new FiltersView(), siteElementTripFilters);

tripPresenter.init();

console.log(mockTacks)