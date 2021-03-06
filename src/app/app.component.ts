import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase';
import * as fromApp from './app.reducers';
import * as CollectionActions from './components/my-collection/store/collection.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {
  selected = [];
    constructor(private store: Store<fromApp.AppState>) {}

    ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyBHuYU5iVi7XtfB1tKCRqewogj1GiZS4B4',
        authDomain: 'drink-ed520.firebaseapp.com'
      });
      this.store.select('collections', 'selectedDrinks')
        .subscribe(
          (data) => {
            console.log(data);
            this.selected = data;
          }
        );

   }

   onSaveData() {
    this.store.dispatch(new CollectionActions.StoreCollection());
    console.log(this.selected);
   }

    ngOnDestroy() {
    }


  }





