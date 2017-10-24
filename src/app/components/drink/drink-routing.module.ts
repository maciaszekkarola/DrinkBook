import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { HomeComponent } from './../home/home.component';
import { DrinkComponent } from './drink.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipeRoutes: Routes = [
    {path: 'drink', component: DrinkComponent, children: [
        {path: '', component: HomeComponent},
        {path: ':id', component: DrinkDetailComponent}
      ]},
];


@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]

})

export class DrinkRoutingModule {

}