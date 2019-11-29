import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Proximie DataFeed';
  isLoggedIn;

  links = [
    { path: '/news', icon: 'trending_up', label: 'News' }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['']);
  }


  isSidenaveOpen(component) {
    return component.opened;
  }
}
