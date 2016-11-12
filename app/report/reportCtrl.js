(function(){
    function reportFn($scope,reportSvc){
        $scope.cityName="";
        $scope.stateName="";
        $scope.Visible = false;
        $scope.searchData=function(){
       reportSvc.getWeatherFromApi($scope.cityName,$scope.
                                   stateName)
        
        .then(function(response){
            console.log(response);
            $scope.data=response.data.query.results.channel;
           $scope.Visible = true;
        
        })
        .catch(function(error){
            console.log("URL Incorrect May be");
        });
        }
        
    }
    
    angular.module("header").controller("reportCtrl",["$scope","reportSvc",reportFn]);
})();