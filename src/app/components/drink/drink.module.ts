

// import { drinkReducers } from './store/drink.reducers';
// import { DrinkEffects } from './store/drink.effects';
import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkComponent } from './drink.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkItemComponent } from './drink-list/drink-item/drink-item.component';
import { DrinkListComponent } from './drink-list/drink-list.component';



import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';


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
      // StoreModule.({'drinks': drinkReducers}),
      // EffectsModule.forFeature([DrinkEffects]),
    ]
  })

export class DrinkModule {}
