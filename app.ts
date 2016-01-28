import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <h1>Hello World!</h1>
  `
})
class App {
  constructor() {

  }
}

bootstrap(App);
