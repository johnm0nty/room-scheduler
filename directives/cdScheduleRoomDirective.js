(function (angular) {

	angular
		.module("base")
		.directive("cdScheduleRoomForm", function () {
			function cdScheduleRoomController(roomsService) {
				var vm = this;

				this.availableRooms = roomsService.availableRooms;

				this.name = null;

				this.email = null;

				this.reasons = ["Team Meeting", "Client Meeting", "Birthday", "Interview", "Miscellaneous"];

				this.selectedReason = null;

				this.setSelectedRoomSchedule = function () {
					if(vm.name && vm.selectedReason)
						roomsService.setSelectedRoomSchedule(vm.reservationId, vm.name, vm.email, vm.selectedReason);
					else
						alert("Error, please check your reservation form");
				};

				this.deleteSelectedRoomSchedule = function () {
					roomsService.deleteSelectedRoomSchedule(vm.reservationId);
				};

				this.roomactionlinks = [
					{
						"action": vm.setSelectedRoomSchedule,
						"icon": "add to calendar icon",
						"name": "Reserve a Time in " + roomsService.fetchSelectedRoom().name
					},
					{
						"action": vm.deleteSelectedRoomSchedule,
						"icon": "delete calendar icon",
						"name": "Withdraw Time in " + roomsService.fetchSelectedRoom().name
					}
				];
			};

			return {
				templateUrl: "partials/scheduleform.html",
				controller: cdScheduleRoomController,
				controllerAs: "scheduleCtrl",
				bindToController: {
					reservationId: "@"
				}
			}
		});

} (window.angular))
