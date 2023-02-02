import { RenderPosition, render, replace, remove} from '../framework/render.js';
import FiltersSortView from '../view/filters_sort.js';
import TripListView from '../view/trip_view_list.js';
import ListEmpty from '../view/list_empty.js';
import PointPresenter from './point_presenter.js';


export default class TripPresenter {
  #tripListComponent = new TripListView();

  #tripContainer = null;
  #pointsModel = null;
  #noListComponent = new ListEmpty()
  #boardPoints = [];
  #boardOffers = [];

  constructor ({tripContainer, pointsModel}) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;

  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#boardOffers = [...this.#pointsModel.offers];

    render(new FiltersSortView(), this.#tripContainer);
    this.#renderContainer();

  }

  #renderContainer () {
    render(this.#tripListComponent, this.#tripContainer);

    if (this.#boardPoints.length > 0) {
      for (let i = 0; i < this.#boardPoints.length; i++) {
        this.#renderTrip(this.#boardPoints[i], this.#boardOffers[i]);
      }
    } else {
      render(this.#noListComponent, this.#tripContainer);
    }
  }

  #renderTrip(point) {
    const pointPresenter = new PointPresenter({
      tripListComponent: this.#tripListComponent.element
    })
    pointPresenter.init(point)
  }
}
