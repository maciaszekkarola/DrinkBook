import { Observable } from 'rxjs/Observable';
import { DrinkItem } from './../../models/drinkItem.model';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Drink } from './../../models/drink.model';
import { CollectionService } from './collection.service';
import { DataService } from './../drink/data.service';
import { Component, OnInit } from '@angular/core';

import * as fromCollection from './store/collection.reducers';
import * as CollectionActions from './store/collection.actions';
import * as fromApp from '../../app.reducers';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  collection: number[] = [];
  drink: Drink = {
    name: null,
    id: null,
    path: null
  };
  drinkArr = [];

  constructor(private dataService: DataService,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.select('collections').subscribe(
      (dataState) => {
        console.log(dataState);
        this.collection = dataState.selectedDrinks;
      }
    );

    for (let i = 0; i < this.collection.length; i++) {
      this.dataService.getDrink(this.collection[i])
      .subscribe(
        (data) => {
          this.drink = {
            name: data['drinks'][0].strDrink,
            id: data['drinks'][0].idDrink,
            path: data['drinks'][0].strDrinkThumb
          };

          this.drinkArr.push(this.drink);
        }
      );
    }
  }

  onDelete(index) {
    this.drinkArr.splice(index, 1);
    this.store.dispatch(new CollectionActions.UpdateCollection(index));
  }

}
