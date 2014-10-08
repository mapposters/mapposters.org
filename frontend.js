var app = angular.module('mapPostersApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html'
      })
      .when('/map/:id', {
        templateUrl: 'views/map.html'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
;app.controller('HomepageCtrl', ['$scope' ,'MapApi', '$timeout', '$http',
    function ($scope, MapApi, $timeout, $http) {

    // MapApi.getRegions().
    //   success(function(data, status, headers, config) {
    //     console.log('success', data);
    //   }).
    //   error(function(data, status, headers, config) {
    //     console.log('error', data);
    //   });

    //
    $scope.regions = [
      {
        id: 1,
        image : 'http://placehold.it/700x400',
        name: 'Chicago',
        description: 'adjlk jfkl jdfkj dasklf jkladsjf lkasjdf lk'
      },
      {
        id: 2,
        image : 'http://placehold.it/700x400',
        name: 'Toronto',
        description: 'Toronto is the most populous city in Canada and the provincial capital of Ontario. It is located in Southern Ontario on the northwestern shore of Lake Ontario. The history of Toronto began in the late 18th century when the British Crown purchased its land from the Mississaugas of the New Credit. The settlement established there became York, which lieutenant governor John Graves Simcoe designated as the capital of Upper Canada. The city was ransacked in the Battle of York during the War of 1812. In 1834, York became a city and renamed to Toronto. It was damaged in two huge fires in 1849 and 1904. Since 1954, the city occasionally expanded its borders through amalgamation with surrounding municipalities, most recently occurring in 1998.'
      }
    ];

}]);
;app.controller('MapCtrl', function ($scope, $timeout, $http) {

	// //access token
	// L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q';
	// // Create a map in the div #map
	// L.mapbox.map('map', 'examples.ra3sdcxr');

	// MapApi.getMap(id).
	//   success(function(data, status, headers, config) {
	//     console.log('success', data);
	//   }).
	//   error(function(data, status, headers, config) {
	//     console.log('error', data);
	//   });

	$scope.map = {
		id: 2,
		image : 'http://placehold.it/700x400',
		name: 'Toronto',
		description: 'Toronto is the most populous city in Canada and the provincial capital of Ontario. It is located in Southern Ontario on the northwestern shore of Lake Ontario. The history of Toronto began in the late 18th century when the British Crown purchased its land from the Mississaugas of the New Credit. The settlement established there became York, which lieutenant governor John Graves Simcoe designated as the capital of Upper Canada. The city was ransacked in the Battle of York during the War of 1812. In 1834, York became a city and renamed to Toronto. It was damaged in two huge fires in 1849 and 1904. Since 1954, the city occasionally expanded its borders through amalgamation with surrounding municipalities, most recently occurring in 1998.',
		sizes: ['12x12', '120 x 120', '140x140'],
		themes: [
			{
				id: 3,
				image: 'http://placehold.it/500x300'
			},
			{
				id: 4,
				image: 'http://placehold.it/500x300'
			},
			{
				id: 5,
				image: 'http://placehold.it/500x300'
			}
		]
	}

	$scope.size = $scope.map.sizes[0];

});
;app.factory('MapApi', ['$http', function($http) {

  var _url = function() {
    return 'http://107.170.68.187:5000';
  };

  return {
    getRegions: function() {
      var url = _url() +'/regions';
      return $http.get(url);
    },
    getMap: function(id){
      var url = _url() + '/map/' + id;
      return $http.get(url);
    }
  };
}]);
