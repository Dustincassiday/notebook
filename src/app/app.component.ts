import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MAX_PAGES, TITLE } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public maxPages = MAX_PAGES;
  public title = TITLE;
}
