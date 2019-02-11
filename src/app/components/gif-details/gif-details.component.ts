import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GifService } from '../../services/gif.service';


@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.scss']
})
export class GifDetailsComponent implements OnInit {
  private one_gif: any;

  constructor( private route: ActivatedRoute, private http: GifService, private location: Location) { }

  ngOnInit() {
    this.getGif();
  }

  getGif() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.http.getOneGif(id).subscribe(
      data => {
        this.one_gif = data.data;
      }
    );
  }

}
