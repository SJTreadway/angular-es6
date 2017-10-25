import angular from 'angular';
import Locationbox from './locationbox/locationbox';

let componentModule = angular.module('app.components', [
	Locationbox.name
]);

export default componentModule;
