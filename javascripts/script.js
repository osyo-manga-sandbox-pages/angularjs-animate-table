var AnimateDemoCtrl = function ($scope) {
	$scope.test = true;

	$scope.months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]
	

	$scope.click = function (){
		$scope.col = []
		for(var i=0 ; i < 10 ; i++){
			if( Math.floor(Math.random() * 10 % 2) == 0){
				$scope.col.push(i + 1 + ". " + $scope.months[i]);
			}
		}
		$scope.row = []
		for(var i=0 ; i < 10 ; i++){
			if( Math.floor(Math.random() * 10 % 2) == 0){
				$scope.row.push(i + 1 + ". " + $scope.months[i]);
			}
		}

		$scope.data = [];
		for(var i in $scope.months){
			$scope.data.push({ "value" : $scope.months[i], "active" : Math.floor(Math.random() * 10 % 2) ==  0 });
		};

		$scope.test = !$scope.test
	}
	$scope.click();

};
