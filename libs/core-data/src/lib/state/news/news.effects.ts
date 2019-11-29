import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { News } from '../../news/news.model';
import { NewsService } from '../../news/news.service';

import {
  NewsActionTypes,
  NewsLoaded,
  LoadNews
} from './news.actions';
import { NewsState } from './news.reducer';

@Injectable({ providedIn: 'root' })
export class NewsEffects {

  @Effect() effect$ = this.actions$.pipe(ofType(NewsActionTypes.NewsAction));

  @Effect()
  loadNews$ = this.dataPersistence.fetch(NewsActionTypes.LoadNews, {
    run: (action: LoadNews, state: NewsState) => {
      return this.newsService.all().pipe(map((res: any) => {
        return new NewsLoaded(res.response.results);
      }))
    },

    onError: (action: LoadNews, error) => {
      console.error('Error', error);
    }
  });

  constructor( 
    private actions$: Actions,
    private dataPersistence: DataPersistence<NewsState>,
    private newsService: NewsService
  ) { 
    
  }
}