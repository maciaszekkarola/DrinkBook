import { Drink } from './../../../models/drink.model';
import * as CollectionActions from './collection.actions';

export interface State {
    drinks: Drink[];
    selectedDrink: number;
    selectedDrinks: number[];
}

const initialState: State = {
    drinks: [],
    selectedDrink: null,
    selectedDrinks: []
};

export function collectionReducers(state = initialState, action: CollectionActions.CollectionAction) {
    switch (action.type) {
        case CollectionActions.ADD_DRINKS:
        return {
            ...state,
            selectedDrink: action.payload,
            selectedDrinks: [action.payload]
        };
        default:
        return state;
    }
}
