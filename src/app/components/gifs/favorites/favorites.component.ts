import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-store';
import { GifService } from '../../../services/gif.service';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {GifDialogComponent} from '../gif-dialog/gif-dialog.component';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favGifs: Array<any>;
  public myGifs: Array<any>;
  public gifsIdsArray: Array<any>;
  public gifsIdsString: string;

  constructor(private localStorageService: LocalStorageService, private gifService: GifService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.favGifs = this.localStorageService.get('favArray');
    if (this.localStorageService.get('uploadedGifsIds')) {
      this.gifsIdsArray = this.localStorageService.get('uploadedGifsIds');
      this.gifsIdsString = this.gifsIdsArray.join();
      this.getGifs();
    }

  }

  getGifs() {
    const ids = this.gifsIdsString;
    this.gifService.getGifsById(ids).subscribe(
      data => {
        this.myGifs = data.data;
      }
    );
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


}
