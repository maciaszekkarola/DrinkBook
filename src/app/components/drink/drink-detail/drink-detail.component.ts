import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CollectionService } from './../../my-collection/collection.service';
import { Subscription } from 'rxjs/Subscription';
import { DrinkItem } from './../../../models/drinkItem.model';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { unsubscriber } from '../../../shared/unsubscriber';

import * as fromDrink from '../store/drink.reducers';
import * as DrinkActions from '../store/drink.actions';
import * as fromCollection from '../../my-collection/store/collection.reducers';
import * as CollectionActions from '../../my-collection/store/collection.actions';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit, OnDestroy {
  idDrink: number;
  drinkItem: DrinkItem;
  subscriptions: Subscription[] = [];
  drinkState$: Observable<fromDrink.State>;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private store: Store<fromDrink.FeatureState>,
              private collectionService: CollectionService) { }

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
  }

  ngOnDestroy() {
    unsubscriber(this.subscriptions);
  }

  onAdd() {
    this.store.select('drinks').subscribe(
      (drinkState$: fromDrink.State) => {
        this.store.dispatch(new CollectionActions.AddDrinks(
          this.idDrink
        ));
        console.log(this.idDrink + ' DrinkDetail Component');
      }
    );
  }



}
