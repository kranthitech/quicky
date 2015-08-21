
(function(window, angular, undefined) {'use strict';


  angular.module('quicky').service('dummyService', ['$q', function($q){
    this.dummyName = function(){
      return 'My Name is Dummy'
    }
  }])


})(window, window.angular);
