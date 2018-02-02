angular.module('mouraApp', ['angularUtils.directives.dirPagination']).service('distribuidorAPI', ['$http', function ($http) {
    
    var _listar = function(){
        return $http.get('https://api.services.mourafacil.com.br/api/v1/distribuidor');
    };
    
    return {
        listar: _listar
    }
}]);

