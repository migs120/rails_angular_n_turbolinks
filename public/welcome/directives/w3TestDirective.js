
function w3TestDirective(WelcomeData) { 
  
                    
                                        return {
                                                 template : "<h1>Made by a directive!</h1>",
                                                // template: WDr,
                                                replace: true,
                                                restrict: 'E'
                                                };
                                        }
app.directive("w3TestDirective",['WelcomeData',w3TestDirective] );