import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';

import { selectAllNews, selectCurrentNews } from '..';
import * as NewsActions from './news.actions';
import { NewsState } from './news.reducer';

@Injectable({
  providedIn: 'root'
})
export class NewsFacade {
  allNews$ = this.store.pipe(select(selectAllNews));
  currentNews$ = this.store.pipe(select(selectCurrentNews));

  constructor(private store: Store<NewsState>, private actions$: ActionsSubject) { }

  selectNews(itemId) {
    this.store.dispatch(new NewsActions.NewsSelected(itemId));
  }

  loadNews() {
    this.store.dispatch(new NewsActions.LoadNews());
  }
}
