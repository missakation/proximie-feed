import { Action } from '@ngrx/store';
import { News } from '@workshop/core-data';

export enum NewsActionTypes {
  NewsAction = '[News] Action',
  NewsSelected = '[News] Selected',
  LoadNews = '[News] Load Data',
  NewsLoaded = '[News] Data Loaded'
}

export class NewsRead implements Action {
  readonly type = NewsActionTypes.NewsAction;
}

export class NewsSelected implements Action {
  readonly type = NewsActionTypes.NewsSelected;
  constructor(public payload) { }
}

export class LoadNews implements Action {
  readonly type = NewsActionTypes.LoadNews;
  constructor(searchCriteria: String, pageNumber: number) { }
}

export class NewsLoaded implements Action {
  readonly type = NewsActionTypes.NewsLoaded;
  constructor(public payload: News[]) { }
}

export type NewsActions = NewsRead
  | NewsSelected
  | LoadNews
  | NewsLoaded
  ;
