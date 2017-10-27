import { Drink } from './../../../models/drink.model';
import { DataService } from './../data.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import * as DrinkAction from './drink.actions';
import 'rxjs/add/operator/switchMap';

@Injectable()

export class DrinkEffects {
    @Effect()
    setDrinks$: Observable<Action> = this.actions$
    .ofType(DrinkAction.FETCH_DRINKS)
    .switchMap( () => this.dataService.getDrinks())
    .map((payload: Drink[]) => new DrinkAction.GetDrinks(payload));

    // @Effect() init$: Observable<Action> = this.actions$
    // .ofType(DrinkAction.FETCH_DRINKS)
    // .switchMap(() => this.dataService.getDrinks())
    // .map(payload => {
    //   console.log(payload, 'payload');
    //   return new DrinkAction.GetDrinks(payload);
    // });

    constructor(
        private dataService: DataService,
        private actions$: Actions) {}
}
