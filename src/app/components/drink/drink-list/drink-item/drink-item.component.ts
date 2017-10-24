import { DataService } from './../../data.service';
import { Drink } from './../../../../models/drink.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.scss']
})
export class DrinkItemComponent implements OnInit {
  @Input() drink: Drink;
  @Input() index: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
