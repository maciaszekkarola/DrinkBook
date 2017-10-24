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

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.push(this.dataService.getDrinks()
    .subscribe(
      (data: Drink[]) => {
        this.drinkBook = data['drinks'];
      }
    ));
  }

  onSelect(id: number) {
    this.selectedDrinkId = id;
    this.dataService.getDrink(id);
  }

  ngOnDestroy() {
    unsubscriber(this.subscriptions);
  }

}
