(function(angular){
  function componentController(roomsService,$scope,$http,APIAddress){
    vm = this;
    this.$onInit = function(){
      this.selectedRoom = roomsService.fetchSelectedRoom();
      this.consoleLog = function(){console.log('test')};
      this.availableRooms = roomsService.availableRooms;
      this.name = null;
      this.email = null;
      this.reasons = ["Team Meeting", "Client Meeting", "Birthday", "Interview", "Miscellaneous"];
      this.selectedReason = null;
      this.getIsRoomSlotReserved = function(){
        return roomsService.isSelectedRoomScheduledAtThisBlock(reservationid);
      };
      attachFunctionToReservationSlot();
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
    this.resetRoomScheduleData = function(){
      if(!vm.selectedRoom.reservations) vm.selectedRoom.reservations = [];
      for(var i = 0;i < 10;i++){
        var beginningOClock,endOClock;
        beginningOClock = i+7;
        endOClock = beginningOClock+1;
        if(beginningOClock == 12) {
          endOClock = 1;
        }
        if(beginningOClock > 12){
          beginningOClock = i-5;
          endOClock = beginningOClock+1;
        }
        vm.selectedRoom.reservations[i] = {
          'id':1,
          'startHour':beginningOClock,
          'endHour':endOClock,
          'reserveeName':null,
          'reserveeEmail':null,
          'reservationDescription':null,
          'isReserved':false
        }
      }
      $http.put(APIAddress+'/rooms/'+vm.selectedRoom.id+'.json',vm.selectedRoom)
        .then(function(){
          console.log(vm.selectedRoom,'HTTP PUT for basic room reset');
        });
      attachFunctionToReservationSlot();
    };
    function makeURL(id){
      return APIAddress + '/rooms/'+vm.selectedRoom.id+'/reservations/'+id+'.json';
    }
    function attachFunctionToReservationSlot(){
      // console.log('BEFORE',angular.copy(vm.selectedRoom));
      for(var i=0;i<10;i++){
        vm.selectedRoom.reservations[i].setReservation = function(){
          this.reserveeName = vm.name;
          this.reserveeEmail = vm.email;
          this.reservationDescription = vm.selectedReason;
          this.isReserved = true;

          var url = makeURL(this.id);
          $http.put(url,this).then(console.log(url,this));
        }
        vm.selectedRoom.reservations[i].deleteReservation = function(){
          var url = makeURL(this.id);
          this.reserveeName = null;
          this.reserveeEmail = null;
          this.reservationDescription = null;
          this.isReserved = false;
          $http.put(url,this);
        }
      }
      // console.log('AFTER',vm.selectedRoom);
    }
  };

  angular
    .module('base')
    .component('cdScheduleComponent',{
      templateUrl:'components/scheduler/cdRoomScheduler.component.html',
      controller:['roomsService','$scope','$http','APIAddress',componentController],
      controllerAs:'model'
    });
}(window.angular))
