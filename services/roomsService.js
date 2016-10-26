(function(angular){
  angular
    .module('base')
    .factory('roomsService',function($http, $rootScope, APIAddress){
      var availableRooms = null;

      function getAvailableRooms(){
        // return $http.get(APIAddress + '/rooms.json');

        return new Promise(function(resolve){
          $http.get(APIAddress + '/rooms.json')
              .then(function(results){
                availableRooms = results.data;
                resolve(results);
              });
        });
      }

      function setSelectedRoomSchedule(reservationid, name, email, description) {
          fetchSelectedRoom().reservations[reservationid].setReservation(name, email, description);
      };

      function deleteSelectedRoomSchedule(reservationid) {
          fetchSelectedRoom().reservations[reservationid].deleteReservation();
      };

      function isSelectedRoomScheduledAtThisBlock(reservationid) {
          var checkingRoomReservation = fetchSelectedRoom().reservations[reservationid];
          return checkingRoomReservation && checkingRoomReservation.isReserved;
      };

      function setSelectedRoom(id) {
          if(!availableRooms) throw new Error("Rooms not available yet - setSelectedRoom");
          selectedRoom = availableRooms[id];
          return selectedRoom;
      };

      function fetchSelectedRoom() {
          if(!availableRooms) throw new Error("Rooms not available yet - fetchSelectedRoom");
          return selectedRoom;
      };

      function fetchRoomByID(id) {
          if(!availableRooms) throw new Error("Rooms not available yet - fetchRoomByID");
          return availableRooms[id];
      };

      var availableRooms = null;
      var selectedRoom = null;

			return {
        'availableRooms':availableRooms,
				"getAvailableRooms": getAvailableRooms,
				"setSelectedRoom": setSelectedRoom,
				"fetchRoomByID": fetchRoomByID,
				"fetchSelectedRoom": fetchSelectedRoom,
        "isSelectedRoomScheduledAtThisBlock": isSelectedRoomScheduledAtThisBlock,
				"setSelectedRoomSchedule": setSelectedRoomSchedule,
				"deleteSelectedRoomSchedule": deleteSelectedRoomSchedule
			};
    });
}(window.angular))
