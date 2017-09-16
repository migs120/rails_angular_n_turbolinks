angular.module("myapp").config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "welcome/views/main.htm",
        controller : "LandingCtrl"
    })
    
     .when("/userSignUp", {
        templateUrl : "welcome/views/signup.htm",
        controller : "signUpCtrl"
    })    
    
    .when("/sign_in", {
        templateUrl : "welcome/views/login.htm",
        controller : "loginCtrl"
    })
    
    .when("/forgotPass", {
        templateUrl : "welcome/views/forgotPass.htm",
        controller : "forgotPassCtrl"
    })    
    
    .when("/userEdit", {
        templateUrl : "welcome/views/userEdit.htm",
        controller : "userEditCtrl"
    })  
    
    
    .when("/about", {
        templateUrl : "welcome/views/about.htm",
        controller : "aboutCtrl"
    })    
    
    
    .when("/london", {
        templateUrl : "welcome/views/london.htm",
        controller : "londonCtrl"
    })
    
    
    .when("/welcome", {
        templateUrl : "welcome/views/welcome.htm",
        controller : "welcomCtrl"
    }) 
    
    
    
    .when("/paris", {
        templateUrl : "welcome/views/paris.htm",
        controller : "parisCtrl"
    }).otherwise({ redirectTo: '/' });
})

.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://miggytech-cloned-migs432.c9users.io/**'
    ]);
}]);
