import { DataService } from './../drink/data.service';
import { Drink } from './../../models/drink.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CollectionService {
  collection: Drink[] = [];

  constructor() { }

  onAddToCollection() {
  }

}

