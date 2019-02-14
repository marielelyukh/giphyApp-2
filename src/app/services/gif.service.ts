import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'image/gif',
  })
};

@Injectable()
export class GifService {
  private giphyUrl = 'http://api.giphy.com/v1/gifs';
  private apiKey = 'dQHtLzgVyc8XFUVTmScclsMIXl4IAX8d';
  private createUrl = 'http://upload.giphy.com/v1/gifs?api_key=dQHtLzgVyc8XFUVTmScclsMIXl4IAX8d';

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

  getGifsById(ids): Observable<any> {
    return this.http.get(this.giphyUrl + '?api_key=' + this.apiKey + '&ids=' + ids);
  }

  uploadToGiphy(fileToUpload, tags, title): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('tags', tags);
    formData.append('title', title);

    // formData.append('source_post_url', 'http://www.mysite.com/my-blog-post/');
    // formData.append('type', 'gif');
    return this.http.post(this.createUrl, formData, httpOptions);
  }


}
