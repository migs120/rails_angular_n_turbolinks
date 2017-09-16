


    
function londontion($scope,$sce,WelcomeData){
                            
                            //$scope.welcomeDataS = welcomeData.response;
                            // console.log($sce)
                            //$scope.welcomeDatas = $sce.trustAsHtml(WelcomeData) ; 
                           $scope.welcomeDatas = WelcomeData ; 
                            //function aba(){$scope.welcomeDatas.template()}
                         
                            $scope.hay = 'what up scope';
                            
                           // console.log(WelcomeData.template())
                            
                            }

app.controller("londonCtrl",['$scope','$sce','WelcomeData',londontion]);
    
    
