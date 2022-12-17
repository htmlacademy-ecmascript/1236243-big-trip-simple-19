import { render } from '../render.js';
import FiltersSortView from '../view/filters_sort.js';
import TripListView from '../view/trip_view_list.js';
import RoutePoint from '../view/route_point.js';
import FormCreationView from '../view/form_creation.js';
import FormEditView from '../view/form_edit.js';


export default class TripPresenter {
  tripListComponent = new TripListView();

  constructor ({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(new FiltersSortView(), this.tripContainer);
    render(new TripListView(), this.tripContainer);
    render(this.tripListComponent, this.tripContainer);
    render(new FormEditView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RoutePoint(), this.tripListComponent.getElement());
    }

    render(new FormCreationView(), this.tripListComponent.getElement());
  }
}
