import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Drink } from './../../../models/drink.model';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { unsubscriber } from '../../../shared/unsubscriber';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit, OnDestroy {
  drinkBook: Drink[] = [];
  subscriptions: Subscription[] = [];
  selectedDrinkId: number;

  drinkState$: Observable<any>;

  constructor(
              private store: Store<any>,
              private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subscriptions.push(this.dataService.getDrinks()
    // .subscribe(
    //   (data: Drink[]) => {
    //     this.drinkBook = data['drinks'];
    //     console.log(this.drinkBook);
    //   }
    // ));

    this.drinkState$ = this.store.select('drinks');
    this.drinkState$.subscribe(
      (dataState: Drink[]) => {
        this.drinkBook = dataState['drinks'];
        console.log(this.drinkBook);
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
