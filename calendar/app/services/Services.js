import angular from 'angular';
import 'angular-resource';
import EventService from './EventService';

export default angular.module('calendar.services', ['ngResource'])
                      .service('EventService', EventService);
