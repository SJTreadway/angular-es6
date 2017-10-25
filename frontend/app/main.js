import $ from 'jquery';
import {bootstrap} from 'bootstrap';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import AppComponent from './main.component';
import Components from './components/components';

angular.module('app', [
	uiRouter,
	ngCookies,
	Components.name
])
.directive('app', AppComponent);
