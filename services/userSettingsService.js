(function(angular){
  angular
    .module('base')
    .factory('userSettingsService',function(roomsService){
      var bookmarks = [];
      function addToBookmarks(id){
        var availableRooms = roomsService.availableRooms;
        availableRooms.forEach((room) => {
          if (room.id == id && bookmarks.indexOf(room) == -1){
            bookmarks.push(room);
          }
        });
      }
      return {
        'bookmarks':bookmarks,
        'addToBookmarks':addToBookmarks
      };
    });
}(window.angular));
