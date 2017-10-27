import { Store } from '@ngrx/store';
import { Drink } from './../../models/drink.model';
import { CollectionService } from './collection.service';
import { DataService } from './../drink/data.service';
import { Component, OnInit } from '@angular/core';

import * as fromCollection from './store/collection.reducers';
import * as CollectionActions from './store/collection.actions';
@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  collection: Drink[] = [];
  collectedDrink: number;

  constructor(private dataService: DataService,
              private collectionService: CollectionService,
              private store: Store<fromCollection.State>
            ) {
              this.store.dispatch(new CollectionActions.FetchDrinks());
            }

  ngOnInit() {
    this.store.select('drinks').subscribe(
      (dataState) => {
        this.collection = dataState;
        console.log(this.collection);

      }
    );

    this.store.select('selectedDrink').subscribe(
      (dataState) => {
        this.collectedDrink = dataState;
        console.log(this.collectedDrink + ' My collectedDrink');

      }
    );


  }

}
