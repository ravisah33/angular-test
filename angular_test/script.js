	var crudApp = angular.module('myApp', ['ngRoute']);
	crudApp.config(function($routeProvider) {
	    $routeProvider
	        .when('/', {
	            templateUrl: 'pages/userDetails.html',
	            controller: 'mainController'
	        })
	        .when('/about', {
	            templateUrl: 'pages/about.html',
	            controller: 'aboutController'
	        })
	});

	crudApp.controller('mainController', function($scope) {
	    $scope.empList = [{ "id": "1", "name": "Ram", "designation": "UI Developer", "salary": "1000" }];

	    $scope.empObj = function(itm) {
	        var empObj = {
	            "id": itm.id + 1,
	            "name": itm.name,
	            "designation": itm.designation,
	            "salary": itm.salary
	        }
	        return empObj;
	    }
	    $scope.submitEmpData = function(emp) {
	        $scope.empList.push($scope.empObj(emp));
	    }


	});

	crudApp.controller('aboutController', function($scope) {
	    $scope.message = 'Look! I am an about page.';
	});