import { Drink } from './../../../models/drink.model';
import * as CollectionActions from './collection.actions';

export interface State {
    selectedDrink: number;
    selectedDrinks: number[];
}

const initialState: State = {
    selectedDrink: null,
    selectedDrinks: [],
};

export function collectionReducers(state = initialState, action: CollectionActions.CollectionAction) {
    switch (action.type) {
        case CollectionActions.ADD_DRINKS:
        return {
            ...state,
            selectedDrink: action.payload,
            selectedDrinks: [...state.selectedDrinks, action.payload]
        };
        default:
        return state;
    }
}
