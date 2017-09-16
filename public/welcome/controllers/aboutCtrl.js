function aboutCtrl($scope,WelcomeData) { 
    
    
    $scope.aboutTemplate = WelcomeData ;

    
    
}

app.controller("aboutCtrl", ["$scope","WelcomeData", aboutCtrl]);