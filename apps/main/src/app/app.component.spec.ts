import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@workshop/core-data';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { NxModule } from '@nrwl/nx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiToolbarModule } from '@workshop/ui-toolbar';
import { MaterialModule } from '@workshop/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreDataModule,
        HttpClientModule,
        LayoutModule,
        NxModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        UiToolbarModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Proximie DataFeed'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Proximie DataFeed');
  });

});
