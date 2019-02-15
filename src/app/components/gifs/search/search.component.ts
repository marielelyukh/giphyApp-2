import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {LocalStorageService} from 'ngx-store';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {GifService} from '../../../services/gif.service';
import {GifDialogComponent} from '../gif-dialog/gif-dialog.component';
import {fromEvent, Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {buffer} from 'rxjs/internal/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchResult: any;
  public searchText: string;
  public offset: number;
  public message: string;
  public allSearchGifs: Array<any>;
  public favsArray: Array<any> = [];
  private searchTerms = new Subject<string>();

  @ViewChild('searchBox')
  searchBox: ElementRef;
  stream: Observable<any>;

  private text: string;

  constructor(private gifService: GifService, private localStorageService: LocalStorageService, public dialog: MatDialog) {
    this.offset = 0;
  }

  search(term: string): void {
    this.searchTerms.next(term);
    console.log(term);
  }

  ngOnInit() {
    this.stream = fromEvent(this.searchBox.nativeElement, 'keyup');
    this.stream.pipe(buffer(this.stream.pipe(debounceTime(500)))).forEach(() => {
      this.gifService.searchGifs(this.text).subscribe(
        (data) => {
          this.allSearchGifs = data.data;
        }
      );
    });
  }

  getMoreSame(searchText) {
    this.gifService.searchGifs(this.text, this.offset).subscribe(
      (data) => {
        this.allSearchGifs = this.allSearchGifs.concat(data.data);
      }
    );
  }

  onScroll() {
    this.offset += 25;
    console.log(this.offset);
    this.getMoreSame(this.searchText);
  }

  openDialog(gif) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      gif
    };
    const dialogRef = this.dialog.open(GifDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      res => console.log('Dialog output:', res)
    );
  }


  addToFav(gif) {
    let isAbsent = this.favsArray.some(function (item) {
      return item.id === gif.id;
    });
    if (!isAbsent) {
      this.favsArray.push(gif);
      gif.active = true;
      // console.log(gif);
      this.localStorageService.set('favArray', this.favsArray);
    }
  }

}
