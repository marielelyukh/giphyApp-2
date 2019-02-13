import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-gif-dialog',
  templateUrl: './gif-dialog.component.html',
  styleUrls: ['./gif-dialog.component.scss']
})
export class GifDialogComponent implements OnInit {
  public gif: any;

  constructor(private dialogRef: MatDialogRef<GifDialogComponent>, @Inject(MAT_DIALOG_DATA) {gif}) {
    this.gif = gif;
    console.log(gif);
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
