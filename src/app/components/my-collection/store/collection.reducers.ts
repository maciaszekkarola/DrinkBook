import * as CollectionActions from './collection.actions';
import * as fromApp from '../../../app.reducers';

export interface FeatureState extends fromApp.AppState {
  selectedDrink: State;
  selectedDrinks: State;
  selectedIndex: State;
}
export interface State {
    selectedDrink: number;
    selectedDrinks: number[];
    selectedIndex: number;
}

const initialState: State = {
    selectedDrink: null,
    selectedDrinks: [],
    selectedIndex: null
};

export function collectionReducers(state = initialState, action: CollectionActions.CollectionAction) {
    switch (action.type) {
        case CollectionActions.ADD_DRINKS:
        return {
            ...state,
            selectedDrinks: [...state.selectedDrinks, action.payload],
        };

        case CollectionActions.UPDATE_COLLECTION:
        const oldCollections = [...state.selectedDrinks];
        const index = state.selectedIndex;
        oldCollections.splice(index, 1);
        // console.log(oldCollections);

        return {
            ...state,
            selectedIndex: index,
            selectedDrinks: [...oldCollections]

        };
        default:
        return state;
    }
}
