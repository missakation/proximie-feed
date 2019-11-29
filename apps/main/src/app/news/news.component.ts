import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { News, NewsFacade } from '@workshop/core-data';
import { Observable, fromEvent, empty } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  private news$: Observable<News[]> = this.newsFacade.allNews$;

  @ViewChild('searchbox', { static: false }) input: ElementRef;

  private searchCriteria: String = "";
  private pageNumber: number = 1;

  constructor(private newsFacade: NewsFacade) {
  }

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this.newsFacade.loadNews(this.searchCriteria, this.pageNumber);
  }

  openCurrentNews(selectedNews: News) {
    window.open(selectedNews.webUrl, "_blank");
  }

  loadNextPage() {
    this.pageNumber++;
    this.loadPage();
  }

  ngAfterViewInit() {

    // Wait for 500ms, if there is a change in the input, then run the API call.
    // To reduce API calls.
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.pageNumber = 1;
          this.searchCriteria = this.input.nativeElement.value;
          this.loadPage();
        })
      )
      .subscribe();
  }

}

