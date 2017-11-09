import { Action } from '@ngrx/store';

export const ADD_DRINKS = 'ADD_DRINKS';
export const FETCH_DRINKS = 'FETCH_DRINKS';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const STORE_COLLECTION = 'STORE_COLLECTION';

export class FetchDrinks implements Action {
    readonly type = FETCH_DRINKS;
}
export class AddDrinks implements Action {
    readonly type = ADD_DRINKS;
    constructor(public payload: number) {}
}

export class UpdateCollection implements Action {
    readonly type = UPDATE_COLLECTION;
    constructor(public payload: number) {}
}

export class StoreCollection implements Action {
    readonly type = STORE_COLLECTION;
}



export type CollectionAction = AddDrinks | FetchDrinks | UpdateCollection | StoreCollection;

