import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-watermark></app-watermark>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event: BeforeUnloadEvent) {
    if ($event) {
      $event.returnValue = '确认退出该应用吗？';
    }
    return '确认退出该应用吗？';
  }
}
