export default class AddEventController {

  static $inject = ['$log', '$state', 'EventService'];

  constructor($log, $state, EventService) {
    this.$log = $log;
    this.$state = $state;

    this.event = {
      color : {
        primary : '#aaaaaa',
      },
    }

  }
}
