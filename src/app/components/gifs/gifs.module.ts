import {NgModule} from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {WebStorageModule} from 'ngx-store';
import {MatDialogModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { GifService} from '../../services/gif.service';

import {GifsRoutingModule} from './gifs-routing.module';
import {GifsComponent} from './gifs.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {MainListComponent} from './all-gifs/all-gifs.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {GifDetailsComponent} from './gif-details/gif-details.component';
import {MyCollectionComponent} from './my-collection/my-collection.component';
import {SearchComponent} from './search/search.component';
import {GifDialogComponent} from './gif-dialog/gif-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    GifsRoutingModule,
    HttpClientModule,
    FormsModule,
    WebStorageModule,
    InfiniteScrollModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  declarations: [
    GifsComponent,
    MainListComponent,
    SidebarComponent,
    HeaderComponent,
    FavoritesComponent,
    GifDetailsComponent,
    MyCollectionComponent,
    SearchComponent,
    GifDialogComponent
  ],
  providers: [GifService],
  entryComponents: [GifDialogComponent]
})
export class GifsModule {
}
