angular.module('mouraApp').controller("distribuidorCtrl", function($scope, distribuidorAPI){

   // $scope.distribuidorListar = function(){
        $scope.distribuidores = [];
        var _service = distribuidorAPI.listar();
        _service.success(function (data) {
            $scope.lista = data;
        }).error(function () {
            console.log("Deu Erro.")
        });
        
    //}
});

