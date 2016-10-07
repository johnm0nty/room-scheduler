(function(angular){
  angular.module('base').controller('roomController',function($stateParams,$location,roomsService){
    this.roomid = $stateParams.id;
    this.name = 'John Montgomery';
  });
}(window.angular));
