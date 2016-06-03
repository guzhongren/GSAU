/**
*@author Guzhongren
*@date 2016-04-05
*/
var overlay = new L.echartsLayer3(map, echarts);
var chartsContainer = overlay.getEchartsContainer();
var myChart = overlay.initECharts(chartsContainer);
var geoCoordMap = {
        '1': data[1].location,
        '2': data[2].location,
        '3': data[3].location,
        '4': data[4].location,
        '5': data[5].location,
        '6': data[6].location,
        '7': data[7].location,
        '8': data[8].location,
        '9': data[9].location,
        '10': data[10].location,
        '11': data[11].location,
        '12': data[12].location
    };

    var NDData = [
        [{name: '1'}, {name: '2', value: 39*2}],
        [{name: '2'}, {name: '3', value: 45*2}],
        [{name: '3'}, {name: '4', value: 46*2}],
        [{name: '4'}, {name: '5', value: 47*2}],
        [{name: '5'}, {name: '6', value: 47*2}],
        [{name: '6'}, {name: '7', value: 50*2}],
        [{name: '7'}, {name: '8', value: 51*2}],
        [{name: '8'}, {name: '9', value: 51*2}],
        [{name: '9'}, {name: '10', value: 52*2}],
        [{name: '10'}, {name: '11', value: 58*2}],
        [{name: '11'}, {name: '12', value: 81*2}]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['甘肃农业大学', NDData]].forEach(function (item, i) {
        series.push({
                    name: item[0] + '迁徙',
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + '迁徙',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + '迁徙',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
    });

    option = {
//        backgroundColor: '#404a59',
        title: {
            text: '甘肃农业大学迁徙史',
            subtext: 'Develop By 谷中仁',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['农大 迁徙'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: '',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };
    // 使用刚指定的配置项和数据显示图表。
    overlay.setOption(option);
