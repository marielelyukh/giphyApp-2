import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { AppRoutingModule } from './app-routing.module';

import { GifService } from './services/gif.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainListComponent } from './components/all-gifs/all-gifs.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { MyCollectionComponent } from './components/my-collection/my-collection.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    SidebarComponent,
    HeaderComponent,
    FavoritesComponent,
    GifDetailsComponent,
    MyCollectionComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WebStorageModule,
    InfiniteScrollModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
