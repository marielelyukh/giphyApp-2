import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-store';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: object;
  public emptyFields: string;
  public wrongData: string;

  constructor(private localStorageService: LocalStorageService, private route: ActivatedRoute, private router: Router) {
    this.user = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  login(user) {
    if (!user.username || !user.password) {
      this.emptyFields = 'Please fill all fields.';
      this.wrongData = '';
      return;
    } else if (user.username !== 'user' || user.password !== '111111') {
      this.emptyFields = '';
      this.wrongData = 'Your data is wrong.';
      return;
    }
    console.log('kek');
    this.localStorageService.set('isUser', true);
    this.router.navigate(['/all-gifs']);
  }

}
