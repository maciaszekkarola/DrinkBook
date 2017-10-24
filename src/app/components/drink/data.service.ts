import { CollectionService } from './../my-collection/collection.service';
import { DrinkItem } from './../../models/drinkItem.model';
import { Drink } from './../../models/drink.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {
  private drinkBook: Drink[] = [];
  private drinkItem: DrinkItem;
  private url = 'http://www.thecocktaildb.com/api/json/v1/1/';

  constructor(public http: Http,
              private collectionService: CollectionService) { }

  getDrinks(): Observable<Drink[]> {
    return this.http.get(`${this.url}filter.php?i=vodka`)
      .map((res: Response) => res.json())
      .do(res => {
        res = res['drinks'];
        this.drinkBook.push(res);
    });
  }

  getDrink(id: number) {
    return this.http.get(`${this.url}lookup.php?i=${id}`)
      .map((res: Response) => res.json())
      .do(res => {
        this.drinkItem = res['drinks'][0];
      });
  }

  onAddDrink(drink: DrinkItem) {
    
  }







}
