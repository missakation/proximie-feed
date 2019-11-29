import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { News, NewsFacade } from '@workshop/core-data';
import { Observable, fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  private news$: Observable<News[]> = this.newsFacade.allNews$;

  @ViewChild('searchbox', { static: false }) input: ElementRef;
  private searchCriteria = "";

  constructor(private newsFacade: NewsFacade) {

  }

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this.newsFacade.loadNews(this.searchCriteria, 1);
  }

  ngAfterViewInit() {

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(600),
        distinctUntilChanged(),
        tap(() => {
          this.searchCriteria = this.input.nativeElement.value;
          this.loadPage();
        })
      )
      .subscribe();
  }

}

