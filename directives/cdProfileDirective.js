(function(angular){
  angular
    .module('base')
    .directive('cdProfile',function(){
      return {
        templateUrl:'partials/profiletemplate.html'
      }
    });
}(window.angular))
