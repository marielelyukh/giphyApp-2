import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {LocalStorageService} from 'ngx-store';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router, private localStorageService: LocalStorageService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
  }

  logout() {
    this.localStorageService.set('isUser', false);
    this.router.navigate(['../../auth/all-gifs']);
  }

}
