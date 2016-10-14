(function(angular){
  angular
    .module('base')
    .factory('roomsService',function($http){
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

      // var availableRooms = [];
      // $http.get('php/getrooms.php')
      //   .then(
      //     function(response){
      //       console.log(availableRooms);
      //       availableRooms = response.data.records;
      //       availableRooms.forEach((room) => {
      //         room.active = false;
      //       });
      //       console.log(availableRooms);
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
      //     });

      function initRoomDaySchedule() {
				availableRooms.forEach((room) => {
					room.reservations = [];

					for (var i = 0; i < 10; i++) {
						var beginningOClock, endOClock;

						beginningOClock = i + 7;
						endOClock = beginningOClock + 1;

						if (beginningOClock == 12) {
							endOClock = 1;
						}

						if (beginningOClock > 12) {
							beginningOClock = i - 5;
							endOClock = beginningOClock + 1;
						}

						room.reservations.push({
							"id": i,
							"startHour": beginningOClock,
							"endHour": endOClock,
							"reserveeName": null,
              "reserveeEmail":null,
							"reservationDescription": null,
							"isReserved": false,
							"setReservation": function(name, email, desc) {
								this.reserveeName = name;
                this.reserveeEmail = email;
								this.reservationDescription = desc;
								this.isReserved = true;
							},
							"deleteReservation": function() {
								this.reserveeName = null;
                this.reserveeEmail = null;
								this.reservationDescription = null;
								this.isReserved = false;
							}
						});
					}
				});
			};

			function setSelectedRoomSchedule(reservationid, name, email, description) {
				fetchSelectedRoom().reservations[reservationid].setReservation(name, email, description);
			};

			function deleteSelectedRoomSchedule(reservationid) {
				fetchSelectedRoom().reservations[reservationid].deleteReservation();
			};

			function setSelectedRoom(id) {
				availableRooms.forEach((room) => {
					if (room.id == id)
						room.active = true;
					else
						room.active = false;
				});

				return fetchSelectedRoom();
			};

			function fetchSelectedRoom() {
				let activeRoom = null;

				availableRooms.forEach((room) => {
					if (activeRoom === null && room.active) {
						activeRoom = room;
						return;
					}
				});

				return activeRoom;
			};

			function fetchRoomByID(id) {
				let activeRoom = null;

				availableRooms.forEach((room) => {
					if (activeRoom === null && id == room.id) {
						activeRoom = room;
						return;
					}
				});

				return activeRoom;
			};

			// init the rooms' schedules by building onto our room objects in our room array
			initRoomDaySchedule();

			return {
				"availableRooms": availableRooms,
				"setSelectedRoom": setSelectedRoom,
				"fetchRoomByID": fetchRoomByID,
				"fetchSelectedRoom": fetchSelectedRoom,
				"setSelectedRoomSchedule": setSelectedRoomSchedule,
				"deleteSelectedRoomSchedule": deleteSelectedRoomSchedule
			};
    });
}(window.angular))
