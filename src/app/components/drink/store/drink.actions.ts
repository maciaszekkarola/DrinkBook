import { Drink } from './../../../models/drink.model';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


export const GET_DRINKS = 'GET_DRINKS';
export const FETCH_DRINKS = 'FETCH_DRINKS';

@Injectable()
export class FetchDrinks implements Action {
    readonly type = FETCH_DRINKS;
    constructor () {}
}

export class GetDrinks implements Action {
    readonly type = GET_DRINKS;
    constructor ( public payload: Drink[]) {}
}

export type DrinkActions = GetDrinks | FetchDrinks;
