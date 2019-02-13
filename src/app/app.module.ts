import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { GifService } from './services/gif.service';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainListComponent } from './components/all-gifs/all-gifs.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { MyCollectionComponent } from './components/my-collection/my-collection.component';
import { SearchComponent } from './components/search/search.component';
import { GifDialogComponent } from './components/gif-dialog/gif-dialog.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    SidebarComponent,
    HeaderComponent,
    FavoritesComponent,
    GifDetailsComponent,
    MyCollectionComponent,
    SearchComponent,
    GifDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WebStorageModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent],
  entryComponents: [GifDialogComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
