import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers} from '@angular/common/http';
import {Observable} from 'rxjs/index';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'image/gif',
  })
};

@Injectable()
export class GifService {
  private giphyUrl = 'http://api.giphy.com/v1/gifs';
  private apiKey = 'ZjjYDvNIw8uMALqpNLKAFwxihghIZRjy';
  private createUrl = 'http://upload.giphy.com/v1/gifs?api_key=ZjjYDvNIw8uMALqpNLKAFwxihghIZRjy';

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

  uploadToGiphy(fileToUpload, tags): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('tags', tags);
    // formData.append('source_post_url', 'http://www.mysite.com/my-blog-post/');
    // formData.append('type', 'gif');
    return this.http.post(this.createUrl, formData, httpOptions);
  }


}
