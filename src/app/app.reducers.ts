import { AppState } from './app.reducers';
import * as fromCollectionReducers from './components/my-collection/store/collection.reducers';
import * as fromDrinkReducers from './components/drink/store/drink.reducers';
import { compose } from '@ngrx/core';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    drinks: fromDrinkReducers.State;
    collections: fromCollectionReducers.State;
}

export const reducers: ActionReducerMap<AppState> = {
    drinks: fromDrinkReducers.drinkReducers,
    collections: fromCollectionReducers.collectionReducers
}







