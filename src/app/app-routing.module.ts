import { MyCollectionComponent } from './components/my-collection/my-collection.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/drink', pathMatch: 'full'},
  {path: 'drinks', loadChildren: './componnets/drinks/drink.module#DrinkModule'},
  {path: 'myCollection', component: MyCollectionComponent},
];


@NgModule ({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
