import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-store';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {GifService} from '../../services/gif.service';


@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  public tmpArray: Array<any>;
  public tags: string;
  public tmpFIleName: string;
  public typeMessage: string;
  fileToUpload: File = null;


  constructor(private localStorageService: LocalStorageService, private fb: FormBuilder, private gifService: GifService) {
    this.tmpArray = [];
  }

  ngOnInit() {
  }

  upload() {
    this.gifService.uploadToGiphy(this.fileToUpload, this.tags).subscribe(
      (data) => {
        this.localStorageService.set('uploadedGifId', data.data.id);
        console.log(this.localStorageService.set('uploadedGifId', data.data.id));
      }
    );
  }

  handleFileInput(files: FileList) {
    const mimeType = files[0].type;
    if (mimeType.match(/image\/gif/) == null) {
      this.typeMessage = 'Only images are supported';
      return;
    }
    this.fileToUpload = files.item(0);
    this.tmpFIleName = files.item(0).name;
    }

}
