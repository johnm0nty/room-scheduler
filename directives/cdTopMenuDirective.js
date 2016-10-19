(function(angular){
  angular
    .module('base')
    .directive('cdTopMenu',function(){
      function cdTopMenuController($scope,roomsService,userSettingsService){
        var vm = this;
        $scope.$on("roomsDownloaded", function(event, data) {
          vm.availableRooms = data;
        });
        this.availableRooms = roomsService.availableRooms();
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
