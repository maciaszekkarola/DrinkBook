import { Drink } from './../../../models/drink.model';
import * as CollectionActions from './collection.actions';

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
        console.log(state);
        return {
            ...state,
            selectedDrink: action.payload,
            selectedDrinks: [...state.selectedDrinks, action.payload],
        };

        case CollectionActions.UPDATE_COLLECTION:
        const oldCollections = [...state.selectedDrinks];
        const index = state.selectedIndex;
        oldCollections.splice(index, 1);
        console.log(oldCollections);

        return {
            ...state,
            selectedIndex: index,
            selectedDrinks: [...oldCollections]

        };
        default:
        return state;
    }
}
