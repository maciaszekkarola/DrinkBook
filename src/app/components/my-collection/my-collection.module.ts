import { CommonModule } from '@angular/common';
import { MyCollectionComponent } from './my-collection.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { collectionReducers} from './store/collection.reducers';
import { CollectionEffects } from './store/collection.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        MyCollectionComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature('collections', collectionReducers ),
        EffectsModule.forFeature([CollectionEffects]),
    ],
})

export class MyCollectionModule {

}
