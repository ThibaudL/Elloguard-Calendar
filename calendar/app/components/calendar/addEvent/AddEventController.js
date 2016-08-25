export default class AddEventController {

  static $inject = ['$log', '$state', 'EventService'];

  constructor($log, $state, EventService) {
    this.$log = $log;
    this.$state = $state;
    this.EventService = EventService;

    this.defaultEvent = {
      color : {
        primary : '#aaaaaa',
      },
    };
    this.event = angular.copy(this.defaultEvent);
  }
  
  addEvent(event) {
    this.EventService.addEvent(event).then(() => {
        this.events.push(event);
    });
  }
}
