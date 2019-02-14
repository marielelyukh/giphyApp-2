import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-store';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router) {
    if (!this.localStorageService.get('isUser')) {
      this.router.navigate(['../../auth/login']);
    }
  }

  ngOnInit() {
  }

}
