var myCharts = echarts.init(document.getElementById('map'))
$.get('../data/china.json', function(chinaJson) {
    // chinaJson 就是中国的各个省份的矢量地图数据
    // console.log(chinaJson);
    // 注册地图数据
    echarts.registerMap('chinaMap', chinaJson)
    var option = {
        geo: {
            type: 'map',
            //chinaMap需要和registerMap中的第一个参数保持一致
            map: 'chinaMap',
            zoom: 1.2,
            // scaleLimit: {
            //     min: 1,
            //     max: 1
            // },
            itemStyle: {
                normal: {
                    areaColor: 'rgb(52,146,242,.5)',
                    borderColor: '#002097'
                },
                emphasis: {
                    areaColor: 'rgb(52,195,242,.8)'
                }
            }
        },
        series: [{
            type: "scatter",
            name: "90后脱发人群城市分布TOP10",
            coordinateSystem: "geo",
            data: [{
                name: "北京",
                value: [116.41, 39.91, 1]
            }, {
                name: "上海",
                value: [121.48, 31.22, 2]
            }, {
                name: "广州",
                value: [113.23, 23.16, 3]
            }, {
                name: "杭州",
                value: [120.19, 30.26, 4]
            }, {
                name: "深圳",
                value: [114.07, 22.62, 5]
            }, {
                name: "成都",
                value: [104.06, 30.67, 6]
            }, {
                name: "苏州",
                value: [120.58, 31.30, 7]
            }, {
                name: "重庆",
                value: [106.55, 29.56, 8]
            }, {
                name: "西安",
                value: [108.94, 34.26, 9]
            }, {
                name: "武汉",
                value: [114.21, 30.30, 10]
            }]
        }],
        tooltip: {
            trigger: "item",
            confine: true, //设置是否将tooltip框限制在图表的区域内
            extraCssText: 'width:150px; height:100px;',
            textStyle: {
                fontSize: 30 // 字体大小
            },
            formatter(data) {
                return (
                    data.marker + data.name +
                    "<br/>" + "TOP :  " +
                    data.value[2]
                );
            }
        },
    }
    myCharts.setOption(option)
})