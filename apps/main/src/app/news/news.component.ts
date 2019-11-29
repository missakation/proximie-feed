import { Component, OnInit } from '@angular/core';
import { News, NewsFacade} from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news$: Observable<News[]> = this.newsFacade.allNews$;
  constructor(
    private newsFacade: NewsFacade
  ) { }

  ngOnInit() {
    this.newsFacade.loadNews();
  }

}

