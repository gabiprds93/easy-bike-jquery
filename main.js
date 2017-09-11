const app = 
{
    item:
    {
        latitud: undefined,
        longitud: undefined,
        map: undefined,
        miUbicacion: undefined
    },
    
    init: function()
    {
        app.item.map = new google.maps.Map(document.getElementById("map"),
        {
            zoom: 5,
            center: {lat: -9.1191427, lng: -77.0349046},
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        });
        app.setup();
    },
    
    setup: function()
    {
        $("#btnEncuentrame").click(app.buscar);
    },
    
    buscar: function()
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(app.funcionExito, app.funcionError);
        }
    },
    
    funcionExito: function(posicion)
    {
        app.item.latitud = posicion.coords.latitude;
        app.item.longitud = posicion.coords.longitude;
        
        app.item.miUbicacion = new google.maps.Marker(
        {
            position: {lat: app.item.latitud, lng:  app.item.longitud},
            animation: google.maps.Animation.DROP,
            map: app.item.map
        });
        app.item.map.setZoom(17);
        app.item.map.setCenter({lat:  app.item.latitud, lng: app.item.longitud});
    },
    
    funcionError: function(error)
    {
        alert("Tenemos un problema con encontrar tu ubicación");
    }
        
}
$(document).ready(app.init);