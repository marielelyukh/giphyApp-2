import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-store';



@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  public imagePath;
  public imgURL: any;
  public message: string;
  public tmpArray: Array<any>;

  constructor(private localStorageService: LocalStorageService) {
    this.tmpArray = [];
  }

  ngOnInit() {
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
      this.tmpArray.push(reader.result);
      this.localStorageService.set('myCollection', this.tmpArray);
      this.message = 'Gif will appear in your collection on favorite page!';

    };
  }

}
