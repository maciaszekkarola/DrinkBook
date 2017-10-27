import { Drink } from './../../../models/drink.model';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


export const GET_DRINKS = 'GET_DRINKS';

@Injectable()

export class GetDrinks implements Action {
    readonly type = GET_DRINKS;
    constructor ( public payload: Drink[]) {}
}

export type DrinkActions = GetDrinks;
