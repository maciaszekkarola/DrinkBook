import {MyCollectionModule} from './components/my-collection/my-collection.module';
import {AppRoutingModule} from './app-routing.module';
import {DrinkEffects} from './components/drink/store/drink.effects';
import {CollectionEffects} from './components/my-collection/store/collection.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './app.reducers';
import {DrinkModule} from './components/drink/drink.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StoreRouterConnectingModule} from '@ngrx/router-store';


import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';
import {DataService} from './shared/data.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DrinkEffects, CollectionEffects]),
    StoreRouterConnectingModule,
    SharedModule,
    DrinkModule,
    MyCollectionModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
