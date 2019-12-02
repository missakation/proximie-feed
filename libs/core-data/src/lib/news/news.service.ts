import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  model = 'search'

  constructor(
    private http: HttpClient
  ) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  // getUrlForId(id) {
  //   return `${this.getUrl()}/${id}`;
  // }

  all(searchCriteria: String, pageNumber: number) {
    return this.http.get<News[]>(this.getUrl() + this.queryBuilder(searchCriteria, pageNumber));
  }

  queryBuilder(searchCriteria: String, pageNumber: number) {

    return `?q=${searchCriteria}&page=${pageNumber}&api-key=${environment.apiKey}`

  }
}
