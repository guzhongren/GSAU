/**
*@author Guzhongren
*@date 2016-04-05
*/

//加载地图
var map = L.map('map');
L.tileLayer(GSAUConfig.mapContent.titleLayer.url, {
  attribution: GSAUConfig.mapContent.titleLayer.attr}).addTo(map);
map.locate({setView: true, maxZoom: 16});
//定位
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

//GSAU
L.marker([GSAUConfig.mapContent.GSAULatLng.lat, GSAUConfig.mapContent.GSAULatLng.lng]).addTo(map).bindPopup(GSAUConfig.ProjectName+ '<br><a id="zoomToGSAU">缩放至</a>').openPopup();
$('#zoomToGSAU').on('click', function(){
    alert('dafsa');
    map.setZoom(16)});
//底图切换
var mbAttr = GSAUConfig.mapContent.basemaps.mb.attr,
  mbUrl = GSAUConfig.mapContent.basemaps.mb.url;
var osmUrl = GSAUConfig.mapContent.basemaps.osm.url,
  osmAttr = GSAUConfig.mapContent.basemaps.osm.attr;

var grayscale   = L.tileLayer(mbUrl, {id: GSAUConfig.mapContent.basemaps.mb.id1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: GSAUConfig.mapContent.basemaps.mb.id2,   attribution: mbAttr}),
    osm = L.tileLayer(osmUrl, {id: GSAUConfig.mapContent.basemaps.osm.id,attribution: osmAttr});

var baseLayers ={
  '灰度图':grayscale,
  '街道图':streets,
  'OSM': osm
};
var layerControl = new L.control.layers(baseLayers);
layerControl.addTo(map);

//定位处理
function onLocationFound(e) {
    var radius = e.accuracy / 10;
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
    connectYouToSchoolByPolyline(e.latlng);
}
//定位错误
function onLocationError(e) {
    alert(e.message);
}
/**
*距离
*@public
*@location: [lat,lng] 当前位置
*/
function connectYouToSchoolByPolyline(location){
    var polyline= L.polyline([[location.lat, location.lng], [GSAUConfig.mapContent.GSAULatLng.lat, GSAUConfig.mapContent.GSAULatLng.lng] ], {color: 'green'}).addTo(map);
    map.fitBounds(polyline.getBounds());
}
