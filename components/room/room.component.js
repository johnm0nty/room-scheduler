function componentController($stateParams,$location,roomsService,userSettingsService){
  this.roomid = $stateParams.id;
  this.name = 'John Montgomery';
  roomsService.setSelectedRoom($stateParams.id);
  this.selectedRoom = roomsService.fetchSelectedRoom();

  this.favactionlinks = [
    {
      'url':'room'+this.id+'/bookmarkadd',
      'icon':'bookmark icon',
      'name':'Bookmark this Room',
      'disabled':userSettingsService.isRoomInBookmarks(this.id)
    },
    {
      'url':'room'+this.id+'/bookmarkdel',
      'icon':'remove bookmark icon',
      'name':'Remove this Bookmark',
      'disabled':!userSettingsService.isRoomInBookmarks(this.id)
    }
  ];
}

angular
  .module('base')
  .component('roomComponent',{
    templateUrl:'components/room/room.component.html',
    controller:['$stateParams','$location','roomsService','userSettingsService',componentController],
    controllerAs:'model'
  });
