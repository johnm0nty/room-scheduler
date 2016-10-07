(function(angular){
  angular.module('base',['ui.router']).config(function($stateProvider){
    var baseState = {
      name:'base',
      url:'',
      templateUrl:'partials/base.html'
    }
    var aboutState = {
      name:'about',
      url:'/about',
      templateUrl:'partials/about.html'
    }
    var roomState = {
      name:'room',
      url:'/room/:id',
      templateUrl:'partials/room.html',
      controller:'roomController',
      controllerAs:'roomCtrl'
    }

    $stateProvider.state(baseState);
    $stateProvider.state(aboutState);
    $stateProvider.state(roomState);
  });
})(window.angular);
