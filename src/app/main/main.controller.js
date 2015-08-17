(function() {
	'use strict';

	angular
	.module('xoomadmin')
	.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope,$state) {


		// Login admin portal
		$scope.adminLogin = function(invalid){
			if(invalid){
				alert('Please fill all mandatory fields');
				return;
			}
			if($scope.username=='xoomadmin' && $scope.password=='x00m@dmin'){
				$state.go('manageaccounts');
			}
		}
	}

})();
