function signUpCtrl($scope,WelcomeData) {
    
    
    $scope.SignUp = WelcomeData ; 
    
    
    
}

app.controller("signUpCtrl", ["$scope","WelcomeData", signUpCtrl]);