import { DrinkEffects } from './components/drink/store/drink.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { DrinkModule } from './components/drink/drink.module';
import { CollectionService } from './components/my-collection/collection.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService} from './components/drink/data.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { DrinkListComponent } from './components/drink/drink-list/drink-list.component';
import { DrinkItemComponent } from './components/drink/drink-list/drink-item/drink-item.component';
import { DrinkDetailComponent } from './components/drink/drink-detail/drink-detail.component';
import { DrinkComponent } from './components/drink/drink.component';
import { HomeComponent } from './components/home/home.component';
import { MyCollectionComponent } from './components/my-collection/my-collection.component';
import { drinkReducers } from './components/drink/store/drink.reducers';


const routes: Routes = [
  {path: '', redirectTo: '/drink', pathMatch: 'full'},
  {path: 'myCollection', component: MyCollectionComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCollectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DrinkEffects]),
    RouterModule.forRoot(routes),
    DrinkModule,
  ],
  providers: [DataService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
