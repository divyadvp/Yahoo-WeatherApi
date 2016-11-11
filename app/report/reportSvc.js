(function(){
    function reportSvcFn($q,$http){
        this.getWeatherFromApi=function(cityName,stateName){
        var dfd=$q.defer();
            var urldata='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ cityName +'%2C%20' + stateName + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
            $http.get(urldata)
        /*$http.get("'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ cityName +'%2C%20' + stateName + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'")
       
        */
        .then(function(response){
            dfd.resolve(response);
        })
            .catch(function(error){
                dfd.reject(error);
            });
        
        return dfd.promise;
        }
        
    }
    
    angular.module("header").service("reportSvc",["$q","$http",reportSvcFn]);
})();