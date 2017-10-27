import { AppState } from './app.reducers';
import * as fromDrinkReducers from './components/drink/store/drink.reducers';
import { compose } from '@ngrx/core';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    drinks: fromDrinkReducers.State;
}

export const reducers: ActionReducerMap<AppState> = {
    drinks: fromDrinkReducers.drinkReducers
}




