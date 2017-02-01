(function() {
    'use strict';

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
            classifiedsFactory.getClassifieds().then(function(classifieds) {
                $scope.classifieds = classifieds.data;
            });

            var contact = {
              name: "MiKe LeE",
              phone: "(444)-333333",
              email: "mikelee@gmail.com"
            }

            $scope.openSidebar = function () {
                $mdSidenav('left').open();
            }

            $scope.closeSidebar = function () {
                $mdSidenav('left').close();
            }

            $scope.saveClassified = function (x) {
              if (x) {
                x.contact = contact;
              $scope.classifieds.push(x);
              $scope.x = {};
              $scope.closeSidebar();
              showToast("Classified Saved!!!!");

              }

            }
            $scope.editClassified = function (x) {
              $scope.editing = "true";
              $scope.openSidebar();
              $scope.x = x;
            }
            $scope.saveEdit = function () {
                $scope.editing = false;
                $scope.x = {};
                $scope.closeSidebar();
                showToast("Edit Saved!!!!!");
            }
            $scope.deleteClassified = function (event, x) {
              var confirm = $mdDialog.confirm()
              .title('Are your sure you want to delete ' + x.title + '?')
              .ok('Yes')
              .cancel('No')
              .targetEvent(event);

              $mdDialog.show(confirm).then(function() {
                var index = $scope.classifieds.indexOf(x);
                $scope.classifieds.splice(index, 1);
              }, function () {

              });
            }

            function showToast(message) {
              $mdToast.show(
                $mdToast.simple()
                .content(message)
                .position('top, right')
                .hideDelay(3000)
              );
            }

          });
      })();
