function componentController($stateParams,$location,roomsService,userSettingsService){
  this.roomid = $stateParams.id;
  function setUpRoomComponent(){
    this.name = 'John Montgomery';
    roomsService.setSelectedRoom($stateParams.id);

    this.roomRating = function(rating){
      console.log(rating.length);
    }

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
  try{
    // console.log('test');
    this.selectedRoom = roomsService.fetchSelectedRoom();
    // console.log(this.selectedRoom);
    setUpRoomComponent();
  }
  catch(error){
    // console.log(error);
    roomsService.getAvailableRooms().then(function(response){
      // console.log(response);
      this.selectedRoom = roomsService.fetchSelectedRoom();
      setUpRoomComponent();
    })
  }
}

angular
  .module('base')
  .component('roomComponent',{
    templateUrl:'components/room/room.component.html',
    controller:['$stateParams','$location','roomsService','userSettingsService',componentController],
    controllerAs:'model'
  });
