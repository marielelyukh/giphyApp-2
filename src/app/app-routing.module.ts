import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'gifs', loadChildren: './components/gifs/gifs.module#GifsModule' },
  { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
