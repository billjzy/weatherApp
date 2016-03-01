$(document).ready(function(){
        //var lonlat = new OpenLayers.LonLat(-73, 0);

        var map = new OpenLayers.Map('map',{
            maxResolution: 1000
        });
        // Create OSM overlays
        var mapnik = new OpenLayers.Layer.OSM();

        var layer_cloud = new OpenLayers.Layer.XYZ(
            "clouds",
            "http://${s}.tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png",
            {
                isBaseLayer: false,
                opacity: 0.7,
                sphericalMercator: true
            }
        );

        var layer_precipitation = new OpenLayers.Layer.XYZ(
            "precipitation",
            "http://${s}.tile.openweathermap.org/map/precipitation/${z}/${x}/${y}.png",
            {
                isBaseLayer: false,
                opacity: 0.7,
                sphericalMercator: true
            }
        );
        var layer_temp = new OpenLayers.Layer.XYZ(
            "temp",
            "http://${s}.tile.openweathermap.org/map/temp/${z}/${x}/${y}.png",
            {
                isBaseLayer: false,
                opacity: 0.7,
                sphericalMercator: true
            }
        );
        var layer_rain = new OpenLayers.Layer.XYZ(
            "rain",
            "http://${s}.tile.openweathermap.org/map/rain/${z}/${x}/${y}.png",
            {
                isBaseLayer: false,
                opacity: 0.7,
                sphericalMercator: true
            }
        );
       
        
   
        map.addLayers([mapnik, layer_cloud ,layer_precipitation, layer_rain]);

        //map.addLayer(layer_cloud);
        //set initial state.
        $('#inlineCheckbox1').change(function(){
            var $this = $(this);
            if($this.prop("checked")){
              map.addLayer(layer_rain);  
            } 
            else   map.removeLayer(layer_rain);
        }).change();

        $('#inlineCheckbox2').change(function(){
            var $this = $(this);
            if($this.prop("checked")){
                map.addLayer(layer_precipitation);    
            }
            else  map.removeLayer(layer_precipitation);  
        }).change();

        $('#inlineCheckbox3').change(function(){
            var $this = $(this);
            if($this.prop("checked")){
               map.addLayer(layer_temp); 
            }
            else  map.removeLayer(layer_temp);  
        }).change();

        $("#inlineCheckbox4").change(function(){
            var $this = $(this);
            if($this.prop("checked")){
                map.addLayer(layer_cloud);  
            }
            else   map.removeLayer(layer_cloud);
        }).change();
});
        
