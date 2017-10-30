import { AppState } from './../../app.reducers';
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
  collection: number[] = [];
  collectedDrink: number;

  constructor(private dataService: DataService,
              private collectionService: CollectionService,
              private store: Store<AppState>
            ) {}

  ngOnInit() {
    this.store.select('collections').subscribe(
      (dataState) => {
        this.collectedDrink = dataState.selectedDrink;
        this.collection = dataState.selectedDrinks;
        console.log(this.collection);
      }
    );



  }

}
