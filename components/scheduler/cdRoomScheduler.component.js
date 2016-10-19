(function(angular){
  function componentController(roomsService,$scope){
    this.$onInit = function(){
      this.selectedRoom = roomsService.fetchSelectedRoom();
      this.availableRooms = roomsService.availableRooms;
      this.name = null;
      this.email = null;
      this.reasons = ["Team Meeting", "Client Meeting", "Birthday", "Interview", "Miscellaneous"];
      this.selectedReason = null;
    };
    this.$onDestroy = function(){
      console.log('Component destroy');
    };
    this.setSelectedRoomSchedule = function(id) {
      if(this.name && this.selectedReason)
        roomsService.setSelectedRoomSchedule(id,this.name,this.email,this.selectedReason);
      else
        alert("Error, please check your reservation form");
    };

    this.deleteSelectedRoomSchedule = function(id) {
      roomsService.deleteSelectedRoomSchedule(id);
    };
  };

  angular
    .module('base')
    .component('cdScheduleComponent',{
      templateUrl:'components/scheduler/cdRoomScheduler.component.html',
      controller:['roomsService','$scope',componentController],
      controllerAs:'model'
    });
}(window.angular))
