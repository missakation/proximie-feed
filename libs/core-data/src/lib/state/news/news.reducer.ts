import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { News } from '@workshop/core-data';
import { NewsActions, NewsActionTypes } from './news.actions';

/**
 * Interface to the part of the Store containing NewsState
 * and other information related to NewsData.
 */
export interface NewsState extends EntityState<News> {
  selectedNewsId: string | null;
}

export const adapter: EntityAdapter<News> = createEntityAdapter<News>();
export const initialState: NewsState = adapter.getInitialState({
  // additional entity state properties
  selectedNewsId: null,
});

export function newsReducer(state = initialState, action: NewsActions): NewsState {
  switch (action.type) {
    case NewsActionTypes.NewsSelected: {
      return Object.assign({}, state, { selectedNewsId: action.payload });
    }

    case NewsActionTypes.NewsLoaded: {
      if (action.pageNumber > 1) {
        return adapter.upsertMany(action.payload, state);
      }
      return adapter.addAll(action.payload, state);

    }

    default:
      return state;
  }
}

export const getSelectedNewsId = (state: NewsState) => state.selectedNewsId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of news ids
export const selectNewsIds = selectIds;

// select the dictionary of news entities
export const selectNewsEntities = selectEntities;

// select the array of news
export const selectAllNews = selectAll;

// select the total news count
export const selectNewsTotal = selectTotal;
