import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NotificationsService } from './notifications/notifications.service';
import { NewsService } from './news/news.service';
import { StateModule } from './state/state.module';

@NgModule({
  providers: [
    NotificationsService,
    NewsService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StateModule
  ],
})
export class CoreDataModule {}
