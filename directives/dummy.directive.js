
(function(window, angular, undefined) {'use strict';


  angular.module('quicky',['ng']).directive('dummyDirective', ['dummyService', function(dummyService){
    // Runs during compile
    return {
      // name: 'dummyService',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      template: '{{hello}}- {{dummy}}',
      // templateUrl: '',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) {
        
      },
      controller:function($scope){
        $scope.hello = 'Hello World'
        $scope.dummy = dummyService.dummyName()
      }
    };
  }]);


})(window, window.angular);
