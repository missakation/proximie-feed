import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { News } from './news.model';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  model = 'search'

  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}?api-key=${environment.apiKey} `;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<News[]>(this.getUrl());
  }
}
