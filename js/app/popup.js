myApp.controller("PageController", function ($scope, $http) {


    $http.get('http://www.saveme.ie/api/savings').success(function (data) {
        $scope.savings = data;

        for (i = 0; i < $scope.savings.length; i++) {
            if ($scope.savings[i].title.length > 32) {
                $scope.savings[i].title = $scope.savings[i].title.slice(0,32);
            }

            $scope.savings[i].title = $scope.savings[i].title.toUpperCase();
        }

    });

});



