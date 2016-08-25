import angular from 'angular';
import AddEventComponent from './AddEventComponent';

export default angular.module('calendar.addevent', [])
                      .component('addEvent', AddEventComponent);
