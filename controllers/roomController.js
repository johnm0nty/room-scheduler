(function(angular){
  angular.module('base').controller('roomController',function($stateParams,$location,roomsService,userSettingsService){
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
  });
}(window.angular));
