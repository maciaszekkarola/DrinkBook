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
    // @Effect()
    // setDrinks$: Observable<Action> = this.actions$
    // .ofType(DrinkAction.GET_DRINKS)
    // .switchMap(result => {
    //     return this.dataService.getDrinks()
    //         .map((drinks: Drink[]) => new DrinkAction.GetDrinks(drinks)
    //     );
    // });

    @Effect() init$: Observable<Action> = this.actions$
    .ofType(DrinkAction.FETCH_DRINKS)
    .switchMap(() => this.dataService.getDrinks())
    .map(payload => {
      console.log(payload, 'payload');
      return new DrinkAction.GetDrinks(payload);
    });
    // nothing reacting to failure at moment but you could if you want (here for example)
    // .catch(() => Observable.of(new NameList.InitFailedAction()));

    constructor(
        private dataService: DataService,
        private actions$: Actions) {}
}
