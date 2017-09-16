

function welcome($scope, $http, welcomeData) {
    
    
                                                $scope.WelcomeDataScope = WelcomeData
    
    
    
    
    
    
    
    
    
    
    
    
                                    // $http.get("welcome1.html")
                                    // .then(  
                                    //     //'hello'
                                    //     //   function(response) {
                                    //     //                         $scope.content = response.data;
                                    //     //                         $scope.statuscode = response.status;
                                    //     //                         $scope.statustext = response.statustext; 
                                    //     //                     }
                                    //      // );
                                    //                   function(response){
                                    //                             $scope.content = response.data;
                                    //                             $scope.statuscode = "status code";
                                    //                             $scope.statustext = 'status text'; 
                                    //                             }
                                    //                             );
                                    
    
                                           }


app.controller("welcomCtrl",['$scope','$http','welcomeData', welcome] );