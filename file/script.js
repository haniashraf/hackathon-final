var goalbar = angular.module('goalbar', []);
var time_input = goalbar.controller('GoalBarController', function($scope) {
	time_input = Math.round((18 / 60) * 100);
	$scope.current = time_input;
	$scope.goal = 100;

	$scope.infoAbove = false;

	var calculateBarPercent = function() {
		var percent = ($scope.current / $scope.goal) * 100;

		if (percent > 100) {
			percent = 100;
		}
		if (percent < 15) {
			$scope.infoAbove = true;
		}

		return percent;
	};

	$scope.$watch('current', function() {
		$scope.barPercent = 100 - calculateBarPercent();
		$scope.barStyle = 'transform: translateY(' + $scope.barPercent + '%)';
	});
});
var txt;
var x;
function preload() {
	txt = loadStrings('data.txt');
}

function setup() {
	noCanvas();
	x = txt.toString();
	x = x.split(' ');
	y = x[0];
	y = Math.round((y / 60) * 100);
	console.log(y);
}
console.log(y);
