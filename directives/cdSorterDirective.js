(function(angular){
  angular
    .module('base')
    .directive('cdSorter',function(){
      return {
        templateUrl:'partials/sorter.html'
      };
    });
}(window.angular))
