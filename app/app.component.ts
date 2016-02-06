import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import {NavBar} from "./components/NavBar/NavBar";
import {ROUTER_PROVIDERS} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {provide} from "angular2/core";
import {APP_BASE_HREF} from "angular2/router";
import { HashLocationStrategy} from "angular2/router";
import { LocationStrategy} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {View} from "angular2/core";

@Component({
  selector: 'fitness-tracker-app',
})
@View({
  directives : [ ROUTER_DIRECTIVES, NavBar],
    templateUrl : '/app/AppComponent.html'
})
@RouteConfig([
  { path : '/' , name : 'NavBar', component : NavBar, useAsDefault : true}
])
class AppComponent {
  constructor() {

  }
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(APP_BASE_HREF, { useValue : '/'}),
    provide(LocationStrategy, { useClass : HashLocationStrategy})
]);
