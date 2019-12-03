import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { MaterialModule } from '@workshop/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NewsService } from '@workshop/core-data';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateModule } from '@workshop/core-data';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [
        CommonModule,
        NewsRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        EffectsModule,
        StateModule,
        HttpClientModule,
        BrowserAnimationsModule

      ],
      providers: [Store, NewsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
