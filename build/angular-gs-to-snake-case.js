// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/comment-page-1/

(function(window, angular, undefined) {'use strict';

angular.module('gs.to-snake-case', [])
.service('toSnakeCase', function () {
  return function (str) {
    if (!angular.isDefined(str)) {
      return str;
    }
    var newStr = str[0].toLowerCase() + str.slice(1);
    return newStr.replace(/([A-Z])/g, function($1){return '_'+$1.toLowerCase();});
  };
});

})(window, window.angular);
