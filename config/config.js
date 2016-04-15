/**
*@author Guzhongren
*@date 2016-04-05
*/
var WebTitle= "甘肃农业大学";




var GSAUConfig= {
    "ProjectName": WebTitle,
    'mapContent': {
        'titleLayer':{
            'url': 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            'attr': '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
            }
        },
        'GSAULatLng':{
            'lat': 36.0898,
            'lng': 103.6990,
            'zoom': 16
        },

    }

}
