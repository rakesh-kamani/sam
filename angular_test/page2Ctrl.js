myApp.controller("page2Ctrl", function($scope, $http, $state, $rootScope) {
    $scope.movie = $rootScope.selectedmovie;
    $scope.characterNames = [];

    for(var i=0; i<=$scope.movie.characters.length; i++) {
        $http.get(''+$scope.movie.characters[i]).then(function(data){
            console.log('data : ', data);
            $scope.characterNames.push(data.data.name);
        },function(error){
            console.log('error : ', error);
        });
    }

    $scope.back = function () {
        $state.go('page1');
    }
    
});
