import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentUser: boolean;

  constructor(private localStorageService: LocalStorageService) {
    this.currentUser = this.localStorageService.get('isUser');
  }

  ngOnInit() {
  }

}
