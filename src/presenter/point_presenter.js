import { RenderPosition, render, replace, remove} from '../framework/render.js';
import TripListView from '../view/trip_view_list.js';
import RoutePoint from '../view/route_point.js';
import ListEmpty from '../view/list_empty.js';
// import FormCreationView from '../view/form_creation.js';
import FormEditView from '../view/form_edit.js';


export default class PointPresenter {
    #tripListComponent = new TripListView();
    #tripEditComponent = null
    #tripComponent = null
    #point = null
    #offer = null
    
    constructor ({tripListComponent}) {
        this.#tripListComponent = tripListComponent
    }

    init(point) {
        this.#point = point

        const prevTripComponent = this.#tripComponent
        const prevTripEditComponent = this.#tripEditComponent

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
            return
        }
        if (this.#tripListComponent.contains(prevTripComponent.element)) {
            replace(this.#tripComponent, prevTripComponent)
        }

        if (this.#tripListComponent.contains(prevTripEditComponent.element)) {
            replace(this.#tripEditComponent, prevTripEditComponent)
        }

        remove(prevTripComponent)
        remove(prevTripEditComponent)
    }

    destroy() {
        remove(this.#tripComponent)
        remove(this.#tripEditComponent)
    }
    

    #escKeyDownHandler = (evt) => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.#replaceEditToTrip.call(this);
        document.addEventListener('keydown', this.#escKeyDownHandler);
        }
    };
    
        
    
    #replaceTripToEdit () {
        replace(this.#tripEditComponent, this.#tripComponent);
        document.addEventListener('keydown', this.#escKeyDownHandler)
    }
    
    #replaceEditToTrip () {
        replace(this.#tripComponent, this.#tripEditComponent);
        document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
    
    #handleEditClick = () => {
        this.#replaceTripToEdit()
    }

    #handleFormSubmit = () => {
        this.#replaceEditToTrip()
    }
}
