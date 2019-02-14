import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-store';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {GifService} from '../../../services/gif.service';


@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  public tmpArray: Array<any>;
  public tags: string;
  public title: string;
  public tmpFIleName: string;
  public typeMessage: string;
  public successMessage: string;
  public uploadedGifs: Array<any>;
  fileToUpload: File = null;


  constructor(private localStorageService: LocalStorageService, private fb: FormBuilder, private gifService: GifService) {
    this.tmpArray = [];
    if (this.localStorageService.get('uploadedGifsIds')) {
      this.uploadedGifs = this.localStorageService.get('uploadedGifsIds');
    } else {
      this.uploadedGifs = [];
    }
  }

  ngOnInit() {
  }

  upload() {
    this.gifService.uploadToGiphy(this.fileToUpload, this.tags, this.title).subscribe(
      (data) => {
        console.log(this.uploadedGifs);
        this.uploadedGifs.push(data.data.id);
        this.localStorageService.set('uploadedGifsIds', this.uploadedGifs);
        console.log(this.localStorageService.get('uploadedGifsIds'));
        this.successMessage = 'Gif was successfully uploaded, you can find it in your collection';
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
