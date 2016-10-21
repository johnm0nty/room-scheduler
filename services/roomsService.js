(function(angular){
  angular
    .module('base')
    .factory('roomsService',function($http, $rootScope, APIAddress){
      var availableRooms = null;
      // $http.get('php/getrooms.php')
      //   .then(
      //     function(response){
      //       availableRooms = response.data.records;
      //       $rootScope.$broadcast("roomsDownloaded", availableRooms);
      //       initRoomDaySchedule();
      //     },
      //     function(response){
      //       availableRooms = [{
      //         "id": 1,
      //         "name": "Sim City",
      //         "active": false
      //       },
      //       {
      //         "id": 2,
      //         "name": "Zelda",
      //         "active": false
      //       },
      //       {
      //         "id": 3,
      //         "name": "Sonic",
      //         "active": false
      //       },
      //       {
      //         "id": 4,
      //         "name": "Halo",
      //         "active": false
      //       }];
      //       alert('Unable to retrieve data from the database. The default values will be used instead.  Error: '+response.statusText);
      //       console.log(response);
      //       $rootScope.$broadcast("roomsDownloaded", availableRooms);
      //       initRoomDaySchedule();
      //     });
      //
      // function initRoomDaySchedule() {
			// 	availableRooms.forEach((room) => {
			// 		room.reservations = [];
      //
			// 		for (var i = 0; i < 10; i++) {
			// 			var beginningOClock, endOClock;
      //
			// 			beginningOClock = i + 7;
			// 			endOClock = beginningOClock + 1;
      //
			// 			if (beginningOClock == 12) {
			// 				endOClock = 1;
			// 			}
      //
			// 			if (beginningOClock > 12) {
			// 				beginningOClock = i - 5;
			// 				endOClock = beginningOClock + 1;
			// 			}
      //
			// 			room.reservations.push({
			// 				"id": i,
			// 				"startHour": beginningOClock,
			// 				"endHour": endOClock,
			// 				"reserveeName": null,
      //         "reserveeEmail":null,
			// 				"reservationDescription": null,
			// 				"isReserved": false,
			// 				"setReservation": function(name, email, desc) {
			// 					this.reserveeName = name;
      //           this.reserveeEmail = email;
			// 					this.reservationDescription = desc;
			// 					this.isReserved = true;
			// 				},
			// 				"deleteReservation": function() {
			// 					this.reserveeName = null;
      //           this.reserveeEmail = null;
			// 					this.reservationDescription = null;
			// 					this.isReserved = false;
			// 				}
			// 			});
			// 		}
			// 	});
			// };

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
