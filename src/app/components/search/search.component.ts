import {Component, OnInit} from '@angular/core';
import {GifService} from '../../services/gif.service';
import {LocalStorageService} from 'ngx-store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchResult: any;
  public searchText: string;
  public allSearchGifs: Array<any> = [];
  public favsArray: Array<any> = [];

  constructor(private gifService: GifService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
  }

  searchGifs(searchText) {
    this.gifService.searchGifs(searchText).subscribe(
      (data) => {
        this.searchResult = data;
        this.allSearchGifs = this.allSearchGifs.concat(this.searchResult.data);
      }
    );
  }

  addToFav(gif) {
    let isAbsent = this.favsArray.some(function (item) {
      return item.id === gif.id;
    });
    console.log(isAbsent);
    if (!isAbsent) {
      this.favsArray.push(gif);
      gif.active = true;
      console.log(gif);
      this.localStorageService.set('favArray', this.favsArray);
    }
  }

}