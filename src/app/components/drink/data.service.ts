import { DrinkItem } from './../../models/drinkItem.model';
import { Drink } from './../../models/drink.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {
  // private drinkItem: DrinkItem;
  private url = 'http://www.thecocktaildb.com/api/json/v1/1/';

  constructor(public http: Http) { }

  getDrinks(): Observable<Drink[]> {
    return this.http.get(`${this.url}filter.php?i=vodka`)
      .map((res: Response) => res.json());
  }

  getDrink(id: number): Observable<Drink> {
    return this.http.get(`${this.url}lookup.php?i=${id}`)
      .map((res: Response) => res.json());
  }

  onAddDrink(drink: DrinkItem) {
  }







}
