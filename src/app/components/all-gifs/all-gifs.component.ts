import {Component, OnInit, ViewChild} from '@angular/core';
import {GifService} from '../../services/gif.service';
import {LocalStorageService} from 'ngx-store';

@Component({
  selector: 'app-all-gifs',
  templateUrl: './all-gifs.component.html',
  styleUrls: ['./all-gifs.component.scss']
})
export class MainListComponent implements OnInit {
  public allGifs: Array<any> = [];
  public result: any;
  public favsArray: Array<any> = [];
  public offset: number;

  constructor(private gifService: GifService, private localStorageService: LocalStorageService) {
    this.offset = 0;
  }

  ngOnInit() {
    this.getGifs(this.offset);

  }

  getGifs(more: number) {
    this.gifService.getTrendingGifs(more).subscribe(
      (data) => {
        this.result = data;
        this.allGifs = this.allGifs.concat(this.result.data);
      }
    );
  }
  onScroll() {
    this.offset += 25;
    this.getGifs(this.offset);
  }
  addToFav(gif) {
    let isAbsent = this.favsArray.some(function (item) {
      return item.id === gif.id;
    });
    console.log(isAbsent);
    if (!isAbsent) {
      this.favsArray.push(gif);
      gif.active = true;
      console.log(gif)
      this.localStorageService.set('favArray', this.favsArray);
    }
  }


}
