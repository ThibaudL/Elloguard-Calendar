export default class CalendarController {

  static $inject = ['$log', '$state', 'EventService'];

  constructor($log, $state, EventService, $ocLazyLoad) {
    this.$log = $log;
    this.$state = $state;
    this.calendarView = 'month';
    this.calendarDate = new Date();
    this.calendarTitle = 'Elloguard events';
    EventService.getAll().then((allEvents) => {
      this.events = allEvents;
    });
  }
}
