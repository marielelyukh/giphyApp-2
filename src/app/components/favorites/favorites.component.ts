import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-store';
import { GifService } from '../../services/gif.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favGifs: Array<any> = [];
  public gifId: string;
  public myGif: any;

  constructor(private localStorageService: LocalStorageService, private gifService: GifService) {
  }

  ngOnInit() {
    this.favGifs = this.localStorageService.get('favArray');
    this.gifId = this.localStorageService.get('uploadedGifId');
    this.getGif();
  }

  getGif() {
    const id = this.gifId;
    this.gifService.getOneGif(id).subscribe(
      data => {
        this.myGif = data.data;
        console.log(this.myGif);
      }
    );
  }


}
