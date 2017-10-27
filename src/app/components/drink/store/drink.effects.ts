import { DataService } from './../data.service';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import * as drink from './drink.actions';
import 'rxjs/add/operator/switchMap';

@Injectable()

export class DrinkEffects {
    @Effect()
    setDrinks$: Observable<Action> = this.actions$
    .ofType(drink.GET_DRINKS)
    .switchMap(result => {
        return this.dataService.getDrinks()
            .map(drinks => new drink.GetDrinks(drinks)
        );
    });


    constructor(
        private dataService: DataService,
        private actions$: Actions) {}
}
