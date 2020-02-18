angular.module('listApp', [])
    .controller('ListController', ['$http', function ($http) {
        $http.get("https://www.eventbriteapi.com/v3/events/search/?token=TGVXN7NNWXRG4OWL2J&location.address=london+uk")
        .then(function(data) {
            console.log(data);
        })
    }])