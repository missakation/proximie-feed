import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNews from './news/news.reducer';
import { News } from '../news/news.model';

export interface AppState {
  news: fromNews.NewsState
}

export const reducers: ActionReducerMap<AppState> = {
  news: fromNews.newsReducer
};

// -------------------------------------------------------------------
// PROJECTS SELECTORS
// -------------------------------------------------------------------
export const selectNewsState = createFeatureSelector<fromNews.NewsState>('news');

export const selectNewsIds = createSelector(
  selectNewsState,
  fromNews.selectNewsIds
);
export const selectNewsEntities = createSelector(
  selectNewsState,
  fromNews.selectNewsEntities
);
export const selectAllNews = createSelector(
  selectNewsState,
  fromNews.selectAllNews
);
export const selectCurrentNewsId = createSelector(
  selectNewsState,
  fromNews.getSelectedNewsId
);

const emptyNews: News = {
  id: null,
  webTitle: '',
  webPublicationDate: ''
}

export const selectCurrentNews = createSelector(
  selectNewsEntities,
  selectCurrentNewsId,
  (newsEntities, newsId) => {
    return newsId ? newsEntities[newsId] : emptyNews;
  }
);

