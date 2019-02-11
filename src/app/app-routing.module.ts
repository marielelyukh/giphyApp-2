import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainListComponent } from './components/all-gifs/all-gifs.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GifDetailsComponent} from './components/gif-details/gif-details.component';
import { MyCollectionComponent } from './components/my-collection/my-collection.component';

const routes: Routes = [
  {path: '', redirectTo: 'all-gifs', pathMatch: 'full'},
  {path: 'all-gifs', component: MainListComponent},
  {path: 'favorites', component: FavoritesComponent },
  {path: 'details/:id' , component: GifDetailsComponent},
  {path: 'my-collection' , component: MyCollectionComponent},
  {path: '**', component: MainListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
