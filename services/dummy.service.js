
(function(window, angular, undefined) {'use strict';

  console.log('application is coming into dummy service')
  angular.module('quicky',['ng']).service('dummyService', ['$q', function($q){
    this.dummyName = function(){
      return 'My Name is Dummy'
    }
  }])


})(window, window.angular);
