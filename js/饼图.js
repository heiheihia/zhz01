//基于准备好的DOM，初始化ECharts图表
var myChart1 = echarts.init(document.getElementById("main5_1"));
//指定图表的配置项和数据
var option = {
    title: {
        text: '90后脱发人群占比（男）',
        left: 'center',
        top: 20,
        textStyle: {
            color: 'rgb(82,123,172)',
            fontSize: 12
        }
    },
    tooltip: {
        trigger: 'item',
        confine: true
    },
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [{
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
            value: 51.4,
            name: '脱发'
        }, {
            value: 48.6,
            name: '不脱发'
        }].sort(function(a, b) {
            return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
            color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
            show: false,
        },
        itemStyle: {
            color: 'rgb(41,182,203)',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 200;
        }
    }]
};
//使用刚指定的配置项和数据显示图表
myChart1.setOption(option);


//基于准备好的DOM，初始化ECharts图表
var myChart2 = echarts.init(document.getElementById("main5_2"));
//指定图表的配置项和数据
var option = {
    title: {
        text: '90后脱发人群占比（女）',
        left: 'center',
        top: 20,
        textStyle: {
            color: 'rgb(82,123,172)',
            fontSize: 12
        }
    },
    tooltip: {
        trigger: 'item',
        confine: true
    },
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    color: ['rgb(41,182,203)', 'rgb(52,195,242)'],
    series: [{
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
            value: 43.7,
            name: '脱发'
        }, {
            value: 56.3,
            name: '不脱发'
        }].sort(function(a, b) {
            return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
            color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
            show: false,
        },
        itemStyle: {
            color: 'rgb(52,195,242)',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function(idx) {
            return Math.random() * 200;
        }
    }]
};
//使用刚指定的配置项和数据显示图表
myChart2.setOption(option);