export function routing($stateProvider, $locationProvider) {
  $stateProvider
  .state('calendar', {
    url: '/',
    template: '<calendar></calendar>',
  });
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}

routing.$inject = ['$stateProvider', '$locationProvider'];

export function statechange($rootScope, $log) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    $log.debug(`Error while routing: ${error}`);
  });
}

statechange.$inject = ['$rootScope', '$log'];
