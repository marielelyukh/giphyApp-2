import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GifsComponent } from './gifs.component';
import { MainListComponent } from './all-gifs/all-gifs.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GifDetailsComponent} from './gif-details/gif-details.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', component: GifsComponent,
    children: [
      {path: '', redirectTo: 'all-gifs', pathMatch: 'full'},
      {path: 'all-gifs', component: MainListComponent},
      {path: 'search', component: SearchComponent},
      {path: 'favorites', component: FavoritesComponent },
      {path: 'details/:id' , component: GifDetailsComponent},
      {path: 'my-collection' , component: MyCollectionComponent},
      {path: '**', component: MainListComponent}
    ]

  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
