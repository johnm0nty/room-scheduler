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
    var bookmarkAdd = {
      name:'bookmarkAdd',
      url:'/room/:id/bookmarkadd',
      controller:'roomBookmarkAddController',
      controllerAs:'roomBookmarkAddCtrl'
    }
    var bookmarkDel = {
      name:'bookmarkDel',
      url:'/room/:id/bookmarkdel',
      controller:'roomBookmarkDelController',
      controllerAs:'roomBookmarkDelCtrl',
      template:' '
    }

    $stateProvider.state(baseState);
    $stateProvider.state(aboutState);
    $stateProvider.state(roomState);
    $stateProvider.state(bookmarkAdd);
    $stateProvider.state(bookmarkDel);
  });
})(window.angular);
