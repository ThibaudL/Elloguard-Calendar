import angular from 'angular';
import CalendarComponent from './CalendarComponent';
import AddEvent from './addEvent/AddEvent';

export default angular.module('calendar.home', [AddEvent.name])
                      .component('calendar', CalendarComponent);
