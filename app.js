var app=angular.module("myApp",[])

app.controller("myController",["$scope",function($scope){
	$scope.message="this is my controller";
}])

app.directive("myCustomerDetailsDirective",function(){
	return{

		restrict:"ECMA",
		template:"<h1>This is my custom directives</h1>",
		replace: true
	}
})