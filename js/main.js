/**
*@author Guzhongren
*@date 2016-04-05
*/
//设置map对象的高度
$('#map').height(document.body.clientHeight );

//加载地图
var map = L.map('map',{
    center: [36.809192,103.396953],
    zoom: 8
});
L.tileLayer(GSAUConfig.mapContent.basemaps.GeoQ.url).addTo(map);
 map.locate({setView: true, maxZoom: 16});
//添加信息
addInfoToMap();
//定位
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

//GSAU
// L.marker([GSAUConfig.mapContent.GSAULatLng.lat, GSAUConfig.mapContent.GSAULatLng.lng]).addTo(map).bindPopup(GSAUConfig.ProjectName+ '<br><button id="zoomToGSAU">缩放至</button>').openPopup();
// $('#zoomToGSAU').on('click', function(){
//     map.setZoom(16);
// });
//底图切换
var mbAttr = GSAUConfig.mapContent.basemaps.mb.attr,
  mbUrl = GSAUConfig.mapContent.basemaps.mb.url;
var osmUrl = GSAUConfig.mapContent.basemaps.osm.url,
  osmAttr = GSAUConfig.mapContent.basemaps.osm.attr;
 var geoQUrl = GSAUConfig.mapContent.basemaps.GeoQ.url;

var grayscale   = L.tileLayer(mbUrl, {id: GSAUConfig.mapContent.basemaps.mb.id1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: GSAUConfig.mapContent.basemaps.mb.id2,   attribution: mbAttr}),
    geoQ = L.tileLayer(geoQUrl),
    osm = L.tileLayer(osmUrl, {id: GSAUConfig.mapContent.basemaps.osm.id,attribution: osmAttr});

var baseLayers ={
    'GeoQ' : geoQ,
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
        .bindPopup("你在此点" + radius + "米范围内。"+ "你的地理位置为["+ e.latlng.lng+","+e.latlng.lat+";<a>如想绘制农大人员迁徙图，请将你的姓名[可选]和地理位置粘贴在"+ "<a href="+GSAUConfig.githubIssues+" target='_black'>"+GSAUConfig.githubIssues+"</a>"+"。</a>").openPopup();
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
    var polyline= L.polyline([[location.lat, location.lng], [GSAUConfig.mapContent.GSAULatLng.lat, GSAUConfig.mapContent.GSAULatLng.lng] ], {color: 'green'});
    map.fitBounds(polyline.getBounds());
}
/**
*add infomation to map
*@public
*/
function addInfoToMap(){
    var l=0;
    for(var d in data){
        l++;
    }
    for(var i= 1; i<= l; i++){
        L.circle([data[i].location[1]+ 0.002, data[i].location[0]+ 0.002], 100, {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5
                }).addTo(map).bindPopup(data[i].time+ "在"+ data[i].add+ data[i].desc+ data[i].action+ data[i].name );

    }
}
