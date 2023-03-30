'use strict';
angular.module('music').controller('Register',function($scope,$state,$dialog,Restangular){
$scope.register=function(){
   
    var promise = null;
    if ($scope.user.password != $scope.user.passwordconfirm) {
        var title = 'Register failed';
        var msg = 'Passwords do not match';
        var btns = [{ result:'ok', label: 'OK', cssClass: 'btn-primary' }];
        $dialog.messageBox(title, msg, btns);
    } else {
        console.log("register reached","nammi")
        // console.log($scope.user)
        promise = Restangular
        .one('user')
        .put($scope.user);
        promise.then(function() {
            var title = 'Registration Success';
            var msg = 'You can login now';
            var btns = [{ result:'ok', label: 'OK', cssClass: 'btn-primary' }];

            $dialog.messageBox(title, msg, btns);
            
            $state.transitionTo("login");
        });
    }
};
});
