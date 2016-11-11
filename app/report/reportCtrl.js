(function(){
    function reportFn($scope,reportSvc){
        $scope.cityName="";
        $scope.stateName="";
        $scope.searchData=function(){
       reportSvc.getWeatherFromApi($scope.cityName,$scope.
                                   stateName)
        
        .then(function(response){
            console.log(response);
            $scope.data=response;
           /*.data.query.results.channel*/
        })
        .catch(function(error){
            console.log("URL Incorrect May be");
        });
        }
        
    }
    
    angular.module("header").controller("reportCtrl",["$scope","reportSvc",reportFn]);
})();