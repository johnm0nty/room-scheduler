(function(angular){
  angular
    .module('base')
    .factory('roomsService',function(){
      var availableRooms = [{
        "id": 1,
        "name": "Sim City",
        "active": false
      },
      {
        "id": 2,
        "name": "Zelda",
        "active": false
      },
      {
        "id": 3,
        "name": "Sonic",
        "active": false
      },
      {
        "id": 4,
        "name": "Halo",
        "active": false
      }];
      function setSelectedRoom(id){
        availableRooms.forEach((room) => {
          if(room.id === id){
            room.active = true;
          }else{
            room.active = false;
          }
        });
      }
      function fetchSelectedRoom(){
        var activeRoom = null;
        availableRooms.forEach((room) => {
          if(room.active && activeRoom === null){
            active.Room = room;
            return;
          }
        });
        return activeRoom;
      }
      return {
        'availableRooms':availableRooms,
        'setSelectedRoom':setSelectedRoom,
        'fetchSelectedRoom':fetchSelectedRoom
      };
    });
}(window.angular))
