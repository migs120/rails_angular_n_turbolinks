    function LoggedInData($rootScope, $http, $sce) {
        
        var LoggedInData = {}
 
    


         $http.get("users/edit")
                            .then(  
                                       
                                  function(response){
                                                     LoggedInData.responseUserEdit = $sce.trustAsHtml(response.data.slice(
                                                                                                                        response.data.indexOf('<body')+6
                                                                                                                        ,response.data.indexOf('<script src="f')-9
                                                                                                                        )
                                                                                                    )
                                                    
                                          
                                                    }
                                 );  
                                         
                                         
     
                  
          return LoggedInData;
     }
 
     
         app.factory('LoggedInData', ['$rootScope','$http','$sce', LoggedInData]);