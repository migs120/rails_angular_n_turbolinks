function userEditCtrl($scope,LoggedInData,Data) {
    
    
    $scope.UserEdit = LoggedInData ; 
    
    
    
}

app.controller("userEditCtrl", ["$scope","LoggedInData", userEditCtrl]);