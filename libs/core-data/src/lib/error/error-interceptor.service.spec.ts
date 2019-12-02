import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';
import { NotificationsService } from '../notifications/notifications.service';
import { MatSnackBarModule } from '@angular/material';

describe('ErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [NotificationsService],
    imports: [MatSnackBarModule]
  }));

  it('should be created', () => {
    const service: ErrorInterceptor = TestBed.get(ErrorInterceptor);
    expect(service).toBeTruthy();
  });
});
