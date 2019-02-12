import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-store';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favGifs: Array<any> = [];
  public myGifCollection: Array<any> = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    // console.log(this.localStorageService.get('favArray'));
    this.favGifs = this.localStorageService.get('favArray');
    this.myGifCollection = this.localStorageService.get('myCollection');

  }

}
