(function(angular){
  function componentController(){
    this.welcome = "Hello";
    this.totalstars = null;
    this.maxstars = [];
    for(i=1;i<=10;i++){
      this.maxstars.push(new Array(i));
    }
    this.totalstarswithstuff = [{name:'Bob'},{name:'Ted'},{name:'Zim'},{name:'Dib'},{name:'Gir'}]
  }

  angular
    .module('base')
    .component('cdRoomRatingComponent',{
      transclude:true,
      templateUrl:'components/rating/cdRoomRating.component.html',
      controller:componentController,
      controllerAs:'model',
      bindings:{
        ratingUpdated:'&'
      }
    });
})(window.angular)
