import { render } from '../render.js';
import FiltersSortView from '../view/filters_sort.js';
import TripListView from '../view/trip_view_list.js';
import RoutePoint from '../view/route_point.js';
import ListEmpty from '../view/list_empty.js';
// import FormCreationView from '../view/form_creation.js';
import FormEditView from '../view/form_edit.js';


export default class TripPresenter {
  #tripListComponent = new TripListView();

  #tripContainer = null;
  #pointsModel = null;

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
      render(new ListEmpty(), this.#tripContainer);
    }
  }

  #renderTrip(point, offer) {
    const tripComponent = new RoutePoint({point, offer});
    const tripEditComponent = new FormEditView({point, offer});

    const replaceTripToEdit = () => {
      this.#tripListComponent.element.replaceChild(tripEditComponent.element, tripComponent.element);
    };

    const replaceEditToTrip = () => {
      this.#tripListComponent.element.replaceChild(tripComponent.element, tripEditComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditToTrip();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    tripComponent.element.querySelector('.event__rollup-btn').addEventListener('click', ()=> {
      replaceTripToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    tripEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditToTrip();
      document.removeEventListener('keydown', escKeyDownHandler);
    });


    render(tripComponent, this.#tripListComponent.element);
  }
}
