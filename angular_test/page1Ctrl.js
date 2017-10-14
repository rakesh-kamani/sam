myApp.controller("page1Ctrl", function($scope, $http, $state, $rootScope) {
    
    $http.get('https://swapi.co/api/films').then(function(data){
        console.log('data : ', data);
        $scope.movies = data.data.results;
    },function(error){
        console.log('error : ', error);
        $scope.movies = error;
    });

    $scope.selectMovie = function (movie) {
        $state.go('page2');
        $rootScope.selectedmovie = movie;
    }
    
});
