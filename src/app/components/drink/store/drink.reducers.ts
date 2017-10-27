import * as DrinkActions from './drink.actions';
import { Action } from '@ngrx/store';

import { Drink } from './../../../models/drink.model';


export type State = Drink;
const initialState: State = {
    drinks: [],
};

export function drinkReducers(state = initialState, action: DrinkActions.DrinkActions)  {
    switch (action.type) {
        case DrinkActions.GET_DRINKS: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}
