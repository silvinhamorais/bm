
//lê e retorna dados do json
(function() {
	window.onload = function() {
    $.ajax({
        url: 'https://api.services.mourafacil.com.br/api/v1/distribuidor', 
        success: function(result){
          exibirMapa(result['distribuidores']);
        }
    });
	}

})();   


function exibirMapa(json){

    // Cria um mapa na posição do brasil
    var map = new google.maps.Map(document.getElementById("map"), {
          center: new google.maps.LatLng(-14.4, -52.1),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

    // Creating a global infoWindow object that will be reused by all markers
    var infoWindow = new google.maps.InfoWindow();

    // Looping no JSON
    for (var i = 0, length = json.length; i < length; i++) {
      var data = json[i],
        latLng = new google.maps.LatLng(data.lat, data.lng);

      // cria os pinos e carrega no mapa
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: data.title
      });

      // 
      (function(marker, data) {

        // evento de clicar no pinos
        google.maps.event.addListener(marker, "click", function(e) {
          
          var descricao = data.nome + '<br>' + data.endereco.logradouro + '<br>' + data.telefone;
          infoWindow.setContent(descricao);
          infoWindow.open(map, marker);
        });


      })(marker, data);

    }
  }
