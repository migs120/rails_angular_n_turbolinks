    function WelcomeData($rootScope, $http, $sce) {
        
        var WelcomeData = {}
 
         $http.get("users/sign_in")
                                    .then(  
                                       
                                          function(response){
                                                             WelcomeData.responseLogin = $sce.trustAsHtml(
                                                                 
                                                                                                                 response.data.slice(response.data.indexOf('<body')+6,response.data.indexOf('<script src="f')-9).search("ng-app") > 1  
                                                                                                              ?  '<h1>Hay YOU are Logged in Already<h1>' 
                                                                                                              :  response.data.slice(response.data.indexOf('<body')+6 ,response.data.indexOf('<script src="f')-9 )  
                                                                                                          
                                                                                                          )
                                                                                                                                                                      
                                                            
                                                  
                                                            }
                                         );
                                         
         $http.get("users/sign_up")
                                    .then(  
                                       
                                          function(response){
                                                             WelcomeData.responseSignUp = $sce.trustAsHtml(response.data.slice(
                                                                                                                                response.data.indexOf('<body')+6
                                                                                                                                ,response.data.indexOf('<script src="f')-9
                                                                                                                                )
                                                                                                            )
                                                            
                                                  
                                                            }
                                         );
                                         
         $http.get("/users/password/new")
                                    .then(  
                                       
                                          function(response){
                                                             WelcomeData.responseForgotPass = $sce.trustAsHtml(response.data.slice(
                                                                                                                                response.data.indexOf('<body')+6
                                                                                                                                ,response.data.indexOf('<script src="f')-9
                                                                                                                                )
                                                                                                            )
                                                            
                                                  
                                                            }
                                         );                                         
                                         
                                         
                                         
        
         $http.get("welcome1")
                               .then(  
                                       
                                      function(response){
                                                         WelcomeData.response = $sce.trustAsHtml(response.data.slice(
                                                                                                                            response.data.indexOf('<body')+6
                                                                                                                            ,response.data.indexOf('<script src="f')-9
                                                                                                                            )
                                                                                                        )
                                                        
                                              
                                                        }
                                    );
                                         
         $http.get("about")
                            .then(  
                                       
                                  function(response){
                                                     WelcomeData.responseAbout = $sce.trustAsHtml(response.data.slice(
                                                                                                                        response.data.indexOf('<body')+6
                                                                                                                        ,response.data.indexOf('<script src="f')-9
                                                                                                                        )
                                                                                                    )
                                                    
                                          
                                                    }
                                 );      


         
                                         
                                         
     
                  
          return WelcomeData;
     }
 
     
         app.factory('WelcomeData', ['$rootScope','$http','$sce', WelcomeData]);