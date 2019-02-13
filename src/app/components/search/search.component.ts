import {Component, OnInit} from '@angular/core';
import {GifService} from '../../services/gif.service';
import {LocalStorageService} from 'ngx-store';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {GifDialogComponent} from '../gif-dialog/gif-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchResult: any;
  public searchText: string;
  public offset: number;
  public message: string;
  public allSearchGifs: Array<any> = [];
  public favsArray: Array<any> = [];


  constructor(private gifService: GifService, private localStorageService: LocalStorageService, public dialog: MatDialog) {
    this.offset = 25;
  }

  ngOnInit() {
  }

  searchNewGifs(searchText, offset) {
    this.allSearchGifs = [];
    if (!searchText) {
      this.message = 'Please fill search input.';
      return;
    }
    this.gifService.searchGifs(searchText, offset).subscribe(
      (data) => {
        this.searchResult = data;
        this.allSearchGifs = this.allSearchGifs.concat(data.data);
        this.message = '';
      }
    );
  }


  getMoreSame(searchText, offset) {
    this.gifService.searchGifs(searchText, offset).subscribe(
      (data) => {
        this.searchResult = data;
        this.allSearchGifs = this.allSearchGifs.concat(this.searchResult.data);
        this.message = '';
      }
    );
  }

  onScroll() {
    this.offset += 25;
    console.log(this.offset);
    this.getMoreSame(this.searchText, this.offset);
  }

  openDialog(gif) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      gif
    };
    const dialogRef = this.dialog.open(GifDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      res => console.log('Dialog output:', res)
    );
  }


  addToFav(gif) {
    let isAbsent = this.favsArray.some(function (item) {
      return item.id === gif.id;
    });
    // console.log(isAbsent);
    if (!isAbsent) {
      this.favsArray.push(gif);
      gif.active = true;
      // console.log(gif);
      this.localStorageService.set('favArray', this.favsArray);
    }
  }

}
