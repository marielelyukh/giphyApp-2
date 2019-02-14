import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-gif-dialog',
  templateUrl: './gif-dialog.component.html',
  styleUrls: ['./gif-dialog.component.scss']
})
export class GifDialogComponent implements OnInit {
  public gif: any;

  constructor(private router: Router,
              private dialogRef: MatDialogRef<GifDialogComponent>, @Inject(MAT_DIALOG_DATA) {gif}) {
    this.gif = gif;
    console.log(gif);
  }

  ngOnInit() {
  }

  viewDetails() {
    this.router.navigate(['gifs/details', this.gif['id']]);
    this.dialogRef.close();

  }

  close() {
    this.dialogRef.close();
  }

}
