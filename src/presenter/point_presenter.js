import {render, replace, remove} from '../framework/render.js';
import TripListView from '../view/trip_view_list.js';
import RoutePoint from '../view/route_point.js';
// import ListEmpty from '../view/list_empty.js';
// import FormCreationView from '../view/form_creation.js';
import FormEditView from '../view/form_edit.js';

const MODE = {
  DEFAULT: 'DEFAULT',
  EDITTNG: 'EDITTNG'
};

export default class PointPresenter {
  #tripListComponent = new TripListView();
  #handleDataChange = null;
  #handleModeChange = null;
  #tripEditComponent = null;
  #tripComponent = null;
  #point = null;
  #offer = null;

  #mode = MODE.DEFAULT;

  constructor ({tripListComponent, onDataChange, onModeChange}) {
    this.#tripListComponent = tripListComponent;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevTripComponent = this.#tripComponent;
    const prevTripEditComponent = this.#tripEditComponent;

    this.#tripComponent = new RoutePoint({
      point: this.#point,
      onEditClick: this.#handleEditClick
    });

    this.#tripEditComponent = new FormEditView({
      point: this.#point,
      onFormSumbit: this.#handleFormSubmit
    });

    if (prevTripComponent === null || prevTripEditComponent === null) {
      render(this.#tripComponent, this.#tripListComponent );
      return;
    }
    if (this.#mode === MODE.DEFAULT) {
      replace(this.#tripComponent, prevTripComponent);
    }

    if (this.#mode === MODE.EDITTNG) {
      replace(this.#tripEditComponent, prevTripEditComponent);
    }

    remove(prevTripComponent);
    remove(prevTripEditComponent);
  }

  destroy() {
    remove(this.#tripComponent);
    remove(this.#tripEditComponent);
  }

  resetView() {
    if(this.#mode !== MODE.DEFAULT) {
      this.#replaceEditToTrip();
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToTrip.call(this);
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };


  #replaceTripToEdit () {
    replace(this.#tripEditComponent, this.#tripComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = MODE.EDITTNG;
  }

  #replaceEditToTrip () {
    replace(this.#tripComponent, this.#tripEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = MODE.DEFAULT;
  }

  #handleEditClick = () => {
    this.#replaceTripToEdit();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceEditToTrip();
  };
}
