(function(angular){
  angular
    .module('base')
    .factory('userSettingsService',function(roomsService){
      var bookmarks = [];

      function getBookmarks(){
        return bookmarks;
      }

      function isRoomInBookmarks(id){
        var isInBookmarks = false;
        bookmarks.forEach(function(link){
          if(link.id == id){
            isInBookmarks = true;
          }
        });
        return isInBookmarks;
      }

      function addToBookmarks(id){
        var availableRooms = roomsService.availableRooms();
        availableRooms.forEach((room) => {
          if (room.id == id && bookmarks.indexOf(room) == -1){
            bookmarks.push(room);
          }
        });
      }

      function removeFromBookmarks(id){
        var availableRooms = roomsService.availableRooms();
        availableRooms.forEach((room) => {
          var index = bookmarks.indexOf(room);
          if (room.id == id && index != -1){
            bookmarks.splice(index,1);
          }
        });
      }
      function test(){
        alert('test')
      }

      return {
        'getBookmarks':getBookmarks,
        'bookmarks':bookmarks,
        'addToBookmarks':addToBookmarks,
        'removeFromBookmarks':removeFromBookmarks,
        'isRoomInBookmarks':isRoomInBookmarks,
        'isRoomInBookmarks':isRoomInBookmarks,
        'test':test
      };
    });
}(window.angular));
