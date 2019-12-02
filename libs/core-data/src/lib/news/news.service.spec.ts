import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClientModule
    ],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  //check whether the api call is fetching results.
  it('shoud the news API call working', () => {
    const service: NewsService = TestBed.get(NewsService);
    service.all("", 1).subscribe(res => {
      expect(res.length).toBeLessThanOrEqual(10);
    })
  });

});
