import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs/index';

@Injectable()
export class GifService {
  private giphyUrl = 'http://api.giphy.com/v1/gifs';
  private apiKey = 'ZjjYDvNIw8uMALqpNLKAFwxihghIZRjy';

  constructor(public http: HttpClient) {
  }

  getTrendingGifs(next: number): Observable<any> {
    return this.http.get(this.giphyUrl + '/trending?api_key=' + this.apiKey + '&offset=' + next);
  }
  searchGifs(text, next: number): Observable<any> {
    return this.http.get(this.giphyUrl + '/search?api_key=' + this.apiKey + '&q=' + text + '&offset=' + next);
  }
  getOneGif(id): Observable<any> {
    return this.http.get(this.giphyUrl + '/' + id + '?api_key=' + this.apiKey);
  }


}
