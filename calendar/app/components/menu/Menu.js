import angular from 'angular';
import MenuComponent from './MenuComponent';

export default angular.module('calendar.menu', [])
                      .component('calendarMenu', MenuComponent);
