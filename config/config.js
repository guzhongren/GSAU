/* Author :guzhongren*/

var WebTitle= "甘肃农业大学";
var github= "https://guzhongren.github.io";
var GSAUConfig= {
    "ProjectName": WebTitle,
    "github": github,
    "githubIssues": github+'/issues',
    'mapContent': {
        'titleLayer':{
            'url': 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        },
        'basemaps': {
            'mb': {
                'url':'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw',
                'attr': 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                'id1': 'mapbox.light',
                'id2': 'mapbox.streets'
            },
            'osm': {
                'url':'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                'attr': '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                'id': 'osm'
            },
            'github' : {
                'url' : 'https://c.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
                'attr': 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
                'id': 'github',
                'key': 'BC9A493B41014CAABB98F0471D759707'
            },
            'foursquare' : {
                'url' : 'https://a.tiles.mapbox.com/v3/foursquare.map-0y1jh28j/{z}/{x}/{y}.png',
                'attr': 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
                'id': 'foursquare',
                'key': 'BC9A493B41014CAABB98F0471D759707'
            },
            'GeoQ' : {
                'url' : 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
            }
        },
        'GSAULatLng':{
            'lat': 36.0898,
            'lng': 103.6990,
            'zoom': 16
        },
    }
}
