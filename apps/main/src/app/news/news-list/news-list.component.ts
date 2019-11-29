import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '@workshop/core-data';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() news: News[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  animationsDisabled = true;

  trackProject(index, news) {
    return news.id;
  }

  ngOnInit() {
  }

  prepareListState() {
    return this.news ? this.news.length : 'pending';
  }
}
