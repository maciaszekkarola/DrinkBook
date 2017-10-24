import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkItemComponent } from './drink-list/drink-item/drink-item.component';
import { DrinkListComponent } from './drink-list/drink-list.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        DrinkListComponent,
        DrinkItemComponent,
        DrinkDetailComponent,
        DrinkComponent,
    ],
    imports: [
      CommonModule,
      DrinkRoutingModule
    ]
  })

export class DrinkModule {}
