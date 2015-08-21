
(function(window, angular, undefined) {'use strict';

  console.log('application is coming into dummy service')
  angular.module('quicky',['ng']).service('dummyService', ['$q', function($q){
    
    console.log('application is coming into dummy service')
    this.dummyName = function(){
      console.log('Inside dummy name function')
      return 'My Name is Dummy'
    }
  }])


})(window, window.angular);
