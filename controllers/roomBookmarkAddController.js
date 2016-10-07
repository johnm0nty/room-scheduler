(function(angular){
  angular
    .module('base')
    .controller('roomBookmarkAddController',function($stateParams,$location,userSettingsService){
      userSettingsService.addToBookmarks($stateParams.id).then(
        () => ($location.path('/room/'+$stateParams.id)),
        (error) => {alert(error);}
      );
    });
}(window.angular))
