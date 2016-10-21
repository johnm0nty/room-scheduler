(function(angular){
  angular
    .module('base')
    .directive('cdTopMenu',function(){
      function cdTopMenuController($scope,roomsService,userSettingsService){
        var vm = this;
        vm.availabler = null;

        roomsService.getAvailableRooms().then(function(response){
          vm.availabler = response.data;
          // console.log(vm.availabler);
          // $scope.$watch(function() { return vm.availabler }, function() { alert("Watch changed"); vm.availabler = response.data; });
          $scope.$apply();
        });

        this.bookmarks = userSettingsService.bookmarks;
        this.sort = '+name';
        this.setSelectedRoom = function(id){
          roomsService.setSelectedRoom(id);
        };
        this.addToBookmarks = function(id){
          userSettingsService.addToBookmarks(id);
        };
        this.removeFromBookmarks = function(id){
          userSettingsService.removeFromBookmarks(id);
        };
      };
      return {
        // templateUrl:'partials/topmenu.html',
        templateUrl:(function(scope,elem,attrs){
          if(elem.id == 'top-menu'){
            return 'partials/topmenu.html';
          }else{
            return 'partials/miscmenu.html';
          }
        }),
        controller:cdTopMenuController,
        controllerAs:'topMenu',
        bindToController:{
          header:'@',
          xtraLinks:'='
        }
      }
    });
}(window.angular))
