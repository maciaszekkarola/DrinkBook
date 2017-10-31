import { Drink } from './../../../models/drink.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { DrinkItem } from './../../../models/drinkItem.model';
import { DataService } from './../data.service';
import { unsubscriber } from '../../../shared/unsubscriber';
import 'rxjs/add/operator/take';

import * as CollectionActions from '../../my-collection/store/collection.actions';
import * as fromApp from '../../../app.reducers';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit, OnDestroy {
  idDrink: number;
  drinkItem: DrinkItem;
  favDrinks: number[] = [];
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private store: Store<fromApp.AppState>
            ) { }

  ngOnInit() {
    this.subscriptions.push(this.route.params
    .subscribe(
      (params: Params) => {
        this.idDrink = +params['id'];
        this.subscriptions.push(this.dataService.getDrink(this.idDrink)
          .subscribe(
            (data: DrinkItem) => {
              this.drinkItem = data['drinks'][0];
            }
          ));
      }
    ));


    this.store.select('collections', 'selectedDrinks').subscribe((sss) => {
      this.favDrinks = sss;

      console.log(this.favDrinks);
    });
  }

  ngOnDestroy() {
    unsubscriber(this.subscriptions);
  }

  onAdd() {
    // just add everything
    // this.store.dispatch(new CollectionActions.AddDrinks(this.idDrink));

    if ( this.favDrinks.indexOf(this.idDrink) === -1 ) { 
      this.store.dispatch(new CollectionActions.AddDrinks(this.idDrink));
    }

    // add with condition - to be fixed
    // this.store.select('collections', 'selectedDrinks').take(1).subscribe(
    //   (dataState) => {
    //     console.log(dataState.length, 'dataState.length');
    //     if ( dataState.length) {
    //       dataState.forEach(element => {
    //         console.log(element, 'element');
    //         if ( this.idDrink !== element ) {
             
    //         }
    //       });
    //     } else {
    //       return this.store.dispatch(new CollectionActions.AddDrinks(this.idDrink));
    //     }
    // });
  }


}
