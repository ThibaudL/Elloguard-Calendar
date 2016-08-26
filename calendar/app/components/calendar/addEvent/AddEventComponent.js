import AddEventTemplate from './add-event-template.html';
import AddEventController from './AddEventController';

export default {
  template: AddEventTemplate,
  controller: AddEventController,
  bindings: {
    events: '=',
  },
};
