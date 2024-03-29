import FiltersView from './view/filters.js';
import {render} from './framework/render.js';
import TripPresenter from './presenter/trip_presenter.js';
import PointsModel from './model/point_model.js';
import { generateFilters } from './mock/filter.js';


const siteElementTripFilters = document.querySelector('.trip-controls__filters');
const siteElementTripsEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({
  tripContainer: siteElementTripsEvents,
  pointsModel,
});

const filters = generateFilters(pointsModel.points);


render(new FiltersView({filters}), siteElementTripFilters);

tripPresenter.init();

