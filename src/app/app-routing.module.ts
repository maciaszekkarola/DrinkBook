import { MyCollectionComponent } from './components/my-collection/my-collection.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/drink', pathMatch: 'full'},
  {path: 'drinks', loadChildren: '../drinks/drink.module#DrinkModule'},
  {path: 'myCollection', component: MyCollectionComponent},
];


@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
