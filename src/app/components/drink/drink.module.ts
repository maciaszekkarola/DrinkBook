import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkItemComponent } from './drink-list/drink-item/drink-item.component';
import { DrinkListComponent } from './drink-list/drink-list.component';

import { drinkReducers } from './store/drink.reducers';
import { DrinkEffects } from './store/drink.effects';
import { SharedModule } from '../../shared/shared.module';

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
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('drinks', drinkReducers),
    EffectsModule.forFeature([DrinkEffects])
  ],
})

export class DrinkModule {}
