import { Drink } from './../../../models/drink.model';
import { Action } from '@ngrx/store';

export const ADD_DRINKS = 'ADD_DRINKS';
export const FETCH_DRINKS = 'FETCH_DRINKS';
export const REMOVE_DRINK = 'REMOVE_DRINK';


export class FetchDrinks implements Action {
    readonly type = FETCH_DRINKS;
}
export class AddDrinks implements Action {
    readonly type = ADD_DRINKS;
    constructor(public payload: number) {}
}

export class RemoveDrink implements Action {
    readonly type = REMOVE_DRINK;
    constructor(public payload: number) {}
}



export type CollectionAction = AddDrinks | FetchDrinks | RemoveDrink;

