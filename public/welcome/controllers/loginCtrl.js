function loginCtrl($scope,WelcomeData) { 
    
    
    $scope.loginTemplate = WelcomeData ;
    $scope.hay = "what up scope" ;
    
    
}

app.controller("loginCtrl", ["$scope","WelcomeData", loginCtrl]);