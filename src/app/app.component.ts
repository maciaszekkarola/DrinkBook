import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './components/drink/data.service';
import { Store } from '@ngrx/store';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { unsubscriber } from './shared/unsubscriber';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {

    constructor(private dataService: DataService) {}

    ngOnInit() {
   }

    ngOnDestroy() {
    }


  }





