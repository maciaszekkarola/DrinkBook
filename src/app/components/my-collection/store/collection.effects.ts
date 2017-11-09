import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import * as fromCollection from './collection.reducers';
import * as CollectionActions from './collection.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

const url = 'https://drink-ed520.firebaseio.com/';

@Injectable()
export class CollectionEffects {
    @Effect({dispatch: false})
    storeDrink = this.actions$
    .ofType(CollectionActions.STORE_COLLECTION)
    .withLatestFrom(this.store.select('selectedDrinks'))
    .switchMap( ([action, state]) => {
        console.log(state);
        const req = new HttpRequest(
            'PUT',
            `${url}drinks.json`,
            state.selectedDrinks,
            {reportProgress: true}
        );
        console.log(req, state.selectedDrinks);
        return this.http.request(req);
    });


    constructor(
        private actions$: Actions,
        private store: Store<fromCollection.FeatureState>,
        private http: HttpClient,
    ) {}
}
