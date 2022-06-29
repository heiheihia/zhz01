//基于准备好的dom，初始化ECharts图表
var myChart1 = echarts.init(document.getElementById("main3_1"));
var option1 = { //指定第1个图表的配置项和数据
    color: ['LimeGreen', 'DarkGreen', 'red', 'blue', 'Purple'],
    backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
    title: {
        text: '2017年中国脱发人群代际分布',
        left: 'center',
        top: 5,
        textStyle: {
            color: 'rgb(82,123,172)',
            fontSize: 10,
        }
    },
    tooltip: {
        show: true,
        confine: true, //设置是否将tooltip框限制在图表的区域内
        extraCssText: 'width:90px; height:22px;',
        formatter(data) {
            return (
                data.marker + data.name +
                data.value + "%"
            );
        }
    },
    grid: {
        left: '3%',
        bottom: '3%',
        containLabel: true
    },

    legend: {
        data: ['2017'],
        right: 0,
        top: 25,
        itemWidth: 10, //设置图例标记的图形宽度
        itemHeight: 10, //设置图例标记的图形高度
        textStyle: {
            fontSize: 8,
            color: '#fff'
        }, //设置图例的公用文本样式
    },
    xAxis: [{
        data: ["90后", "80后", "70后", "其他"],
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 8
            }
        },

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 8
            }
        },
    }],
    color: ['rgb(52,146,242)', 'rgb(86,111,206)'],
    series: [{ //配置第1个图表的数据系列
        name: '2017',
        type: 'bar',
        barWidth: 10, //设置柱状图中每个柱子的宽度
        data: [36.1, 38.5, 17.8, 7.6],
    }]
};
//基于准备好的dom,初始化ECharts图表
var myChart2 = echarts.init(document.getElementById("main3_2"));
var option2 = { //指定第2个图表的配置项和数据
    color: ['blue', 'LimeGreen', 'DarkGreen', 'red', 'Purple'],
    backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
    title: {
        text: '2021年中国脱发人群代际分布',
        left: 'center',
        top: 5,
        textStyle: {
            color: 'rgb(82,123,172)',
            fontSize: 10,
        }
    },
    tooltip: {
        show: true,
        confine: true, //设置是否将tooltip框限制在图表的区域内
        extraCssText: 'width:90px; height:22px;',
        formatter(data) {
            return (
                data.marker + data.name +
                data.value + "%"
            );
        }
    },
    grid: {
        left: '3%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data: ['2021'],
        right: 0,
        top: 25,
        itemWidth: 10, //设置图例标记的图形宽度
        itemHeight: 10, //设置图例标记的图形高度
        textStyle: {
            fontSize: 8,
            color: '#fff'
        }, //设置图例的公用文本样式
    },
    xAxis: [{
        data: ["90后", "80后", "70后", "其他"],
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 8
            }
        },

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 8
            }
        },
    }],
    series: [{ //配置第2个图表的数据系列
        name: '2021',
        type: 'bar',
        barWidth: 10, //设置柱状图中每个柱子的宽度
        data: [39.3, 37.9, 16.4, 6.4],
    }]
};
myChart1.setOption(option1); //为myChart1对象加载数据
myChart2.setOption(option2); //为myChart2对象加载数据
myChart1.group = 'group1';
myChart2.group = 'group1';
echarts.connect('group1');