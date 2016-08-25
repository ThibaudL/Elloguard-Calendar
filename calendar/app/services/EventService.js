export default class EventService {
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;
    this.url = 'http://localhost:3000/calendar/';
  }

  getAll() {
    return this.$http.get(`${this.url}events`).then((response) => response.data);
  }

  addEvent(event) {
    this.$http.put(`${this.url}events`, event);
  }
}
