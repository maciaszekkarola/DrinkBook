import { AddDrinks } from './../../my-collection/store/collection.actions';
import { FetchDrinks } from './../store/drink.actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Drink } from './../../../models/drink.model';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { unsubscriber } from '../../../shared/unsubscriber';

import * as DrinkActions from '../store/drink.actions';
import * as fromApp from '../../../app.reducers';
import * as fromDrink from '../store/drink.reducers';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit, OnDestroy {
  drinkBook: Drink[] = [];
  subscriptions: Subscription[] = [];
  selectedDrinkId: number;

  drinkState$: Observable<fromDrink.State>;

  constructor(
              private store: Store<fromApp.AppState>,
              private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) {
                // wysyłam do store akcję FetchDrinks(), która jako side effect ma pobranie w effectach z service (http.get())
               this.store.dispatch(new DrinkActions.FetchDrinks());
              }

  ngOnInit() {
    this.store.select('drinks').subscribe(
      (dataState) => {
        this.drinkBook = dataState['drinks'];
      }
    );

  }

  onSelect(id: number) {
    this.selectedDrinkId = id;
    this.dataService.getDrink(id);
  }

  ngOnDestroy() {
    unsubscriber(this.subscriptions);
  }

}
