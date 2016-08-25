import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMessageFormat from 'angular-message-format';
import uirouter from 'angular-ui-router';
import * as routeConfig from './appRoutes';
import Menu from './components/menu/Menu';
import Calendar from './components/calendar/Calendar';
import Services from './services/Services';

import 'angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar.min.js';
import 'angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js';
import 'angular-bootstrap-colorpicker';

export default angular
.module('calendar', [ngAnimate, ngSanitize, ngMessageFormat, uirouter,
              Menu.name, Calendar.name, Services.name, 'mwl.calendar', 'colorpicker.module'])
.config(routeConfig.routing)
.run(routeConfig.statechange);
