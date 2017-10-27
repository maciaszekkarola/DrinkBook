import { DrinkEffects } from './store/drink.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkItemComponent } from './drink-list/drink-item/drink-item.component';
import { DrinkListComponent } from './drink-list/drink-list.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { drinkReducers } from './store/drink.reducers';


@NgModule({
    declarations: [
        DrinkListComponent,
        DrinkItemComponent,
        DrinkDetailComponent,
        DrinkComponent,
    ],
    imports: [
      CommonModule,
      DrinkRoutingModule,
      StoreModule.forFeature('drinks', drinkReducers),
      EffectsModule.forFeature([DrinkEffects]),
      NgbModule
    ]
  })

export class DrinkModule {}
