import {Component, OnInit, ViewChild} from '@angular/core';
import {GifService} from '../../../services/gif.service';
import {LocalStorageService} from 'ngx-store';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {GifDialogComponent} from '../gif-dialog/gif-dialog.component';

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

  constructor(private gifService: GifService, private localStorageService: LocalStorageService, public dialog: MatDialog) {
    this.offset = 0;
  }

  ngOnInit() {
    this.getGifs(this.offset);
  }

  getGifs(offset: number) {
    this.gifService.getTrendingGifs(offset).subscribe(
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
    // console.log(isAbsent, 'absent');
    if (!isAbsent) {
      this.favsArray.push(gif);
      gif.active = true;
      // console.log(gif);
      this.localStorageService.set('favArray', this.favsArray);
    }
  }


}
