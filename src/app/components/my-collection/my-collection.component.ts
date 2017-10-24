import { DrinkItem } from './../../models/drinkItem.model';
import { CollectionService } from './collection.service';
import { DataService } from './../drink/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  collection: DrinkItem[] = [];
  collectedDrink: DrinkItem;

  constructor(private dataService: DataService,
              private collectionService: CollectionService
            ) { }

  ngOnInit() {
    // pobieram drinkItem i 



  }

}
