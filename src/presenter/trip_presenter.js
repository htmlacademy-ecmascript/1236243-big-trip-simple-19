import { render } from '../render.js';
import FiltersSortView from '../view/filters_sort.js';
import TripListView from '../view/trip_view_list.js';
import RoutePoint from '../view/route_point.js';
import FormCreationView from '../view/form_creation.js';
import FormEditView from '../view/form_edit.js';


export default class TripPresenter {
  tripListComponent = new TripListView();

  constructor ({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel
    
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()]
    this.boardOffers = [...this.pointsModel.getOffers()]

    render(new FiltersSortView(), this.tripContainer);
    render(this.tripListComponent, this.tripContainer);
    render(new FormEditView(), this.tripListComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new RoutePoint({point: this.boardPoints[i]}, {offer: this.boardOffers[i]}), this.tripListComponent.getElement());
    }

    render(new FormCreationView(), this.tripListComponent.getElement());
  }
}
