
	var app = angular.module('weatherApp', [])
		 .controller('weatherCtrl', function($scope,$http){
			var suffix = "&units=imperial&appid=44db6a862fba0b067b1930da0d769e98";
			var prefix = "http://api.openweathermap.org/data/2.5/"	
			var that = $scope;	
			var date =  new Date();
			$scope.time = date.getFullYear() + '-' +date.getMonth()+'-'+date.getDate();

		 	$scope.types = ['city name', 'zip code', 'GPS'];
		 	$scope.selectType = 'city name';
			$scope.instruct = function(){
				if($scope.selectType=='city name') return 'e.g \'London\' or \'Longdon,UK\'';
				if($scope.selectType=='zip code') return  'e.g 07029';
				if($scope.selectType=='GPS') return  'e.g 120,77';
			}
		
			
		
			/*
				Get Url according to the type selected in types
				zip || gps|| name

				http.get(today)&& http.get(forecast)
			*/
		
		 	$scope.getUrl = function(){		 		
		 		switch (that.selectType){
		 			case that.types[0]:
			 			that.url  = prefix + 'weather?q='+$scope.location+suffix;
			 			that.forecastUrl = prefix + 'forecast?q='+$scope.location+suffix
			 			break;
		 			case that.types[1]:
			 			that.url  = prefix + "weather?zip="+$scope.location+suffix;
			 			that.forecastUrl = prefix + "forecast?zip="+$scope.location+suffix;
			 			break;
			 		case that.types[2]:
			 			var coord = that.location.split(",");
			 			that.url  = prefix + "weather?lat="+coord[0]+"&lon="+coord[1]+suffix;
			 			that.forecastUrl  = prefix + "forecast?lat="+coord[0]+"&lon="+coord[1]+suffix;			 		
			 			break;
		 		}
		 	};


		 	/*
		 		Keypress Enter event for the search bar
		 		Generate urls and http.get()

		 	*/
		 	$scope.query = function(){			 			 	
		 			$scope.getUrl();
				 	$http.get($scope.url).then(function(resp){
				 		$scope.data = resp.data;
				 		$http.get($scope.forecastUrl).then(function(resp){
					 		$scope.forecast = resp.data;
						 	}, function(err){
						 		$scope.forecast = 'try again';
						 	});

				 	}, function(err){
				 		$scope.data = 'try again!';
				 	});	 	
		 	};

		 	/*initialize with current location	
		 	*/
		 	$scope.location = 'Harrison,us';
		 	$scope.query();
		 
		});
	
