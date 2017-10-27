import { CollectionService } from './../../my-collection/collection.service';
import { Subscription } from 'rxjs/Subscription';
import { DrinkItem } from './../../../models/drinkItem.model';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { unsubscriber } from '../../../shared/unsubscriber';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit, OnDestroy {
  idDrink: number;
  drinkItem: DrinkItem;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
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
  }



}
