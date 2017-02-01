(function () {
      'use strict';

      angular
            .module("ngClassifieds")
            .factory("classifiedsFactory", function functionName($http) {
                function getClassifieds() {
                    return $http.get('/data/classifieds.json');
                }

                return{
                  getClassifieds: getClassifieds
                }

            });
})();
